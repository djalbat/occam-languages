"use strict";

const { Element, continuationUtilities } = require("../..//lib/index");  ///

const { breakable, unbreakable } = continuationUtilities;

class Procedure extends Element {
  call = unbreakable(function (context, continuation) {
    context.trace(`Calling the procedure...`);

    this.validate(context, (procedure) => {
      let value = false;

      if (procedure !== null) {
        value = true;

        context.debug(`...called the procedure.`);
      }

      continuation(value);
    });
  });

  validate = breakable(function (context) {
    let procedure;

    context.trace(`Validating the procedure...`);

    const checks = this.check(context);

    if (checks) {
      procedure = this;
    }

    context.debug(`...validated the procedure.`);

    return procedure;
  });

  check(context) {
    let checks;

    context.trace(`Checking the procedure...`);

    checks = true;

    context.debug(`...checking the procedure.`);

    return checks;
  }

  static fromNothing(context) {
    const string = null,
          node = null,
          breakPoint = null,
          procedure = new Procedure(context, string, node, breakPoint);

    return procedure;
  }
}

module.exports = Procedure;
