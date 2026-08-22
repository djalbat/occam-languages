"use strict";

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
        arrayB = [],
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

  const index = 0;

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
        deletedElements = [],
        length = array.length;

  function next(index, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === -1) {
      return forward(deletedElements, ...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (passed, ...forwardArguments) => {
        if (!passed) {
          const startIndex = index, ///
                deleteCount = 1,
                deletedElement = element; ///

          array.splice(startIndex, deleteCount);

          deletedElements.unshift(deletedElement);
        }

        return next(index - 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = length - 1;

  return next(index, ...initialArguments, back);
}

export function prune(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === length) {
      const deletedElement = undefined;

      return forward(deletedElement, ...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (passed, ...forwardArguments) => {
        if (!passed) {
          const startIndex = index, ///
                deleteCount = 1,
                deletedElement = element; ///

          array.splice(startIndex, deleteCount);

          return forward(deletedElement, ...forwardArguments);
        }

        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = 0;

  return next(index, ...initialArguments, back);
}

export function extract(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length;

  function next(index, ...nextArguments) {
    const back = nextArguments.pop();

    if (index === length) {
      const deletedElement = undefined;

      return forward(deletedElement, ...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (passed, ...forwardArguments) => {
        if (passed) {
          const startIndex = index, ///
                deleteCount = 1,
                deletedElement = element; ///

          array.splice(startIndex, deleteCount);

          return forward(deletedElement, ...forwardArguments);
        }

        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = 0;

  return next(index, ...initialArguments, back);
}

export function find(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        elements = [],
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
      (passed, ...forwardArguments) => {
        if (passed) {
          return next(index + 1, [ ...elements, element ], ...forwardArguments);
        }

        return next(index + 1, elements, ...forwardArguments);
      },
      back,
      index
    );
  }

  const index = 0;

  return next(index, elements, ...initialArguments, back);
}

export function resolve(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        arrayA = array, ///
        arrayB = [];

  function next(arrayA, arrayB, ...nextArguments) {
    const back = nextArguments.pop(),
          length = arrayA.length;

    if (length === 0) {
      return forward(arrayB, ...nextArguments, back);
    }

    return find(
      arrayA,
      (element, ...callbackArguments) => {
        const index = callbackArguments.pop(),
              back = callbackArguments.pop(),
              forward = callbackArguments.pop();

        return callback(
          element,
          ...callbackArguments,
          (...forwardArguments) => {
            const success = true;

            return forward(success, ...forwardArguments);
          },
          (exception) => {
            if (exception) {
              return back(exception);
            }

            const success = false;

            return forward(success, ...callbackArguments, back);
          },
          index
        );
      },
      ...nextArguments,
      (elements, ...forwardArguments) => {
        const elementsLength = elements.length;

        if (elementsLength === 0) {
          return back();
        }

        return next(
          arrayA.filter((element) => !elements.includes(element)),
          [ ...arrayB, ...elements ],
          ...forwardArguments
        );
      },
      back
    );
  }

  return next(arrayA, arrayB, ...initialArguments, back);
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
  one,
  some,
  each,
  every,
  map,
  reduce,
  forEach,
  filter,
  prune,
  extract,
  find,
  resolve,
  match,
  forwardsEvery,
  backwardsEvery,
  forwardsForEach,
  backwardsForEach,
  all,
  exists
};
