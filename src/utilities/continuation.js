"use strict";

import { arrayUtilities } from "necessary";

const { filter: arrayFilter } = arrayUtilities;

export function one(array, callback, ...initialArguments) {
  const forward = initialArguments.pop(),
        back = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      return (count === 1) ?
               forward(...nextArguments) :
                 back();
    }

    const element = array[index];

    return callback(element, ...initialArguments, () => next(index + 1, ...nextArguments), (...callbackArguments) => {
      count++;

      if (count === 2) {
        return back();
      }

      return next(index + 1, ...callbackArguments);
    });
  }

  let count = 0;

  return next(index, ...initialArguments);
}

export function some(array, callback, ...initialArguments) {
  const forward = initialArguments.pop(),
        back = initialArguments.pop(),
        length = array.length;

  function next(index) {
    if (index === length) {
      return back();
    }

    const element = array[index];

    return callback(element, ...initialArguments, () => next(index + 1), forward);
  }

  const index = 0;

  return next(index);
}

export function each(array, callback, ...initialArguments) {
  const forward = initialArguments.pop(),
        back = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      return (count !== 0) ?
               forward(...nextArguments) :
                 back();
    }

    const element = array[index];

    return callback(element, ...nextArguments, back, (...callbackArguments) => {
      count++;

      return next(index + 1, ...callbackArguments);
    });
  }

  let count = 0;

  return next(index, ...initialArguments);
}

export function every(array, callback, ...initialArguments) {
  const forward = initialArguments.pop(),
        back = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      return forward(...nextArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, back, (...callbackArguments) => {
      return next(index + 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function reduce(array, initialValue, callback, ...initialArguments) {
  const forward = initialArguments.pop(),
        back = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, value, ...nextArguments) {
    if (index === length) {
      return forward(value, ...nextArguments);
    }

    const element = array[index];

    return callback(element, value, ...nextArguments, back, (value, ...callbackArguments) => {
      return next(index + 1, value, ...callbackArguments);
    });
  }

  return next(index, initialValue, ...initialArguments);
}

export function forEach(array, callback, ...initialArguments) {
  const forward = initialArguments.pop(),
        back = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      return forward(...nextArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, back, (...callbackArguments) => {
      return next(index + 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function forwardsEvery(array, callback, ...initialArguments) {
  const forward = initialArguments.pop(),
        back = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      return forward(...nextArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, back, (...callbackArguments) => {
      return next(index + 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function backwardsEvery(array, callback, ...initialArguments) {
  const forward = initialArguments.pop(),
        back = initialArguments.pop(),
        length = array.length,
        index = length - 1;

  function next(index, ...nextArguments) {
    if (index === -1) {
      return forward(...nextArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, back, (...callbackArguments) => {
      return next(index - 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function forwardsForEach(array, callback, ...initialArguments) {
  const forward = initialArguments.pop(),
        back = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      return forward(...nextArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, back, (...callbackArguments) => {
      return next(index + 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function backwardsForEach(array, callback, ...initialArguments) {
  const forward = initialArguments.pop(),
        back = initialArguments.pop(),
        length = array.length,
        index = length - 1;

  function next(index, ...nextArguments) {
    if (index === -1) {
      return forward(...nextArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, back, (...callbackArguments) => {
      return next(index - 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function filter(array, callback, ...initialArguments) {
  const forward = initialArguments.pop(),
        back = initialArguments.pop(),
        length = array.length,
        deletedElements = [],
        index = length - 1;

  function next(index, ...nextArguments) {
    if (index === -1) {
      return forward(deletedElements, ...nextArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, back, (passed, ...callbackArguments) => {
      if (!passed) {
        const startIndex = index, ///
              deleteCount = 1,
              deletedElement = element; ///

        array.splice(startIndex, deleteCount);

        deletedElements.unshift(deletedElement);
      }

      return next(index - 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function prune(array, callback, ...initialArguments) {
  const forward = initialArguments.pop(),
        back = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      const deletedElement = undefined;

      return forward(deletedElement, ...nextArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, back, (passed, ...callbackArguments) => {
      if (!passed) {
        const startIndex = index, ///
              deleteCount = 1,
              deletedElement = element; ///

        array.splice(startIndex, deleteCount);

        return forward(deletedElement, ...callbackArguments);
      }

      return next(index + 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function extract(array, callback, ...initialArguments) {
  const forward = initialArguments.pop(),
        back = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      const deletedElement = undefined;

      return forward(deletedElement, ...nextArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, back, (passed, ...callbackArguments) => {
      if (passed) {
        const startIndex = index, ///
              deleteCount = 1,
              deletedElement = element; ///

        array.splice(startIndex, deleteCount);

        return forward(deletedElement, ...callbackArguments);
      }

      return next(index + 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function match(arrayA, arrayB, callback, ...initialArguments) {
  const forward = initialArguments.pop(),
        back = initialArguments.pop(),
        arrayALength = arrayA.length,
        arrayBLength = arrayB.length;

  if (arrayALength !== arrayBLength) {
    return back();
  }

  const length = arrayALength,  ///
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      return forward(...nextArguments);
    }

    const elementA = arrayA[index],
          elementB = arrayB[index];

    return callback(elementA, elementB, ...nextArguments, back, (...callbackArguments) => {
      return next(index + 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function resolve(arrayA, arrayB, callback, ...initialArguments) {
  arrayA = [  ///
    ...arrayA
  ];

  const forward = initialArguments.pop(),
        back = initialArguments.pop();

  function nextPass(...nextArguments) {
    const length = arrayA.length; ///

    if (length === 0) {
      return forward(...nextArguments);
    }

    function nextElement(index, success, ...currentArguments) {
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

        return nextPass(...currentArguments);
      }

      const elementA = arrayA[index];

      return callback(elementA, ...currentArguments, () => nextElement(index + 1, success, ...currentArguments), (...callbackArguments) => {
          const elementB = elementA;  ///

          arrayB.push(elementB);

          return nextElement(index + 1, true, ...callbackArguments);
        }
      );
    }

    const index = 0,
          success = false;

    return nextElement(index, success, ...nextArguments);
  }

  return nextPass(...initialArguments);
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
  reduce,
  forEach,
  forwardsEvery,
  backwardsEvery,
  forwardsForEach,
  backwardsForEach,
  filter,
  prune,
  extract,
  match,
  resolve,
  all,
  exists
};
