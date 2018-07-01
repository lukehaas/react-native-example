export const REMOVE_ITEM = 'remove_item';
export const UPDATE_ITEM_QUANTITY = 'update_item';

export const removeItem = payload => ({
  payload,
  type: REMOVE_ITEM,
});

export const updateQuantity = payload => ({
  payload,
  type: UPDATE_ITEM_QUANTITY,
});
