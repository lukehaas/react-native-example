import Immutable from 'seamless-immutable';
import { REMOVE_ITEM, UPDATE_ITEM_QUANTITY } from './actions';

const initialState = Immutable({
  items: [{
    sku: '435HFKD998',
    name: 'Plain Black T-Shirt',
    image: 'http://via.placeholder.com/100x100',
    quantity: 1,
    price: 20.00,
  }, {
    sku: '43534JSI434J',
    name: 'Plain Gray T-Shirt',
    image: 'http://via.placeholder.com/100x100',
    quantity: 1,
    price: 20.00,
  }, {
    sku: '43534FDJDK3',
    name: 'Plain Green T-Shirt',
    image: 'http://via.placeholder.com/100x100',
    quantity: 1,
    price: 20.00,
  }],
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REMOVE_ITEM:
      return state.replace({ items: state.items.filter(({ sku }) => sku !== payload.sku) });
    case UPDATE_ITEM_QUANTITY:
      return state.merge(payload);
    default:
      return state;
  }
};
