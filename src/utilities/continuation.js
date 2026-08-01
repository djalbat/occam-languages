"use strict";

import { arrayUtilities } from "necessary";

const { filter: arrayFilter } = arrayUtilities;

export function asynchronousOne(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length;

  let count = 0,
      index = -1;

  let finalArguments;

  function next(...callbackArguments) {
    index++;

    if (index === length) {
      const success = (count === 1);

      if (!success) {
        finalArguments = initialArguments; ///
      }

      return continuation(success, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...callbackArguments, (success, ...intermediateArguments) => {
      if (success) {
        if (count === 1) {
          const success = false;

          finalArguments = initialArguments; ///

          return continuation(success, ...finalArguments);
        }

        finalArguments = intermediateArguments; ///

        count++;
      }

      const callbackArguments = initialArguments; ///

      return next(...callbackArguments);
    });
  }

  const callbackArguments = initialArguments; ///

  return next(...callbackArguments);
}

export function asynchronousSome(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length;

  let index = -1;

  let finalArguments;

  function next(...callbackArguments) {
    index++;

    if (index === length) {
      const success = false;

      finalArguments = initialArguments; ///

      return continuation(success, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...callbackArguments, (success, ...intermediateArguments) => {
      if (success) {
        finalArguments = intermediateArguments; ///

        return continuation(success, ...finalArguments);
      }

      const callbackArguments = initialArguments; ///

      return next(...callbackArguments);
    });
  }

  const callbackArguments = initialArguments; ///

  return next(...callbackArguments);
}

export function asynchronousEach(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length;

  let count = 0,
      index = -1;

  let finalArguments;

  function next(...callbackArguments) {
    index++;

    if (index === length) {
      const success = (count > 0);

      finalArguments = callbackArguments; ///

      return continuation(success, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...callbackArguments, (success, ...intermediateArguments) => {
      if (!success) {
        finalArguments = initialArguments; ///

        return continuation(success, ...finalArguments);
      }

      count++;

      const callbackArguments = intermediateArguments; ///

      return next(...callbackArguments);
    });
  }

  const callbackArguments = initialArguments; ///

  return next(...callbackArguments);
}

export function asynchronousEvery(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length;

  let index = -1;

  let finalArguments;

  function next(...callbackArguments) {
    index++;

    if (index === length) {
      const success = true;

      finalArguments = callbackArguments; ///

      return continuation(success, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...callbackArguments, (success, ...intermediateArguments) => {
      if (!success) {
        finalArguments = initialArguments; ///

        return continuation(success, ...finalArguments);
      }

      const callbackArguments = intermediateArguments; ///

      return next(...callbackArguments);
    });
  }

  const callbackArguments = initialArguments; ///

  return next(...callbackArguments);
}

export function asynchronousReduce(array, initialValue, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length;

  let index = -1;

  let finalArguments;

  function next(value, ...callbackArguments) {
    index++;

    if (index === length) {
      finalArguments = callbackArguments; ///

      return continuation(value, ...finalArguments);
    }

    const element = array[index];

    return callback(element, value, ...callbackArguments, (value, ...intermediateArguments) => {
      const callbackArguments = intermediateArguments; ///

      return next(value, ...callbackArguments);
    });
  }

  const value = initialValue, ///
        callbackArguments = initialArguments; ///

  return next(value, ...callbackArguments);
}

export function asynchronousForEach(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length;

  let index = -1;

  let finalArguments;

  function next(...callbackArguments) {
    index++;

    if (index === length) {
      finalArguments = callbackArguments; ///

      return continuation(...finalArguments);
    }

    const element = array[index];

    return callback(element, ...callbackArguments, (...intermediateArguments) => {
      const callbackArguments = intermediateArguments; ///

      return next(...callbackArguments);
    });
  }

  const callbackArguments = initialArguments; ///

  return next(...callbackArguments);
}

export function asynchronousForwardsEvery(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length;

  let index = -1;

  let finalArguments;

  function next(...callbackArguments) {
    index++;

    if (index === length) {
      const success = true;

      finalArguments = callbackArguments; ///

      return continuation(success, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...callbackArguments, (success, ...intermediateArguments) => {
      if (!success) {
        finalArguments = initialArguments; ///

        return continuation(success, ...finalArguments);
      }

      const callbackArguments = intermediateArguments; ///

      return next(...callbackArguments);
    });
  }

  const callbackArguments = initialArguments; ///

  return next(...callbackArguments);
}

export function asynchronousBackwardsEvery(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length;

  let index = length;

  let finalArguments;

  function next(...callbackArguments) {
    index--;

    if (index === -1) {
      const success = true;

      finalArguments = callbackArguments; ///

      return continuation(success, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...callbackArguments, (success, ...intermediateArguments) => {
      if (!success) {
        finalArguments = initialArguments; ///

        return continuation(success, ...finalArguments);
      }

      const callbackArguments = intermediateArguments; ///

      return next(...callbackArguments);
    });
  }

  const callbackArguments = initialArguments; ///

  return next(...callbackArguments);
}

export function asynchronousForwardsForEach(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
    length = array.length;

  let index = -1;

  let finalArguments;

  function next(...callbackArguments) {
    index++;

    if (index === length) {
      finalArguments = callbackArguments; ///

      return continuation(...finalArguments);
    }

    const element = array[index];

    return callback(element, ...callbackArguments, (...intermediateArguments) => {
      const callbackArguments = intermediateArguments; ///

      return next(...callbackArguments);
    });
  }

  const callbackArguments = initialArguments; ///

  return next(...callbackArguments);
}

export function asynchronousBackwardsForEach(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length;

  let index = length;

  let finalArguments;

  function next(...callbackArguments) {
    index--;

    if (index === -1) {
      finalArguments = callbackArguments; ///

      return continuation(...finalArguments);
    }

    const element = array[index];

    return callback(element, ...callbackArguments, (...intermediateArguments) => {
      const callbackArguments = intermediateArguments; ///

      return next(...callbackArguments);
    });
  }

  const callbackArguments = initialArguments; ///

  return next(...callbackArguments);
}

export function asynchronousFilter(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length;

  const deletedElements = [];

  let index = length;

  let finalArguments;

  function next(...callbackArguments) {
    index--;

    if (index === -1) {
      finalArguments = callbackArguments; ///

      return continuation(deletedElements, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...callbackArguments, (passed, ...intermediateArguments) => {
      if (!passed) {
        const startIndex = index, ///
              deleteCount = 1,
              deletedElement = element; ///

        array.splice(startIndex, deleteCount);

        deletedElements.unshift(deletedElement);
      }

      const callbackArguments = intermediateArguments; ///

      return next(...callbackArguments);
    });
  }

  const callbackArguments = initialArguments; ///

  return next(...callbackArguments);
}

export function asynchronousPrune(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length;

  let deletedElement;

  let index = length;

  let finalArguments;

  function next(...callbackArguments) {
    index--;

    if (index === -1) {
      deletedElement = undefined;

      finalArguments = initialArguments; ///

      return continuation(deletedElement, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...callbackArguments, (passed, ...intermediateArguments) => {
      if (!passed) {
        const startIndex = index, ///
              deleteCount = 1,
              deletedElement = element; ///

        array.splice(startIndex, deleteCount);

        finalArguments = intermediateArguments; ///

        return continuation(deletedElement, ...finalArguments);
      }

      const callbackArguments = initialArguments; ///

      return next(...callbackArguments);
    });
  }

  const callbackArguments = initialArguments; ///

  return next(...callbackArguments);
}

export function asynchronousExtract(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop(),
        length = array.length;

  let deletedElement;

  let index = length;

  let finalArguments;

  function next(...callbackArguments) {
    index--;

    if (index === -1) {
      deletedElement = undefined;

      finalArguments = initialArguments; ///

      return continuation(deletedElement, ...finalArguments);
    }

    const element = array[index];

    return callback(element, ...callbackArguments, (passed, ...intermediateArguments) => {
      if (passed) {
        const startIndex = index, ///
              deleteCount = 1,
              deletedElement = element; ///

        array.splice(startIndex, deleteCount);

        finalArguments = intermediateArguments; ///

        return continuation(deletedElement, ...finalArguments);
      }

      const callbackArguments = initialArguments; ///

      return next(...callbackArguments);
    });
  }

  const callbackArguments = initialArguments; ///

  return next(...callbackArguments);
}

export function asynchronousMatch(arrayA, arrayB, callback, ...initialArguments) {
  const continuation = initialArguments.pop();

  const arrayALength = arrayA.length,
        arrayBLength = arrayB.length;

  let finalArguments;

  if (arrayALength !== arrayBLength) {
    const success = false;

    finalArguments = initialArguments; ///

    return continuation(success, ...finalArguments);
  }

  const length = arrayALength;  ///

  let index = -1;

  function next(...callbackArguments) {
    index++;

    if (index === length) {
      const success = true;

      finalArguments = callbackArguments; ///

      return continuation(success, ...finalArguments);
    }

    const elementA = arrayA[index],
          elementB = arrayB[index];

    return callback(elementA, elementB, ...callbackArguments, (success, ...intermediateArguments) => {
      if (!success) {
        finalArguments = initialArguments; ///

        return continuation(success, ...finalArguments);
      }

      const callbackArguments = intermediateArguments; ///

      return next(...callbackArguments);
    });
  }

  const callbackArguments = initialArguments; ///

  return next(...callbackArguments);
}

export function asynchronousResolve(arrayA, arrayB, callback, ...initialArguments) {
  arrayA = [  ///
    ...arrayA
  ];

  const continuation = initialArguments.pop();

  let finalArguments;

  function nextPass(...callbackArguments) {
    let success = false;

    const length = arrayA.length; ///

    if (length === 0) {
      success = true;

      finalArguments = callbackArguments; ///

      return continuation(success, ...finalArguments);
    }

    let index = -1;

    function nextElement(...callbackArguments) {
      index++;

      if (index === length) {
        if (!success) {
          success = false;

          const finalArguments = initialArguments; ///

          return continuation(success, ...finalArguments);
        }

        arrayFilter(arrayA, (elementA) => {
          const arrayBIncludesElementA = arrayB.includes(elementA);

          if (!arrayBIncludesElementA) {
            return true;
          }
        });

        return nextPass(...callbackArguments);
      } else {
        const elementA = arrayA[index];

        return callback(elementA, ...callbackArguments, (passed, ...intermediateArguments) => {
          if (passed) {
            callbackArguments = intermediateArguments;  ///

            const elementB = elementA;  ///

            arrayB.push(elementB);

            success = true;
          }

          return nextElement(...callbackArguments);
        });
      }
    }

    return nextElement(...callbackArguments);
  }

  const callbackArguments = initialArguments; ///

  return nextPass(...callbackArguments);
}

export function asynchronousAll(callbacks, ...initialArguments) {
  return every(callbacks, (callback, ...callbackArguments) => {
    return callback(...callbackArguments);
  }, ...initialArguments);
}

export function asynchronousExists(callbacks, ...initialArguments) {
  return some(callbacks, (callback, ...callbackArguments) => {
    return callback(...callbackArguments);
  }, ...initialArguments);
}

export default {
  asynchronousOne,
  asynchronousSome,
  asynchronousEach,
  asynchronousEvery,
  asynchronousReduce,
  asynchronousForEach,
  asynchronousForwardsEvery,
  asynchronousBackwardsEvery,
  asynchronousForwardsForEach,
  asynchronousBackwardsForEach,
  asynchronousFilter,
  asynchronousPrune,
  asynchronousExtract,
  asynchronousMatch,
  asynchronousResolve,
  asynchronousAll,
  asynchronousExists
};
