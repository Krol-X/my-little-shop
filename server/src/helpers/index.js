//
// Helpers
//

const _ = require('lodash');

const filterFields = (source, template) =>
  template.map((value, key) => source[key] || value);

const defFromFields = (fields, params) => {
  return _.reduce(fields, (memo, value, key) => {
    const new_memo = memo || {};

    new_memo[key] = Object.assign({
      type: typeof value,
      default: value
    }, params[key]);

    return new_memo;
  });
};

module.exports = {
  filterFields: filterFields,
  defFromFields: defFromFields
};