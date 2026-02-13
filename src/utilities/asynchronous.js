"use strict";

import { arrayUtilities } from "necessary";

const { filter } = arrayUtilities;

export async function asyncSome(array, callback) {
  let result = false;

  const length = array.length;

  for (let index = 0; index < length; index += 1) {
    const item = array[index];

    result = await callback(item, index, array);

    if (result) {
      break;
    }
  }

  return result;
}

export async function asyncEvery(array, callback) {
  let result = true;

  const length = array.length;

  for (let index = 0; index < length; index += 1) {
    const item = array[index];

    result = await callback(item, index, array);

    if (!result) {
      break;
    }
  }

  return result;
}

export async function asyncReduce(array, callback, initialValue) {
  let value = initialValue; ///

  const length = array.length;

  for (let index = 0; index < length; index += 1) {
    const item = array[index];

    value = await callback(value, item, index, array);
  }

  return value;
}

export async function asyncForEach(array, callback) {
  const length = array.length;

  for (let index = 0; index < length; index += 1) {
    const item = array[index];

    await callback(item, index, array);
  }
}

export async function asyncResolve(arrayA, arrayB, callback) {
  let resolved;

  arrayA = [  ///
    ...arrayA
  ];

  for (;;) {
    const arrayALength = arrayA.length;

    if (arrayALength === 0) {
      break;
    }

    let resolved = false;

    await asyncForEach(arrayA, async (elementA) => {
      const passed = await callback(elementA);

      if (passed) {
        const elementB = elementA;  ///

        arrayB.push(elementB);

        resolved = true;
      }
    });

    if (!resolved) {
      break;
    }

    filter(arrayA, (elementA) => {
      const arrayBIncludesElementA = arrayB.includes(elementA);

      if (!arrayBIncludesElementA) {
        return true;
      }
    });
  }

  const arrayALength = arrayA.length;

  resolved = (arrayALength === 0);

  return resolved;
}

export async function asyncForwardsEvery(array, callback) {
  const length = array.length;

  for (let index = 0; index < length; index++) {
    const element = array[index],
          passed = await callback(element, index);

    if (!passed) {
      return false;
    }
  }

  return true;
}

export async function asyncBackwardsEvery(array, callback) {
  const length = array.length;

  for (let index = length - 1; index >= 0; index--) {
    const element = array[index],
          passed = await callback(element, index);

    if (!passed) {
      return false;
    }
  }

  return true;
}

export default {
  asyncSome,
  asyncEvery,
  asyncReduce,
  asyncForEach,
  asyncResolve,
  asyncForwardsEvery,
  asyncBackwardsEvery
};
