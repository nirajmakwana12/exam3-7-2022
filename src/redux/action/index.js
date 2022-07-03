export const addInRedux = (data) => ({
  type: "STOREDATA",
  payload: {
    data,
  },
});

export const ViewItem = (View) => ({
  type: "VIEW",
  payload: {
    View,
  },
});
export const FILTER = (Filter) => ({
  type: "FILTER",
  payload: {
    Filter,
  },
});
export const AddToCart = (Plus) => ({
  type: "ADDTOCART",
  payload: {
    Plus,
  },
});
