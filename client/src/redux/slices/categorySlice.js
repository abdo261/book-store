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
    setCategorys(state, action) {
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
    addCategory(state, action) {
      state.categorys = [...state.categorys, action.payload].sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
    },
    removeCategory(state,action){
      state.categorys=state.categorys.filter(c=>c._id!==action.payload).sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
    }
  },
});
const categoryActions = categorySlice.actions;
const categoryReducer = categorySlice.reducer;
export { categoryActions, categoryReducer };
