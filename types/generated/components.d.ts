import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderItemListOrderItemList extends Schema.Component {
  collectionName: 'components_order_item_list_order_item_lists';
  info: {
    displayName: 'OrderItemList';
  };
  attributes: {
    quantity: Attribute.Integer;
    price: Attribute.Decimal;
    product: Attribute.Relation<
      'order-item-list.order-item-list',
      'oneToOne',
      'api::product.product'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'order-item-list.order-item-list': OrderItemListOrderItemList;
    }
  }
}
