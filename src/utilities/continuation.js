"use strict";

import { arrayUtilities, asynchronousUtilities } from "necessary";

const { filter } = arrayUtilities,
      { forEach } = asynchronousUtilities;

export function every(array, callback, context, contiunation) {
  let success = true;

  forEach(array, (elmeent, next, done) => {
    callback(elmeent, context, (passed) => {
      if (!passed) {
        success = false;

        done();

        return;
      }

      next();
    });
  }, () => {
    contiunation(success);
  });
}

export function resolve(arrayA, arrayB, callback, continuation) {
  arrayA = [  ///
    ...arrayA
  ];

  function nextPass() {
    const arrayALength = arrayA.length;

    if (arrayALength === 0) {
      const resolved = true;  ///

      continuation(resolved);

      return;
    }

    let resolved = false;

    let count = -1;

    function nextElement() {
      count++;

      const terminate = (count === arrayALength);

      if (terminate) {
        if (!resolved) {
          const resolved = false; ///

          continuation(resolved);

          return;
        }

        filter(arrayA, (elementA) => {
          const arrayBIncludesElementA = arrayB.includes(elementA);

          if (!arrayBIncludesElementA) {
            return true;
          }
        });

        nextPass();
      } else {
        const index = count,  ///
              elementA = arrayA[index];

        callback(elementA, (passed) => {
          if (passed) {
            const elementB = elementA;  ///

            arrayB.push(elementB);

            resolved = true;
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
  every,
  resolve,
  breakable,
  unbreakable
}
