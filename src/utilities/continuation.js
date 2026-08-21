"use strict";

import { arrayUtilities } from "necessary";

const { filter: arrayFilter } = arrayUtilities;

export function one(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      if (count !== 1) {
        return back();
      }

      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...initialArguments,
      (...forwardArguments) => {
        forwardArguments.pop();  ///

        count++;

        if (count === 2) {
          return back();
        }

        return next(index + 1, ...forwardArguments);
      },
      (...backArguments) => {
        const exception = backArguments.pop();

        if (exception) {
          return back(exception);
        }

        return next(index + 1, ...nextArguments);
      },
      index
    );
  }

  let count = 0;

  return next(index, ...initialArguments);
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
      (...backArguments) => {
        const exception = backArguments.pop();

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
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
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
        forwardArguments.pop();  ///

        count++;

        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  let count = 0;

  return next(index, ...initialArguments);
}

export function every(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        forwardArguments.pop();  ///

        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  return next(index, ...initialArguments);
}

export function map(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, arrayB, ...nextArguments) {
    if (index === length) {
      return forward(arrayB, ...nextArguments, back);
    }

    const elementA = arrayA[index];

    return callback(
      elementA,
      ...nextArguments,
      (elementB, ...forwardArguments) => {
        forwardArguments.pop();  ///

        arrayB = [  ///
          ...arrayB,
          elementB
        ];

        return next(index + 1, arrayB, ...forwardArguments);
      },
      back,
      index
    );
  }

  const arrayA = array, ///
        arrayB = [];

  return next(index, arrayB, ...initialArguments);
}

export function find(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      return back();
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        forwardArguments.pop();  ///

        return forward(element, ...forwardArguments, back);
      },
      (...backArguments) => {
        const exception = backArguments.pop();

        if (exception) {
          return back(exception);
        }

        return next(index + 1, ...nextArguments);
      },
      index
    );
  }

  return next(index, ...initialArguments);
}

export function reduce(array, initialValue, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, value, ...nextArguments) {
    if (index === length) {
      return forward(value, ...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      value,
      ...nextArguments,
      (value, ...forwardArguments) => {
        forwardArguments.pop();  ///

        return next(index + 1, value, ...forwardArguments);
      },
      back,
      index
    );
  }

  return next(index, initialValue, ...initialArguments);
}

export function forEach(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        forwardArguments.pop();  ///

        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  return next(index, ...initialArguments);
}

export function filter(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length,
        deletedElements = [],
        index = length - 1;

  function next(index, ...nextArguments) {
    if (index === -1) {
      return forward(deletedElements, ...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (passed, ...forwardArguments) => {
        forwardArguments.pop();  ///

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

  return next(index, ...initialArguments);
}

export function prune(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      const deletedElement = undefined;

      return forward(deletedElement, ...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (passed, ...forwardArguments) => {
        forwardArguments.pop();  ///

        if (!passed) {
          const startIndex = index, ///
                deleteCount = 1,
                deletedElement = element; ///

          array.splice(startIndex, deleteCount);

          return forward(deletedElement, ...forwardArguments, back);
        }

        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  return next(index, ...initialArguments);
}

export function extract(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      const deletedElement = undefined;

      return forward(deletedElement, ...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (passed, ...forwardArguments) => {
        forwardArguments.pop();  ///

        if (passed) {
          const startIndex = index, ///
                deleteCount = 1,
                deletedElement = element; ///

          array.splice(startIndex, deleteCount);

          return forward(deletedElement, ...forwardArguments, back);
        }

        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  return next(index, ...initialArguments);
}

export function match(arrayA, arrayB, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        arrayALength = arrayA.length,
        arrayBLength = arrayB.length;

  if (arrayALength !== arrayBLength) {
    return back();
  }

  const length = arrayALength,  ///
        index = 0;

  function next(index, ...nextArguments) {
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
        forwardArguments.pop();  ///

        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  return next(index, ...initialArguments);
}

export function resolve(arrayA, arrayB, callback, ...initialArguments) {
  arrayA = [  ///
    ...arrayA
  ];

  const back = initialArguments.pop(),
        forward = initialArguments.pop();

  function nextPass(...nextPassArguments) {
    const length = arrayA.length; ///

    if (length === 0) {
      return forward(...nextPassArguments, back);
    }

    function nextElement(index, success, ...nextElementArguments) {
      if (index === length) {
        if (!success) {
          return back();
        }

        arrayFilter(arrayA, (elementA) => {
          const arrayBIncludesElementA = arrayB.includes(elementA);

          if (!arrayBIncludesElementA) {
            return true;
          }
        });

        return nextPass(...nextElementArguments);
      }

      const elementA = arrayA[index];

      return callback(
        elementA,
        ...nextElementArguments,
        (...forwardArguments) => {
          forwardArguments.pop();  ///

          const elementB = elementA;  ///

          arrayB.push(elementB);

          return nextElement(index + 1, true, ...forwardArguments);
        },
        (...backArguments) => {
          const exception = backArguments.pop();

          if (exception) {
            return back(exception);
          }

          return nextElement(index + 1, success, ...nextElementArguments);
        },
        index
      );
    }

    const index = 0,
          success = false;

    return nextElement(index, success, ...nextPassArguments);
  }

  return nextPass(...initialArguments);
}

export function forwardsEvery(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        forwardArguments.pop();  ///

        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  return next(index, ...initialArguments);
}

export function backwardsEvery(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length,
        index = length - 1;

  function next(index, ...nextArguments) {
    if (index === -1) {
      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        forwardArguments.pop();  ///

        return next(index - 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  return next(index, ...initialArguments);
}

export function forwardsForEach(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        forwardArguments.pop();  ///

        return next(index + 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  return next(index, ...initialArguments);
}

export function backwardsForEach(array, callback, ...initialArguments) {
  const back = initialArguments.pop(),
        forward = initialArguments.pop(),
        length = array.length,
        index = length - 1;

  function next(index, ...nextArguments) {
    if (index === -1) {
      return forward(...nextArguments, back);
    }

    const element = array[index];

    return callback(
      element,
      ...nextArguments,
      (...forwardArguments) => {
        forwardArguments.pop();  ///

        return next(index - 1, ...forwardArguments);
      },
      back,
      index
    );
  }

  return next(index, ...initialArguments);
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
  find,
  reduce,
  forEach,
  filter,
  prune,
  extract,
  match,
  resolve,
  forwardsEvery,
  backwardsEvery,
  forwardsForEach,
  backwardsForEach,
  all,
  exists
};
