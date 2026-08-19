"use strict";

import { arrayUtilities } from "necessary";

const { filter: arrayFilter } = arrayUtilities;

export function one(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      const success = (count === 1),
        finalArguemnts = success ?
                            nextArguments : ///
                              initialArguments; ///

      return continuation(success, ...finalArguemnts);
    }

    const element = array[index];

    return callback(element, ...initialArguments, (success, ...callbackArguments) => {
      if (success) {
        count++;

        if (count === 2) {
          const success = false,
                finalArguments = initialArguments;  ///

          return continuation(success, ...finalArguments);
        }

        return next(index + 1, ...callbackArguments);
      }

      return next(index + 1, ...nextArguments);
    });
  }

  let count = 0;

  return next(index, ...initialArguments);
}

export function some(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length;

  function next(index) {
    if (index === length) {
      const success = false,
            finalArguments = initialArguments; ///

      return continuation(success, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...initialArguments, (success, ...callbackArguments) => {
      if (success) {
        const finalArguments = callbackArguments; ///

        return continuation(success, ...finalArguments);
      }

      return next(index + 1);
    });
  }

  const index = 0;

  return next(index);
}

export function each(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      const success = (count !== 0),
        finalArguments = success ?
                            nextArguments : ///
                              initialArguments; ///

      return continuation(success, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, (success, ...callbackArguments) => {
      if (!success) {
        const finalArguments = initialArguments;  ///

        return continuation(success, ...finalArguments);
      }

      count++;

      return next(index + 1, ...callbackArguments);
    });
  }

  let count = 0;

  return next(index, ...initialArguments);
}

export function every(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      const success = true,
            finalArguments = nextArguments; ///

      return continuation(success, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, (success, ...callbackArguments) => {
      if (!success) {
        const finalArguments = initialArguments;  ///

        return continuation(success, ...finalArguments);
      }

      return next(index + 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function reduce(array, initialValue, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, value, ...nextArguments) {
    if (index === length) {
      const finalArguments = nextArguments; ///

      return continuation(value, ...finalArguments);
    }

    const element = array[index];

    return callback(element, value, ...nextArguments, (value, ...callbackArguments) => {
      return next(index + 1, value, ...callbackArguments);
    });
  }

  return next(index, initialValue, ...initialArguments);
}

export function forEach(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      const finalArguments = nextArguments; ///

      return continuation(...finalArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, (...callbackArguments) => {
      return next(index + 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function forwardsEvery(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      const success = true,
            finalArguments = nextArguments; ///

      return continuation(success, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, (success, ...callbackArguments) => {
      if (!success) {
        const finalArguments = initialArguments;  ///

        return continuation(success, ...finalArguments);
      }

      return next(index + 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function backwardsEvery(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length,
        index = length - 1;

  function next(index, ...nextArguments) {
    if (index === -1) {
      const success = true,
            finalArguments = nextArguments; ///

      return continuation(success, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, (success, ...callbackArguments) => {
      if (!success) {
        const finalArguments = initialArguments;  ///

        return continuation(success, ...finalArguments);
      }

      return next(index - 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function forwardsForEach(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      const finalArguments = nextArguments; ///

      return continuation(...finalArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, (...callbackArguments) => {
      return next(index + 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function backwardsForEach(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length,
        index = length - 1;

  function next(index, ...nextArguments) {
    if (index === -1) {
      const finalArguments = nextArguments; ///

      return continuation(...finalArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, (...callbackArguments) => {
      return next(index - 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function filter(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length,
        deletedElements = [],
        index = length - 1;

  function next(index, ...nextArguments) {
    if (index === -1) {
      const finalArguments = nextArguments; ///

      return continuation(deletedElements, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...nextArguments, (passed, ...callbackArguments) => {
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
  const continuation = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index) {
    if (index === length) {
      const deletedElement = undefined,
            finalArguments = initialArguments; ///

      return continuation(deletedElement, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...initialArguments, (passed, ...callbackArguments) => {
      if (!passed) {
        const startIndex = index, ///
              deleteCount = 1,
              deletedElement = element, ///
              finalArguments = callbackArguments; ///

        array.splice(startIndex, deleteCount);

        return continuation(deletedElement, ...finalArguments);
      }

      return next(index + 1);
    });
  }

  return next(index);
}

export function extract(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length,
        index = 0;

  function next(index) {
    if (index === length) {
      const deletedElement = undefined,
            finalArguments = initialArguments; ///

      return continuation(deletedElement, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...initialArguments, (passed, ...callbackArguments) => {
      if (passed) {
        const startIndex = index, ///
              deleteCount = 1,
              deletedElement = element, ///
              finalArguments = callbackArguments; ///

        array.splice(startIndex, deleteCount);

        return continuation(deletedElement, ...finalArguments);
      }

      return next(index + 1);
    });
  }

  return next(index);
}

export function match(arrayA, arrayB, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        arrayALength = arrayA.length,
        arrayBLength = arrayB.length;

  if (arrayALength !== arrayBLength) {
    const success = false,
          finalArguments = initialArguments;  ///

    return continuation(success, ...finalArguments);
  }

  const length = arrayALength,  ///
        index = 0;

  function next(index, ...nextArguments) {
    if (index === length) {
      const success = true,
            finalArguments = nextArguments; ///

      return continuation(success, ...finalArguments);
    }

    const elementA = arrayA[index],
          elementB = arrayB[index];

    return callback(elementA, elementB, ...nextArguments, (success, ...callbackArguments) => {
      if (!success) {
        const finalArguments = initialArguments;  ///

        return continuation(success, ...finalArguments);
      }

      return next(index + 1, ...callbackArguments);
    });
  }

  return next(index, ...initialArguments);
}

export function resolve(arrayA, arrayB, callback, ...initialArguments) {
  arrayA = [  ///
    ...arrayA
  ];

  const continuation = initialArguments.pop();

  function nextPass(...nextArguments) {
    const length = arrayA.length; ///

    if (length === 0) {
      const success = true,
            finalArguments = nextArguments; ///

      return continuation(success, ...finalArguments);
    }

    function nextElement(index, success, ...currentArguments) {
      if (index === length) {
        if (!success) {
          const finalArguments = initialArguments; ///

          return continuation(success, ...finalArguments);
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

      return callback(elementA, ...currentArguments, (passed, ...callbackArguments) => {
        if (passed) {
          const elementB = elementA,  ///
                success = true;

          arrayB.push(elementB);

          return nextElement(index + 1, success, ...callbackArguments);
        }

        return nextElement(index + 1, success, ...currentArguments);
      });
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
