let counter = 0;
export const countPackages = (
  carriers: (string | number | string[])[][],
  carrierID: string
) => {
  counter = 0;
  if (!carriers || !carrierID) throw "undefined parameters";
  if (!Array.isArray(carriers)) throw "parameter is not a array";
  if (typeof carrierID !== "string") throw "parameter is not a string";
  if (carriers.length === 0) return 0;

  const selectedCarrier = carriers.find((c) => c[0] === carrierID) as (
    | string
    | number
    | string[]
  )[][];
  if (!selectedCarrier) return 0;
  return sumPackageEmployees(selectedCarrier, carriers);
};


export const sumPackageEmployees = (
  selectedCarrier: (string | number | string[])[][],
  carriers: (string | number | string[])[][],
) => {
  
  if (selectedCarrier.length === 3) {
    const [transportist, packages, employeesChild] = selectedCarrier;
    const emp = employeesChild as unknown as (string | number | string[])[][];
    transportist;
    counter += Number(packages);

    if (emp.length > 0) {
      getCarrier(emp, carriers);
    }
  }

  return counter;
};

export const getCarrier = (
  employees: (string | number | string[])[][],
  carriers: (string | number | string[])[][],
) => {
  for (let index = 0; index < employees.length; index++) {
    const carrierID = employees[index];
    const sc = carriers.find((c) => c[0] === carrierID) as (
      | string
      | number
      | string[]
    )[][];
    if (sc) {
      sumPackageEmployees(sc, carriers);
    }
  }
};

export const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];

console.log("[LOG] 🚧 ", countPackages(carriers, "dapelu"));
// type Carrier = {
//   carrierID: string;
//   packages: number;
//   employees: string[];
// };
export const carriers2 = [
  ["lolivier", 8, ["camila", "jesuspoleo"]],
  ["camila", 5, ["sergiomartinez", "conchaasensio"]],
  ["jesuspoleo", 4, []],
  ["sergiomartinez", 4, []],
  ["conchaasensio", 3, ["facundocapua", "faviola"]],
  ["facundocapua", 2, []],
  ["faviola", 1, []],
];
console.log("[LOG] 🚧 ->", countPackages(carriers2, "camila"));
