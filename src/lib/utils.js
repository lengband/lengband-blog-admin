/**
 * @description [{a: 1}, {b: 2}, {c: { arr: [{d: 4}] }}] => [{a: 1}, {b: 2}, {c: { arr: [{d: 4}] }}, {d: 4}]
 * @param {Array} arr 要拍平的数组
 * @param {String} 要根据拍平的字段
 * @param {number} 拍平层级
 * @returns {Array} 拍平后的数组
 */
export const flattenRoutes = (arr, field, time = 2) => {
  const flattenArr = [];
  let tempTime = time;
  function deepFlatten(SingleArr) {
    if (tempTime <= 0) return;
    tempTime -= tempTime;
    let nextArr = [];
    SingleArr.forEach(item => {
      flattenArr.push(item);
      if (item[field] && Array.isArray(item[field])) {
        nextArr = nextArr.concat(item[field]);
      }
    });
    if (nextArr.length) {
      deepFlatten(nextArr);
    }
  }
  deepFlatten(arr);
  return flattenArr;
};
