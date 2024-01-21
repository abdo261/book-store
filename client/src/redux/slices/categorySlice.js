import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categorys: null,
    loading: false,
    error: null,
    deleteMessage: null,
  },
  reducers: {
    setCategory(state, action) {
      state.categorys = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    seytdeleteMessage(state, action) {
      state.deleteMessage = action.payload;
    },
  },
});
const categoryActions = categorySlice.actions;
const categoryReducer = categorySlice.reducer;
export {categoryActions,categoryReducer}
