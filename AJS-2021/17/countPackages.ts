export const countPackages = (
  carriers: (string | number | string[])[][],
  carrierID: string
) => {
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
  //const employeesIDs: string[] = selectedCarrier[2] as string[];

  //const employees = carriers.filter((c) => employeesIDs.includes(String(c[0])));
  //let counter: number = selectedCarrier[1] as number;
  // employees.forEach((arr) => {
  //   const [transportist, packages, employees] = arr;
  //   console.log("[LOG] 🚧 ", { transportist, packages, employees });
  //   counter += Number(packages);
  // });
  //let counter = Number(selectedCarrier[1]);
  return sumPackageEmployees(selectedCarrier, carriers, 0);
};

export const sumPackageEmployees = (
  employees: (string | number | string[])[][],
  carriers: (string | number | string[])[][],
  counter: number
) => {
  let prevCounter = counter
  if (employees.length === 3) {
    const [transportist, packages, employeesChild] = employees;
    transportist;
    //const packages = arr[1] as number;
    const emp = employeesChild as unknown as (string | number | string[])[][];
    counter += Number(packages);
    console.log("+", { packages, prevCounter, counter  });

    if (emp.length > 0) {
      sumPackageEmployees(emp, carriers, counter);
    }
  } else {
    employees.forEach((carrierID) => {
      const sc = carriers.find((c) => c[0] === carrierID) as (
        | string
        | number
        | string[]
      )[][];
      if (sc) {
        sumPackageEmployees(sc, carriers, counter);
      }
    });
  }

  return counter;
};

export const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];

//console.log("[LOG] 🚧 ", countPackages(carriers, "dapelu"));
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
console.log("[LOG] 🚧 ", countPackages(carriers2, "camila"));
