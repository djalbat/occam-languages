"use strict";

import { asyncEvery  } from "../utilities/asynchronous";

export async function asyncEveryDependency(dependencies, callback) {
  const array = dependencies.getArray();

  return await asyncEvery(array, callback);
}
