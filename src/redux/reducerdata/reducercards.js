
import { ADD_CART, RMV_CART, RMV_ONE } from '../actionsdata/action';

const INIT_STATE = {
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_CART:
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                const updatedCarts = [...state.carts];
                updatedCarts[itemIndex].qnty += 1;

                return {
                    ...state,
                    carts: updatedCarts
                };
            } else {
                const newItem = {...action.payload, qnty: 1 };

                return {
                    ...state,
                    carts: [...state.carts, newItem]
                };
            }

        case RMV_CART:
            const filteredCarts = state.carts.filter((item) => item.id !== action.payload);

            return {
                ...state,
                carts: filteredCarts
            };

        case RMV_ONE:
            const itemIndexDec = state.carts.findIndex((item) => item.id === action.payload.id);

            if (state.carts[itemIndexDec].qnty > 1) {
                const updatedCarts = [...state.carts];
                updatedCarts[itemIndexDec].qnty -= 1;

                return {
                    ...state,
                    carts: updatedCarts
                };
            } else {
                const filteredCarts = state.carts.filter((item) => item.id !== action.payload.id);

                return {
                    ...state,
                    carts: filteredCarts
                };
            }

        default:
            return state;
            
    }
}
