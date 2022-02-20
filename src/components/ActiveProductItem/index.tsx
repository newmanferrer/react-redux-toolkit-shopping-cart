import { IProduct, IActiveProductItemProps } from '../../state/interfaces';

import {
 CardMainContainer,
 CardContentContainer,
 CardTitle,
 CardSubTitle,
 CardParagraph,
 CardButtonsContainer,
 Button
} from '../../styled-components';

export const ActiveProductItem: React.FC<IActiveProductItemProps> = ({
 activeProduct,
 products,
 dispatch,
 removeActiveProduct
}): JSX.Element => {
 const { id, name, price, quantity } = activeProduct;
 const productInProducts = products.find((product: IProduct) => product.id === id);
 const quantityIsZero = productInProducts?.quantity === 0;

 return (
  <CardMainContainer>
   <CardContentContainer>
    <CardTitle>{name}</CardTitle>
    <CardSubTitle>${price}.00</CardSubTitle>
    <CardParagraph quantityIsZero={quantityIsZero}>
     quantity: {productInProducts ? productInProducts.quantity : quantity}
    </CardParagraph>
    <CardParagraph>id: {id}</CardParagraph>
   </CardContentContainer>

   <CardButtonsContainer>
    <Button primary onClick={() => dispatch(removeActiveProduct())}>
     Close
    </Button>
   </CardButtonsContainer>
  </CardMainContainer>
 );
};
