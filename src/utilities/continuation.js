"use strict";

import { arrayUtilities, asynchronousUtilities } from "necessary";

const { first: arrayFirst, filter: arrayFilter } = arrayUtilities,
      { forEach: asynchronousForEach,
        forwardsForEach: asynchronousForwardsForEach,
        backwardsForEach: asynchronousBackwardsForEach } = asynchronousUtilities;

export function some(array, callback, ...remainingArguments) {
  let success = false;

  const continuation = remainingArguments.pop();

  asynchronousForEach(array, (element, next, done) => {
    callback(element, ...remainingArguments, (passed) => {
      if (passed) {
        success = true;

        done();

        return;
      }

      next();
    });
  }, () => {
    continuation(success);
  });
}

export function every(array, callback, ...remainingArguments) {
  let success = true;

  const continuation = remainingArguments.pop();

  asynchronousForEach(array, (element, next, done) => {
    callback(element, ...remainingArguments, (passed) => {
      if (!passed) {
        success = false;

        done();

        return;
      }

      next();
    });
  }, () => {
    continuation(success);
  });
}

export function match(arrayA, arrayB, callback, ...remainingArguments) {
  const continuation = remainingArguments.pop(),
        arrayALength = arrayA.length,
        arrayBLength = arrayB.length;

  if (arrayALength !== arrayBLength) {
    const matches = false;

    continuation(matches);

    return;
  }

  let index = -1;

  every(arrayA, (elementA, continuation) => {
    index++;

    const elementB = arrayB[index];

    callback(elementA, elementB, ...remainingArguments, continuation);
  }, (success) => {
    const matches = success;  ///

    continuation(matches);
  });
}

export function reduce(array, initialValue, callback, ...remainingArguments) {
  let value = initialValue; ///

  const continuation = remainingArguments.pop();

  asynchronousForEach(array, (element, next, done) => {
    callback(value, element, ...remainingArguments, (currentValue) => {
      value = currentValue;  ///

      next();
    });
  }, () => {
    continuation(value);
  });
}

export function forEach(array, callback, ...remainingArguments) {
  const continuation = remainingArguments.pop();

  asynchronousForEach(array, (element, next, done) => {
    callback(element, ...remainingArguments, () => {
      next();
    });
  }, continuation);
}

export function extract(array, callback, ...remainingArguments) {
  let deletedElement = undefined; ///

  const continuation = remainingArguments.pop();

  let index = -1;

  some(array, (element, continuation) => {
    index++;

    callback(element, ...remainingArguments, (passed) => {
      if (passed) {
        const start = index,  ///
              deleteCount = 1,
              deletedElements = array.splice(start, deleteCount),
              firstDeletedElement = arrayFirst(deletedElements);

        deletedElement = firstDeletedElement;  ///
      }

      continuation(passed);
    });
  }, () => {
    continuation(deletedElement);
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

      continuation(success);

      return;
    }

    let success = false;

    let count = -1;

    function nextElement() {
      count++;

      const terminate = (count === arrayALength);

      if (terminate) {
        if (!success) {
          const success = false; ///

          continuation(success);

          return;
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

        callback(elementA, ...remainingArguments, (passed) => {
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

export function forwardsEvery(array, callback, ...remainingArguments) {
  let success = true;

  const continuation = remainingArguments.pop();

  asynchronousForwardsForEach(array, (element, next, done) => {
    callback(element, ...remainingArguments, (passed) => {
      if (!passed) {
        success = false;

        done();

        return;
      }

      next();
    });
  }, () => {
    continuation(success);
  });
}

export function backwardsEvery(array, callback, ...remainingArguments) {
  let success = true;

  const continuation = remainingArguments.pop();

  asynchronousBackwardsForEach(array, (element, next, done) => {
    callback(element, ...remainingArguments, (passed) => {
      if (!passed) {
        success = false;

        done();

        return;
      }

      next();
    });
  }, () => {
    continuation(success);
  });
}

export function all(callbacks, ...remainingArguments) {
  const continuation = remainingArguments.pop();

  every(callbacks, (callback, continuation) => {
    callback(...remainingArguments, continuation);
  }, continuation);
}

export function exists(callbacks, ...remainingArguments) {
  const continuation = remainingArguments.pop();

  some(callbacks, (callback, continuation) => {
    callback(...remainingArguments, continuation);
  }, continuation);
}

export default {
  some,
  every,
  match,
  reduce,
  forEach,
  extract,
  resolve,
  forwardsEvery,
  backwardsEvery,
  all,
  exists,
  breakable,
  unbreakable
}
