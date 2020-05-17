import {createSlice} from '@reduxjs/toolkit';

const selectedSlice = createSlice({
    name: 'selected',
    initialState: [],
    reducers: {
      toggleSelected(state, action){
        const id = action.payload;
        const product = state.find(product => product.id === id);
        product.selected = !product.selected;
      },
      toggleFavorite(state, action){
        const {categoryId, id} = action.payload;
        const category = state.find(category => category.id === categoryId);
        const product = category.products.find(product => product.id === id);
        product.favorite = !product.favorite;
      },
      toggleSelectedAll(state, action){
        const value = action.payload;
        state.forEach((part, index, categories) => {
            categories[index].selected = value;
          });
      },
      updateList(state, action){
        const list = action.payload;
        state.push(...list);
      }
    }
  })

  export const { toggleSelected, toggleFavorite, toggleSelectedAll, updateList } = selectedSlice.actions;

  export default selectedSlice.reducer;
