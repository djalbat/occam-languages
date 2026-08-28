"use strict";

export function cut(...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop();

  return (...forwardArguments) => {
    forwardArguments.pop(); ///

    return forward(...forwardArguments, back);
  };
}

export function isolate(callback, ...initialArguments) {
  const back = initialArguments.pop(),
    forward = initialArguments.pop();

  return callback(...initialArguments, (...callbackArguments) => {
    const back = callbackArguments.pop();

    return forward(...initialArguments, back);
  }, back);
}

export function one(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, count, ...nextArguments) {
    if (index === length) {
      if (count === 0) {
        return back();
      }

      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...initialArguments,
      (...forwardArguments) => {
        if (count === 1) {
          return back();
        }

        forwardArguments.pop(); ///

        return next(index + 1, count + 1, ...forwardArguments);
      },
      (exception) => {
        if (exception) {
          return back(exception);
        }

        return next(index + 1, count, ...nextArguments);
      },
      index
    );
  }

  const index = 0,
        count = 0;

  return next(index, count);
}

export function some(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index) {
    if (index === length) {
      return back();
    }

    const element = array[index];

    return callback(
      element,
      ...initialArguments,
      forward,
      (exception) => {
        if (exception) {
          return back(exception);
        }

        return next(index + 1);
      },
      index
    );
  }

  const index = 0;

  return next(index);
}

export function each(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, count, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === length) {
      if (count === 0) {
        return back();
      }

      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        return next(index + 1, count + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = 0,
        count = 0;

  return next(index, count, ...initialArguments, back);
}

export function every(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === length) {
      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = 0;

  return next(index, ...initialArguments, back);
}

export function map(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        arrayA = array, ///
        length = array.length;

  function next(index, arrayB, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === length) {
      return forward(arrayB, ...nextArguments, back);
    }

    const elementA = arrayA[index];

    return callback(
      elementA,
      ...nextArguments,
      (elementB, ...forwardArguments) => {
        return next(index + 1, [ ...arrayB, elementB ], ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = 0,
        arrayB = [];

  return next(index, arrayB, ...initialArguments, back);
}

export function reduce(array, initialValue, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, value, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === length) {
      return forward(value, ...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      value,
      ...nextArguments,
      (value, ...forwardArguments) => {
        return next(index + 1, value, ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = 0;

  return next(index, initialValue, ...initialArguments, back);
}

export function forEach(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === length) {
      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = 0;

  return next(index, ...initialArguments, back);
}

export function filter(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, array, deletedElements, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === -1) {
      return forward(array, deletedElements, ...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        return next(index - 1, array, deletedElements, ...forwardArguments);
      },
      (exception) => {
        if (exception) {
          return back(exception);
        }

        const deletedElement = element; ///

        return next(
          index - 1,
          [ ...array.slice(0, index), ...array.slice(index + 1) ],
          [ deletedElement, ...deletedElements ],
          ...nextArguments,
          back
        );
      },
      index
    );
  }

  const index = length - 1,
        deletedElements = [];

  return next(index, array, deletedElements, ...initialArguments, back);
}

export function find(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, elements, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === length) {
      return forward(elements, ...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        return next(index + 1, [ ...elements, element ], ...forwardArguments);
      },
      (exception) => {
        if (exception) {
          return back(exception);
        }

        return next(index + 1, elements, ...nextArguments, back);
      },
      index
    );
  }

  const index = 0,
    elements = [];

  return next(index, elements, ...initialArguments, back);
}

export function prune(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, array, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === length) {
      return back();
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        return next(index + 1, array, ...forwardArguments);
      },
      (exception) => {
        if (exception) {
          return back(exception);
        }

        const deletedElement = element; ///

        return forward(
          [ ...array.slice(0, index), ...array.slice(index + 1) ],
          deletedElement,
          ...nextArguments,
          back
        );
      },
      index
    );
  }

  const index = 0;

  return next(index, array, ...initialArguments, back);
}

export function extract(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, array, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === length) {
      return back();
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        const deletedElement = element; ///

        return forward(
          [ ...array.slice(0, index), ...array.slice(index + 1) ],
          deletedElement,
          ...forwardArguments
        );
      },
      (exception) => {
        if (exception) {
          return back(exception);
        }

        return next(index + 1, array, ...nextArguments, back);
      },
      index
    );
  }

  const index = 0;

  return next(index, array, ...initialArguments, back);
}

export function resolve(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop();

  function next(arrayA, arrayB, ...nextArguments) {
    const length = arrayA.length;

    if (length === 0) {
      return forward(arrayB, ...nextArguments, back);
    }

    return find(
      arrayA,
      callback,
      ...nextArguments,
      (elements, ...forwardArguments) => {
        const elementsLength = elements.length;

        if (elementsLength === 0) {
          return back();
        }

        forwardArguments.pop(); ///

        return next(
          arrayA.filter((element) => !elements.includes(element)),
          [ ...arrayB, ...elements ],
          ...forwardArguments
        );
      },
      back
    );
  }

  const arrayA = array, ///
        arrayB = [];

  return next(arrayA, arrayB, ...initialArguments);
}

export function match(arrayA, arrayB, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        arrayALength = arrayA.length,
        arrayBLength = arrayB.length,
        length = arrayALength;  ///

  if (arrayALength !== arrayBLength) {
    return back();
  }

  function next(index, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === length) {
      return forward(...nextArguments, back);
    }

    const elementA = arrayA[index],
          elementB = arrayB[index];

    return callback(
      elementA,
      elementB,
      ...nextArguments,
      (...forwardArguments) => {
        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = 0;

  return next(index, ...initialArguments, back);
}

export function forwardsEvery(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === length) {
      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = 0;

  return next(index, ...initialArguments, back);
}

export function backwardsEvery(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === -1) {
      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        return next(index - 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = length - 1;

  return next(index, ...initialArguments, back);
}

export function forwardsForEach(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === length) {
      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = 0;

  return next(index, ...initialArguments, back);
}

export function backwardsForEach(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === -1) {
      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        return next(index - 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = length - 1;

  return next(index, ...initialArguments, back);
}

export function all(callbacks, ...initialArguments) {
  return every(callbacks, (callback, ...callbackArguments) => {
    return callback(...callbackArguments);
  }, ...initialArguments);
}

export function exists(callbacks, ...initialArguments) {
  return some(callbacks, (callback, ...callbackArguments) => {
    return callback(...callbackArguments);
  }, ...initialArguments);
}

export default {
  cut,
  isolate,
  one,
  some,
  each,
  every,
  map,
  reduce,
  forEach,
  filter,
  find,
  prune,
  extract,
  resolve,
  match,
  forwardsEvery,
  backwardsEvery,
  forwardsForEach,
  backwardsForEach,
  all,
  exists
};
