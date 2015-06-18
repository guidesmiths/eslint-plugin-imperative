/**
 * @eslint-rule
 * @author GuideSmiths Ltd <info@guidesmiths.com> (https://github.com/guidesmiths)
 *
 * @description
 * Rule to allow specified unused variables
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = function(context) {

  var config = {
      names: []
  };

  if (context.options[0]) {
      if (typeof context.options[0] === "string") {
          config.names = context.options[0];
      } else {
          config.names = context.options[0].names || config.names;
      }
  }

  return {
    "VariableDeclaration": function(node) {
      for (var i = 0; i < config.names.length; i++) {
        context.markVariableAsUsed(config.names[i])
      }
    }
  };
};