module.exports = function (object, ...allowedFields) {
  const newObj = {};
  Object.keys(object).forEach((key) => {
    if (allowedFields.includes(key)) newObj[key] = object[key];
  });
  return newObj;
};
