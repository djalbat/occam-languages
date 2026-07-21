"use strict";

import { arrayUtilities, asynchronousUtilities } from "necessary";

const { filter: arrayFilter } = arrayUtilities,
      { forEach: asynchronousForEach,
        forwardsForEach: asynchronousForwardsForEach,
        backwardsForEach: asynchronousBackwardsForEach } = asynchronousUtilities;

export function one(array, callback, ...remainingArguments) {
  let found = false;

  const continuation = remainingArguments.pop();

  return asynchronousForEach(array, (element, next, done) => {
    return callback(element, ...remainingArguments, (passed) => {
      if (passed) {
        if (!found) {
          found = true;
        } else {
          found = false;

          done();

          return;
        }
      }

      next();
    });
  }, () => {
    return continuation(found, ...remainingArguments);
  });
}

export function some(array, callback, ...remainingArguments) {
  let success = false;

  const continuation = remainingArguments.pop();

  return asynchronousForEach(array, (element, next, done) => {
    return callback(element, ...remainingArguments, (passed) => {
      if (passed) {
        success = true;

        done();

        return;
      }

      next();
    });
  }, () => {
    return continuation(success, ...remainingArguments);
  });
}

export function each(array, callback, ...remainingArguments) {
  let found = false;

  const continuation = remainingArguments.pop();

  return asynchronousForEach(array, (element, next, done) => {
    return callback(element, ...remainingArguments, (passed) => {
      if (passed) {
        found = true;
      } else {
        found = false;

        done();

        return;
      }

      next();
    });
  }, () => {
    return continuation(found, ...remainingArguments);
  });
}

export function every(array, callback, ...remainingArguments) {
  let success = true;

  const continuation = remainingArguments.pop();

  return asynchronousForEach(array, (element, next, done) => {
    return callback(element, ...remainingArguments, (passed) => {
      if (!passed) {
        success = false;

        done();

        return;
      }

      next();
    });
  }, () => {
    return continuation(success, ...remainingArguments);
  });
}

export function match(arrayA, arrayB, callback, ...remainingArguments) {
  const continuation = remainingArguments.pop(),
        arrayALength = arrayA.length,
        arrayBLength = arrayB.length;

  if (arrayALength !== arrayBLength) {
    const matches = false;

    return continuation(matches, ...remainingArguments);
  }

  let index = -1;

  return every(arrayA, (elementA, continuation) => {
    index++;

    const elementB = arrayB[index];

    return callback(elementA, elementB, ...remainingArguments, continuation);
  }, (success) => {
    const matches = success;  ///

    return continuation(matches, ...remainingArguments);
  });
}

export function reduce(array, initialValue, callback, ...remainingArguments) {
  let value = initialValue; ///

  const continuation = remainingArguments.pop();

  return asynchronousForEach(array, (element, next, done) => {
    return callback(value, element, ...remainingArguments, (currentValue) => {
      value = currentValue;  ///

      next();
    });
  }, () => {
    return continuation(value, ...remainingArguments);
  });
}

export function forEach(array, callback, ...remainingArguments) {
  const continuation = remainingArguments.pop();

  return asynchronousForEach(array, (element, next, done) => {
    return callback(element, ...remainingArguments, () => {
      next();
    });
  }, () => {
    return continuation(...remainingArguments);
  });
}

export function forwardsEvery(array, callback, ...remainingArguments) {
  let success = true;

  const continuation = remainingArguments.pop();

  return asynchronousForwardsForEach(array, (element, next, done) => {
    return callback(element, ...remainingArguments, (passed) => {
      if (!passed) {
        success = false;

        done();

        return;
      }

      next();
    });
  }, () => {
    return continuation(success, ...remainingArguments);
  });
}

export function backwardsEvery(array, callback, ...remainingArguments) {
  let success = true;

  const continuation = remainingArguments.pop();

  return asynchronousBackwardsForEach(array, (element, next, done) => {
    return callback(element, ...remainingArguments, (passed) => {
      if (!passed) {
        success = false;

        done();

        return;
      }

      next();
    });
  }, () => {
    return continuation(success, ...remainingArguments);
  });
}

export function forwardsForEach(array, callback, ...remainingArguments) {
  const continuation = remainingArguments.pop();

  return asynchronousForwardsForEach(array, (element, next, done) => {
    return callback(element, ...remainingArguments, () => {
      next();
    });
  }, () => {
    return continuation(...remainingArguments);
  });
}

export function backwardsForEach(array, callback, ...remainingArguments) {
  const continuation = remainingArguments.pop();

  return asynchronousBackwardsForEach(array, (element, next, done) => {
    return callback(element, ...remainingArguments, () => {
      next();
    });
  }, () => {
    return continuation(...remainingArguments);
  });
}

export function filter(array, callback, ...remainingArguments) {
  const deletedElements = [];

  const continuation = remainingArguments.pop();

  let index = array.length;

  return backwardsForEach(array, (element, continuation) => {
    index--;

    return callback(element, ...remainingArguments, (passed) => {
      if (!passed) {
        const start = index,  ///
              deleteCount = 1,
              deletedElement = array.splice(start, deleteCount).pop();  ///

        deletedElements.unshift(deletedElement);  ///
      }

      return continuation();
    });
  }, () => {
    return continuation(deletedElements, ...remainingArguments);
  });
}

export function prune(array, callback, ...remainingArguments) {
  let deletedElement = undefined; ///

  const continuation = remainingArguments.pop();

  let index = -1;

  return some(array, (element, continuation) => {
    index++;

    return callback(element, ...remainingArguments, (passed) => {
      if (!passed) {
        const start = index,  ///
              deleteCount = 1;

        deletedElement = array.splice(start, deleteCount).pop() ///
      }

      return continuation(passed);
    });
  }, () => {
    return continuation(deletedElement, ...remainingArguments);
  });
}

export function extract(array, callback, ...remainingArguments) {
  let deletedElement = undefined; ///

  const continuation = remainingArguments.pop();

  let index = -1;

  return some(array, (element, continuation) => {
    index++;

    return callback(element, ...remainingArguments, (passed) => {
      if (passed) {
        const start = index,  ///
              deleteCount = 1;

        deletedElement = array.splice(start, deleteCount).pop() ///
      }

      return continuation(passed);
    });
  }, () => {
    return continuation(deletedElement, ...remainingArguments);
  });
}

export function resolve(arrayA, arrayB, callback, ...remainingArguments) {
  arrayA = [  ///
    ...arrayA
  ];

  const continuation = remainingArguments.pop();

  function nextPass() {
    const arrayALength = arrayA.length;

    if (arrayALength === 0) {
      const success = true;  ///

      return continuation(success, ...remainingArguments);
    }

    let success = false;

    let count = -1;

    function nextElement() {
      count++;

      const terminate = (count === arrayALength);

      if (terminate) {
        if (!success) {
          const success = false; ///

          return continuation(success, ...remainingArguments);
        }

        arrayFilter(arrayA, (elementA) => {
          const arrayBIncludesElementA = arrayB.includes(elementA);

          if (!arrayBIncludesElementA) {
            return true;
          }
        });

        nextPass();
      } else {
        const index = count,  ///
              elementA = arrayA[index];

        return callback(elementA, ...remainingArguments, (passed) => {
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
  match,
  reduce,
  forEach,
  forwardsEvery,
  backwardsEvery,
  forwardsForEach,
  backwardsForEach,
  filter,
  prune,
  extract,
  resolve
};
