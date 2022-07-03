const Items = [
  {
    name: "Lemon",
    price: "$2.47",
    convert: "($10.29/KG)",
    photo: require("../../assets/fru.png"),
    type: "frutis",
  },
  {
    name: `Green Seedless 
    Grapes`,
    price: "$2.47",
    convert: "($10.29/KG)",
    photo: require("../../assets/fru.png"),
    type: "frutis",
  },
  {
    name: `Pineapple`,
    price: "$2.47",
    convert: "($10.29/KG)",
    photo: require("../../assets/fru.png"),
    type: "frutis",
  },
  {
    name: `Pineapple`,
    price: "$2.47",
    convert: "($10.29/KG)",
    photo: require("../../assets/fru.png"),
    type: "frutis",
  },
  {
    name: `Oranges`,
    price: "$2.47",
    convert: "($10.29/KG)",
    photo: require("../../assets/fru.png"),
    type: "frutis",
  },
  {
    name: `Banana`,
    price: "$2.47",
    convert: "($10.29/KG)",
    photo: require("../../assets/fru.png"),
    type: "frutis",
  },
  {
    name: `Banana`,
    price: "$2.47",
    convert: "($10.29/KG)",
    photo: require("../../assets/fru.png"),
    type: "frutis",
  },
  {
    name: `Zuccini Black Organic 
    (Each)`,
    price: "$2.47",
    convert: "($10.29/KG)",
    photo: require("../../assets/veg.png"),
    type: "vegi",
  },
  {
    name: `ZUCCHINI BLACK IMPERFECT PICK VALUE RANGE (MIN 500G)`,
    price: "$2.47",
    convert: "($10.29/KG)",
    photo: require("../../assets/veg.png"),
    type: "vegi",
  },
  {
    name: `ZUCCHINI BLACK IMPERFECT (CASE SALE 10KG)`,
    price: "$2.47",
    convert: "($10.29/KG)",
    photo: require("../../assets/veg.png"),
    type: "vegi",
  },
  {
    name: `Zuccini Black Organic 
    (Each)`,
    price: "$2.47",
    convert: "($10.29/KG)",
    photo: require("../../assets/veg.png"),
    type: "vegi",
  },
  {
    name: `TOMATOES TRUSS (500G PREPACKED)`,
    price: "$2.47",
    convert: "($10.29/KG)",
    photo: require("../../assets/veg.png"),
    type: "vegi",
  },
  {
    name: `TOMATOES TRUSS (500G PREPACKED)`,
    price: "$2.47",
    convert: "($10.29/KG)",
    photo: require("../../assets/veg.png"),
    type: "vegi",
  },
  {
    name: `TOMATOES TRUSS (500G PREPACKED)`,
    price: "$2.47",
    convert: "($10.29/KG)",
    photo: require("../../assets/veg.png"),
    type: "vegi",
  },
  {
    name: `TOMATOES TRUSS (500G PREPACKED)`,
    price: "$2.47",
    convert: "($10.29/KG)",
    photo: require("../../assets/veg.png"),
    type: "vegi",
  },
];

const initialData = {
  Store: Items,
  View: {},
  Filter: [],
  cart: 0,
};
const Reducer = (state = initialData, action) => {
  switch (action.type) {
    case "STOREDATA": {
      const { data } = action.payload;
      return {
        ...state,
        Store: data,
      };
    }
    case "VIEW": {
      const { View } = action.payload;
      return {
        ...state,
        View: View,
      };
    }
    case "FILTER": {
      const { Filter } = action.payload;
      return {
        ...state,
        Filter: Filter,
      };
    }
    case "ADDTOCART": {
      const { Plus } = action.payload;
      return {
        ...state,
        cart: Plus,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
