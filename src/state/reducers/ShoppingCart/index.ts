import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IShoppingCart } from '../../interfaces';

const initialState: IShoppingCart = {
 products: [
  { id: 1, name: 'Pants', price: 100, quantity: 5 },
  { id: 2, name: 'Dress', price: 200, quantity: 5 },
  { id: 3, name: 'Glasses', price: 300, quantity: 5 },
  { id: 4, name: 'Jacket', price: 400, quantity: 5 },
  { id: 5, name: 'Hat', price: 500, quantity: 5 },
  { id: 6, name: 'Shoes', price: 600, quantity: 5 }
 ],
 cart: [],
 activeProduct: {}
};

export const shoppingCartSlice = createSlice({
 name: 'shoppingCart',
 initialState,
 reducers: {
  addProductTocart: (state, action: PayloadAction<number>) => {
   const productID = action.payload;
   const productToCart = state.products.find((product: IProduct) => product.id === productID);
   const productExistInCart = state.cart.find((product: IProduct) => product.id === productID);

   if (!productExistInCart) {
    if (productToCart && productToCart.quantity > 0) {
     state.products = state.products.map((product: IProduct) =>
      product.id === productID ? { ...product, quantity: product.quantity - 1 } : product
     );

     state.cart = [...state.cart, { ...productToCart, quantity: 1 }];
    }
   } else if (productToCart && productToCart.quantity > 0) {
    state.products = state.products.map((product: IProduct) =>
     product.id === productID ? { ...product, quantity: product.quantity - 1 } : product
    );

    state.cart = state.cart.map((product: IProduct) =>
     product.id === productID ? { ...product, quantity: product.quantity + 1 } : product
    );
   }
  },
  removeProductFromcart: (state, action: PayloadAction<number>) => {
   const productID = action.payload;
   const productToRemove = state.cart.find((product: IProduct) => product.id === productID);

   if (productToRemove) {
    state.products = state.products.map((product: IProduct) =>
     product.id === productID
      ? { ...product, quantity: product.quantity + productToRemove.quantity }
      : product
    );

    state.cart = state.cart.filter((product: IProduct) => product.id !== productID);
   }
  },
  quantityAddOne: (state, action: PayloadAction<number>) => {
   const productID = action.payload;
   const productToCart = state.products.find((product: IProduct) => product.id === productID);

   if (productToCart) {
    if (productToCart.quantity > 0) {
     state.products = state.products.map((product: IProduct) =>
      product.id === productID ? { ...product, quantity: product.quantity - 1 } : product
     );

     state.cart = state.cart.map((product: IProduct) =>
      product.id === productID ? { ...product, quantity: product.quantity + 1 } : product
     );
    }
   }
  },
  quantityRemoveOne: (state, action: PayloadAction<number>) => {
   const productID = action.payload;
   const productToRemove = state.cart.find((product: IProduct) => product.id === productID);

   if (productToRemove) {
    if (productToRemove.quantity > 1) {
     state.products = state.products.map((product: IProduct) =>
      product.id === productID ? { ...product, quantity: product.quantity + 1 } : product
     );

     state.cart = state.cart.map((product: IProduct) =>
      product.id === productID ? { ...product, quantity: product.quantity - 1 } : product
     );
    } else {
     state.products = state.products.map((product: IProduct) =>
      product.id === productID ? { ...product, quantity: product.quantity + 1 } : product
     );

     state.cart = state.cart.filter((product: IProduct) => product.id !== productID);
    }
   }
  },
  addProductToActiveProduct: (state, action: PayloadAction<number>) => {
   const productID = action.payload;
   const productToActiveProduct = state.products.find(
    (product: IProduct) => product.id === productID
   );

   state.activeProduct = { ...productToActiveProduct };
  },
  removeActiveProduct: (state) => {
   state.activeProduct = {};
  },
  clearCart: (state) => {
   const newProducts = state.products.map((productInProducts: IProduct) => {
    const productInCart = state.cart.find(
     (product: IProduct) => product.id === productInProducts.id
    );

    return productInCart
     ? {
        ...productInProducts,
        quantity: productInProducts.quantity + productInCart.quantity
       }
     : productInProducts;
   });

   state.products = newProducts;
   state.cart = [];
  }
 }
});

// Action creators are generated for each case reducer function
export const {
 addProductTocart,
 removeProductFromcart,
 quantityAddOne,
 quantityRemoveOne,
 addProductToActiveProduct,
 removeActiveProduct,
 clearCart
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
