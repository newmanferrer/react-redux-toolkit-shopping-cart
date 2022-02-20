import { ActionCreatorWithPayload, ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

export interface IProduct {
 id: number;
 name: string;
 price: number;
 quantity: number;
}

export type TProductOptionals = Partial<IProduct>;

export interface IShoppingCart {
 products: IProduct[];
 cart: IProduct[] | [];
 activeProduct: IProduct | {};
}

export interface IProductItemProps {
 product: IProduct;
 dispatch: any;
 addProductTocart: ActionCreatorWithPayload<number, string>;
 addProductToActiveProduct: ActionCreatorWithPayload<number, string>;
}

export interface ICartItemProps {
 product: IProduct;
 products: IProduct[];
 dispatch: any;
 quantityAddOne: ActionCreatorWithPayload<number, string>;
 quantityRemoveOne: ActionCreatorWithPayload<number, string>;
 removeProductFromcart: ActionCreatorWithPayload<number, string>;
}

export interface IActiveProductItemProps {
 activeProduct: TProductOptionals;
 products: IProduct[];
 dispatch: any;
 removeActiveProduct: ActionCreatorWithoutPayload;
}
