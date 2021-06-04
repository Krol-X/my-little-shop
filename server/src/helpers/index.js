//
// Helpers
//

const _ = require('lodash');

const filterFields = (source, template, saveUndefined) =>
  Object.entries(template).reduce((result, [key, value]) => {
    result[key] = source[key] || (value && !saveUndefined);
    return result;
  }, {});

const changeFields = (oldFields, newFields) => {
  console.log(newFields);
  return Object.entries(oldFields).reduce((result, [key, value]) => {
    result[key] = newFields[key]? newFields[key]: value;
    return result;
  }, {});
}

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

const isEmptyArray = obj => {
  if (!Array.isArray(obj)) return false;
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

const withoutId = (it) => { if (it["_id"]) delete it["_id"] };


module.exports = {
  isEmptyArray: isEmptyArray,
  isObject: isObject,
  isEmptyObject: isEmptyObject,
  isEmptyArrObj: isEmptyArrObj,
  filterFields: filterFields,
  changeFields: changeFields,
  defFromFields: defFromFields,
  withoutId: withoutId
};