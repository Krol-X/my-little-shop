//
// Helpers
//

const _ = require('lodash');

const filterFields = (source, template, saveUndefined) =>
  template.map((value, key) => source[key] || (value && !saveUndefined));

const changeFields = (oldFields, newFields) =>
  oldFields.map((value, key) => newFields[key] || value);

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

const isEmptyArray = arr => {
  if (!Array.isArray(arr)) return false;
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) return false;
  }
  return true;
};

const isObject = obj => Object.getPrototypeOf({}) === obj.prototype;

const isEmptyObject = obj => {
  if (!(isObject(obj))) return false;
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) return false;
  }
  return true;
};

const isEmptyArrObj = it => isEmptyObject(it) || isEmptyArray(it);


module.exports = {
  isEmptyArray: isEmptyArray,
  isObject: isObject,
  isEmptyObject: isEmptyObject,
  isEmptyArrObj: isEmptyArrObj,
  filterFields: filterFields,
  changeFields: changeFields,
  defFromFields: defFromFields
};