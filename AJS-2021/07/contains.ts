export const contains = (store: Object, product: string) => {
  if (!store || !product) throw "undefined params";
  if (typeof store !== "object") throw "store params is a not object";
  if (typeof product !== "string") throw "product params is a not string";

  //search(store, product, false);

  search(store, product, false);
};

const search = (store: Object, product: string, bol: boolean) => {
  Object.entries(store).every((element) => {
    let [key, el] = element;

    console.log("SEARCHING", { key, el, product });
    if (el === product) {
      bol = true;
      console.log("SUCCESS", { key, el, product });
      return bol;
    }
    if (typeof el === "object") {
      //console.log('recursive',bol)
      search(el, product, bol);
    }
    return true;
    //console.log('return interio',bol)
  });

  return bol;
};

export const search2 = (store: Object, product: string, bol: boolean) => {
  product;
  bol;
  console.log("[LOG] 🚧 ", store);
  const a = Object.entries(store);
  a.forEach((element) => {
    for (const key in element) {
      key;
      let [k, el] = element;
      console.log("2", { k, el });
      if (el === product) {
        bol = true;
        return bol;
      }
      if (typeof el === "object") {
        //console.log('recursive',bol)
        return search(el, product, bol);
      }
      //console.log('return interio',bol)
    }
    return bol;
  });
  return bol;
};

export const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
      subcajon1: {
        subproducto1: "fosforo",
        subproducto2: "pantalon",
        subcajon2: {
          subproducto3: "cigarros",
          subproducto4: "bebidas",
          subcajon3: {
            subproducto5: "chocolates",
            subproducto6: "caramelos",
            subcajon4: {
              subproducto7: "greda",
              subproducto8: "laptop",
            },
          },
        },
      },
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta",
      subcajon1: {
        subproducto1: "fosforo",
        subproducto2: "pantalon",
        subcajon2: {
          subproducto3: "cigarros",
          subproducto4: "bebidas",
          subcajon3: {
            subproducto5: "chocolates",
            subproducto6: "caramelos",
            subcajon4: {
              subproducto7: "greda",
              "subpro-ducto8": "mac",
              subsubcajon1: {
                subsubproducto1: "fosforo",
                subsubproducto2: "pantalon",
                subsubcajon2: {
                  subsubproducto3: "cigarros",
                  subsubproducto4: "bebidas",
                  subsubcajon3: {
                    subsubproducto5: "chocolates",
                    subsubproducto6: "caramelos",
                    subsubcajon4: {
                      subsubproducto7: "greda",
                      "subsubpro-ducto8": "macbook",
                    },
                  },
                },
                subsubcajon4: {
                  subsubproducto3: "cigarros",
                  subsubproducto4: "bebidas",
                  subsubcajon3: {
                    subsubproducto5: "chocolates",
                    subsubproducto6: "caramelos",
                    subsubcajon4: {
                      subsubproducto7: "greda",
                      xxxx: "macbook-PRO",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

console.log({ expected: true, response: contains(almacen, "macbook-PRO") });
export const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando",
    },
  },
};
//console.log({ expected: false, response: contains(otroAlmacen, "gameboy") });
