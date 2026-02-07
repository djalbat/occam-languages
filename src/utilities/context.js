"use strict";

export function chainContext(context) {
  return new Proxy(context, {
    get: (context, name, receiver) => {
      if (Reflect.has(context, name)) {
        return Reflect.get(context, name, receiver);
      }

      context = context.getContext(); ///

      return Reflect.get(context, name, receiver);
    }
  });
}

export default {
  chainContext
};
