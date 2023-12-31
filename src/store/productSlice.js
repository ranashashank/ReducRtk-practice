import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data["products"];
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: [],
  //   loading: false,
  reducers: {
    setProducts: (state, action) => {
      // setProduct([])
      return action.payload;
    },
    deleteProduct: (state, action) => {
      // deleteProduct(id)
      return state.filter((product) => product.id !== action.payload);
    },
  },
  // pending , fullfilled, rejected
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      //   state.loading = false;
      return action.payload;
    },
    // [fetchProducts.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [fetchProducts.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.paylod;
    // },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
