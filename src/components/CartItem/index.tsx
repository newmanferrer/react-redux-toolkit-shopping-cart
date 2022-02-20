import { IProduct, ICartItemProps } from '../../state/interfaces';
import {
 CardMainContainer,
 CardContentContainer,
 CardTitle,
 CardSubTitle,
 CardParagraph,
 CardButtonsContainer,
 Button
} from '../../styled-components';

export const CartItem: React.FC<ICartItemProps> = ({
 product,
 products,
 dispatch,
 quantityAddOne,
 quantityRemoveOne,
 removeProductFromcart
}): JSX.Element => {
 const { id, name, price, quantity } = product;
 const productInProducts = products.find((product: IProduct) => product.id === id);

 return (
  <CardMainContainer>
   <CardContentContainer>
    <CardTitle>{name}</CardTitle>
    <CardSubTitle>
     ${price}.00 x {quantity}
    </CardSubTitle>
    <CardParagraph>${price * quantity}.00</CardParagraph>
    <CardParagraph>id: {id}</CardParagraph>
   </CardContentContainer>

   <CardButtonsContainer>
    <Button
     primary
     disabled={productInProducts && productInProducts.quantity <= 0 ? true : false}
     onClick={() => dispatch(quantityAddOne(id))}>
     Add one
    </Button>
    <Button onClick={() => dispatch(quantityRemoveOne(id))}>Remove one</Button>
    <Button onClick={() => dispatch(removeProductFromcart(id))}>Remove all</Button>
   </CardButtonsContainer>
  </CardMainContainer>
 );
};
