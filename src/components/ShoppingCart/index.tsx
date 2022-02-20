import { useAppSelector, useAppDispatch } from '../../state/hooks';
import { IProduct } from '../../state/interfaces';
import {
 addProductTocart,
 removeProductFromcart,
 quantityAddOne,
 quantityRemoveOne,
 addProductToActiveProduct,
 removeActiveProduct,
 clearCart
} from '../../state/reducers';
import { ProductItem, CartItem, ActiveProductItem } from '../';
import {
 MainContainer,
 Title,
 SubTitle,
 ItemsContainer,
 CardButtonsContainer,
 Button
} from '../../styled-components';

export const ShoppingCart: React.FC = (): JSX.Element => {
 const { products, cart, activeProduct } = useAppSelector((state) => state.shoppingCart);
 const dispatch = useAppDispatch();

 return (
  <MainContainer>
   <Title>Redux Toolkit Shopping Cart</Title>

   <SubTitle>Products</SubTitle>
   <ItemsContainer>
    {products &&
     products.length > 0 &&
     products.map((product) => (
      <ProductItem
       key={product.id}
       product={product}
       dispatch={dispatch}
       addProductTocart={addProductTocart}
       addProductToActiveProduct={addProductToActiveProduct}
      />
     ))}
   </ItemsContainer>

   {cart && cart.length > 0 && (
    <>
     <SubTitle>My Cart</SubTitle>
     <CardButtonsContainer>
      <Button onClick={() => dispatch(clearCart())}>Clear Cart</Button>
     </CardButtonsContainer>
     <ItemsContainer>
      {cart.map((product: IProduct) => (
       <CartItem
        key={product.id}
        product={product}
        products={products}
        dispatch={dispatch}
        quantityAddOne={quantityAddOne}
        quantityRemoveOne={quantityRemoveOne}
        removeProductFromcart={removeProductFromcart}
       />
      ))}
     </ItemsContainer>
    </>
   )}

   {activeProduct && Object.keys(activeProduct).length > 0 && (
    <>
     <SubTitle>Show Product</SubTitle>
     <ItemsContainer>
      <ActiveProductItem
       activeProduct={activeProduct}
       products={products}
       removeActiveProduct={removeActiveProduct}
       dispatch={dispatch}
      />
     </ItemsContainer>
    </>
   )}
  </MainContainer>
 );
};
