"use strict";

import { arrayUtilities, asynchronousUtilities } from "necessary";

const { filter: arrayFilter } = arrayUtilities,
      { forEach: asynchronousForEach,
        forwardsForEach: asynchronousForwardsForEach,
        backwardsForEach: asynchronousBackwardsForEach } = asynchronousUtilities;

export function one(array, callback, ...initialArguments) {
  let success = false;

  const continuation = initialArguments.pop();

  let callbackArguments = initialArguments;  ///

  return asynchronousForEach(array, (element, next, done) => {
    return callback(element, ...callbackArguments, (...intermediateArguments) => {
      const passed = intermediateArguments.shift();

      callbackArguments = intermediateArguments;  ///

      if (passed) {
        if (!success) {
          success = true;
        } else {
          success = false;

          done();

          return;
        }
      }

      next();
    });
  }, () => {
    const finalArguments = callbackArguments; ///

    return continuation(success, ...finalArguments);
  });
}

export function some(array, callback, ...initialArguments) {
  let success = false;

  const continuation = initialArguments.pop();

  let callbackArguments = initialArguments; ///

  return asynchronousForEach(array, (element, next, done) => {
    return callback(element, ...callbackArguments, (...intermediateArguments) => {
      const passed = intermediateArguments.shift();

      callbackArguments = intermediateArguments;  ///

      if (passed) {
        success = true;

        done();

        return;
      }

      next();
    });
  }, () => {
    const finalArguments = callbackArguments; ///

    return continuation(success, ...finalArguments);
  });
}

export function each(array, callback, ...initialArguments) {
  let success = false;

  const continuation = initialArguments.pop();

  let callbackArguments = initialArguments; ///

  return asynchronousForEach(array, (element, next, done) => {
    return callback(element, ...callbackArguments, (...intermediateArguments) => {
      const passed = intermediateArguments.shift();

      callbackArguments = intermediateArguments;  ///

      if (passed) {
        success = true;
      } else {
        success = false;

        done();

        return;
      }

      next();
    });
  }, () => {
    const finalArguments = callbackArguments; ///

    return continuation(success, ...finalArguments);
  });
}

export function every(array, callback, ...initialArguments) {
  let success = true;

  const continuation = initialArguments.pop();

  let callbackArguments = initialArguments; ///

  return asynchronousForEach(array, (element, next, done) => {
    return callback(element, ...callbackArguments, (...intermediateArguments) => {
      const passed = intermediateArguments.shift();

      callbackArguments = intermediateArguments;  ///

      if (!passed) {
        success = false;

        done();

        return;
      }

      next();
    });
  }, () => {
    const finalArguments = callbackArguments; ///

    return continuation(success, ...finalArguments);
  });
}

export function reduce(array, initialValue, callback, ...initialArguments) {
  let value = initialValue; ///

  const continuation = initialArguments.pop();

  let callbackArguments = initialArguments; ///

  return asynchronousForEach(array, (element, next, done) => {
    return callback(value, element, ...callbackArguments, (...intermediateArguments) => {
      const currentValue = intermediateArguments.shift();

      callbackArguments = intermediateArguments;  ///

      value = currentValue;  ///

      next();
    });
  }, () => {
    const finalArguments = callbackArguments; ///

    return continuation(value, ...finalArguments);
  });
}

export function forEach(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop();

  let callbackArguments = initialArguments; ///

  return asynchronousForEach(array, (element, next, done) => {
    return callback(element, ...callbackArguments, (...intermediateArguments) => {
      callbackArguments = intermediateArguments;  ///

      next();
    });
  }, () => {
    const finalArguments = callbackArguments; ///

    return continuation(...finalArguments);
  });
}

export function forwardsEvery(array, callback, ...initialArguments) {
  let success = true;

  const continuation = initialArguments.pop();

  let callbackArguments = initialArguments; ///

  return asynchronousForwardsForEach(array, (element, next, done) => {
    return callback(element, ...callbackArguments, (...intermediateArguments) => {
      const passed = intermediateArguments.shift();

      callbackArguments = intermediateArguments;  ///

      if (!passed) {
        success = false;

        done();

        return;
      }

      next();
    });
  }, () => {
    const finalArguments = callbackArguments; ///

    return continuation(success, ...finalArguments);
  });
}

export function backwardsEvery(array, callback, ...initialArguments) {
  let success = true;

  const continuation = initialArguments.pop();

  let callbackArguments = initialArguments; ///

  return asynchronousBackwardsForEach(array, (element, next, done) => {
    return callback(element, ...callbackArguments, (...intermediateArguments) => {
      const passed = intermediateArguments.shift();

      callbackArguments = intermediateArguments;  ///

      if (!passed) {
        success = false;

        done();

        return;
      }

      next();
    });
  }, () => {
    const finalArguments = callbackArguments; ///

    return continuation(success, ...finalArguments);
  });
}

export function forwardsForEach(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop();

  let callbackArguments = initialArguments; ///

  return asynchronousForwardsForEach(array, (element, next, done) => {
    return callback(element, ...callbackArguments, (...intermediateArguments) => {
      callbackArguments = intermediateArguments;  ///

      next();
    });
  }, () => {
    const finalArguments = callbackArguments; ///

    return continuation(...finalArguments);
  });
}

