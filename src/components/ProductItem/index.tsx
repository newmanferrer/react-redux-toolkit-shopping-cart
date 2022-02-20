import {
 CardMainContainer,
 CardContentContainer,
 CardTitle,
 CardSubTitle,
 CardParagraph,
 CardButtonsContainer,
 Button
} from '../../styled-components';
import { IProductItemProps } from '../../state/interfaces';

export const ProductItem: React.FC<IProductItemProps> = ({
 product,
 dispatch,
 addProductTocart,
 addProductToActiveProduct
}): JSX.Element => {
 const { id, name, price, quantity } = product;

 return (
  <CardMainContainer>
   <CardContentContainer>
    <CardTitle>{name}</CardTitle>
    <CardSubTitle>${price}.00</CardSubTitle>
    <CardParagraph>quantity: {quantity}</CardParagraph>
    <CardParagraph>id: {id}</CardParagraph>
   </CardContentContainer>

   <CardButtonsContainer>
    <Button primary disabled={quantity <= 0 && true} onClick={() => dispatch(addProductTocart(id))}>
     Add to Cart
    </Button>
    <Button onClick={() => dispatch(addProductToActiveProduct(id))}>Show Product</Button>
   </CardButtonsContainer>
  </CardMainContainer>
 );
};
