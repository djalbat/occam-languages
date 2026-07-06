"use strict";

import { arrayUtilities, asynchronousUtilities } from "necessary";

const { filter: arrayFilter } = arrayUtilities,
      { forEach: asynchronousForEach } = asynchronousUtilities;

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

export function forEach(array, callback, ...remainingArguments) {
  const continuation = remainingArguments.pop();

  asynchronousForEach(array, (element, next, done) => {
    callback(element, ...remainingArguments, next);
  }, continuation);
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

export function breakable(innerFunction) {
  return function(...remainingArguments) {
    const remainingArgumentsLength = remainingArguments.length,
          innerFunctionLength = innerFunction.length,
          continuation = remainingArguments.pop(),
          context = remainingArguments.pop();

    this.break(context, () => {
      if (innerFunctionLength === remainingArgumentsLength) {
        innerFunction.call(this, ...remainingArguments, context, continuation);

        return;
      }

      const result = innerFunction.call(this, ...remainingArguments, context);

      continuation(result);
    });
  };
}

export function unbreakable(innerFunction) {
  return function(...remainingArguments) {
    const innerFunctionLength = innerFunction.length,
          remainingArgumentsLength = remainingArguments.length;

    if (innerFunctionLength === remainingArgumentsLength) {
      innerFunction.call(this, ...remainingArguments);

      return;
    }

    const continuation = remainingArguments.pop(),
          result = innerFunction.call(this, ...remainingArguments);

    continuation(result);
  };
}

export default {
  some,
  every,
  forEach,
  resolve,
  breakable,
  unbreakable
}
