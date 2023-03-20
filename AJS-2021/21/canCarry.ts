export const canCarry = (capacity: number, trip: number[][]) => {
  if (typeof capacity !== "number" && !Array.isArray(trip))
    throw "error parameter";
  if (typeof capacity !== "number") throw "capacity is not a number";
  if (!Array.isArray(trip[0])) throw "trip is not a Array";
  if (typeof trip[0][0] !== "number") throw "trip is not a Array numbers";

  let counterGifts = 0;

  for (let index = 0; index < trip.length; index++) {
    const [numberGiftsPK, pickUpPointPK, deliveryPointPK] = trip[index];
    counterGifts += numberGiftsPK;

    if (typeof trip[index + 1] !== "undefined") {
      const pickUpPointNext = trip[index + 1][1];
      if (deliveryPointPK <= pickUpPointNext) counterGifts -= numberGiftsPK;
    }
  }
  if (counterGifts <= capacity) return true;

  return false;
};

// console.log({
//   expected: false,
//   result: canCarry(4, [
//     [2, 5, 8],
//     [3, 6, 10],
//   ]),
// });

// console.log({
//   expected: true,
//   result: canCarry(4, [
//     [2, 3, 8],
//     [2, 5, 7],
//   ]),
// });

console.log({
  expected: true,
  result: canCarry(3, [
    [2, 1, 5],
    [3, 5, 7],
  ]),
});
