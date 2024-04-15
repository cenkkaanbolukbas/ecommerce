import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import STATUS from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getproducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = response.json();
  return data;
});

export const getDetailProduct = createAsyncThunk("getproduct", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = response.json();
  return data;
});

export const getCategoryProducts = createAsyncThunk("getcategory", async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data = response.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        //pending sayfaya yüklenme durumu
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        //tamamlanma durumu
        state.products = action.payload;
        state.productsStatus = STATUS.SUCCESS;
      })
      .addCase(getProducts.rejected, (state, action) => {
        // hata olması durumu
        state.productsStatus = STATUS.FAIL;
      })
      .addCase(getDetailProduct.pending, (state, action) => {
        //pending sayfaya yüklenme durumu
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        // tamamlanma durumu
        state.productDetail = action.payload;
        state.productDetailStatus = STATUS.SUCCESS;
      })
      .addCase(getDetailProduct.rejected, (state, action) => {
        // hata olması durumu
        state.productDetailStatus = STATUS.FAIL;
      })
      .addCase(getCategoryProducts.pending, (state, action) => {
        //pending sayfaya yüklenme durumu
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        // tamamlanma durumu
        state.products = action.payload;
        state.productDetailStatus = STATUS.SUCCESS;
      })
      .addCase(getCategoryProducts.rejected, (state, action) => {
        // hata olması durumu
        state.productDetailStatus = STATUS.FAIL;
      });
      
      
  },
});

export default productSlice.reducer;
