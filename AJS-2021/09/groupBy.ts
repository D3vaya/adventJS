// export const groupBy = (collection: any[], it: any) => {
//   let acc = {};
//   collection.map((el) => {
//     let prop = typeof it === "function" ? it(el) : el[it];
//     acc[prop] = acc[prop] ? acc[prop].concat(el): [el]
//   });
//   return acc;
// };

export function groupBy2(list: any[], keyGetter: any) {
  const map = new Map();
  list.forEach((item) => {
    const key =
      typeof keyGetter === "function" ? keyGetter(item) : item[keyGetter];
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
//[6.1, 4.2, 6.3] con Math.floor debería ser { 6: [6.1, 6.3], 4: [4.2] }