export function backwardsForEach(array, callback, ...initialArguments) {
  const continuation = initialArguments.pop();

  let callbackArguments = initialArguments; ///

  return asynchronousBackwardsForEach(array, (element, next, done) => {
    return callback(element, ...callbackArguments, (...intermediateArguments) => {
      callbackArguments = intermediateArguments;  ///

      next();
    });
  }, () => {
    const finalArguments = callbackArguments; ///

    return continuation(...finalArguments);
  });
}

export function filter(array, callback, ...initialArguments) {
  const deletedElements = [];

  const continuation = initialArguments.pop();

  let callbackArguments = initialArguments; ///

  let index = array.length;

  return asynchronousBackwardsForEach(array, (element, next, done) => {
    index--;

    return callback(element, ...callbackArguments, (...intermediateArguments) => {
      const passed = intermediateArguments.shift();

      callbackArguments = intermediateArguments; ///

      if (!passed) {
        const start = index,  ///
              deleteCount = 1,
              deletedElement = array.splice(start, deleteCount).pop();  ///

        deletedElements.unshift(deletedElement);  ///
      }

      next();
    });
  }, () => {
    const finalArguments = callbackArguments; ///

    return continuation(deletedElements, ...finalArguments);
  });
}

export function prune(array, callback, ...initialArguments) {
  let deletedElement = undefined; ///

  const continuation = initialArguments.pop();

  let callbackArguments = initialArguments; ///

  let index = -1;

  return asynchronousForEach(array, (element, next, done) => {
    index++;

    return callback(element, ...callbackArguments, (...intermediateArguments) => {
      const passed = intermediateArguments.shift();

      callbackArguments = intermediateArguments; ///

      if (!passed) {
        const start = index,  ///
              deleteCount = 1;

        deletedElement = array.splice(start, deleteCount).pop(); ///

        done();

        return;
      }

      next();
    });
  }, () => {
    const finalArguments = callbackArguments; ///

    return continuation(deletedElement, ...finalArguments);
  });
}

export function extract(array, callback, ...initialArguments) {
  let deletedElement = undefined; ///

  const continuation = initialArguments.pop();

  let callbackArguments = initialArguments; ///

  let index = -1;

  return asynchronousForEach(array, (element, next, done) => {
    index++;

    return callback(element, ...callbackArguments, (...intermediateArguments) => {
      const passed = intermediateArguments.shift();

      callbackArguments = intermediateArguments; ///

      if (passed) {
        const start = index,  ///
              deleteCount = 1;

        deletedElement = array.splice(start, deleteCount).pop(); ///

        done();

        return;
      }

      next();
    });
  }, () => {
    const finalArguments = callbackArguments; ///

    return continuation(deletedElement, ...finalArguments);
  });
}

export function match(arrayA, arrayB, callback, ...initialArguments) {
  let success = true;

  const continuation = initialArguments.pop();

  const arrayALength = arrayA.length,
        arrayBLength = arrayB.length;

  if (arrayALength !== arrayBLength) {
    success = false;

    return continuation(success, ...initialArguments);
  }

  let index = -1;

  let callbackArguments = initialArguments; ///

  return asynchronousForEach(arrayA, (elementA, next, done) => {
    index++;

    const elementB = arrayB[index];

    return callback(elementA, elementB, ...callbackArguments, (...intermediateArguments) => {
      const passed = intermediateArguments.shift();

      callbackArguments = intermediateArguments;  ///

      if (!passed) {
        success = false;

        done();

        return;
      }

      next();
    });
  }, () => {
    const finalArguments = callbackArguments; ///

    return continuation(success, ...finalArguments);
  });
}

export function resolve(arrayA, arrayB, callback, ...initialArguments) {
  arrayA = [  ///
    ...arrayA
  ];

  const continuation = initialArguments.pop();

  let callbackArguments = initialArguments; ///

  function nextPass() {
    let success = false;

    const arrayALength = arrayA.length;

    if (arrayALength === 0) {
      success = true;

      const finalArguments = callbackArguments; ///

      return continuation(success, ...finalArguments);
    }

    let index = -1;

    function nextElement() {
      index++;

      const terminate = (index === arrayALength);

      if (terminate) {
        if (!success) {
          success = false;

          const finalArguments = callbackArguments; ///

          return continuation(success, ...finalArguments);
        }

        arrayFilter(arrayA, (elementA) => {
          const arrayBIncludesElementA = arrayB.includes(elementA);

          if (!arrayBIncludesElementA) {
            return true;
          }
        });

        nextPass();
      } else {
        const elementA = arrayA[index];

        return callback(elementA, ...callbackArguments, (...intermediateArguments) => {
          const passed = intermediateArguments.shift();

          callbackArguments = intermediateArguments;  ///

          if (passed) {
            const elementB = elementA;  ///

            arrayB.push(elementB);

            success = true;
          }

          nextElement();
        });
      }
    }

    nextElement();
  }

  nextPass();
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
  resolve
};
