import { createSlice } from '@reduxjs/toolkit';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

type Item = {
    id: number;
    name: string;
    price: number;
    image: string;
    count: number;
};

type InitialState = {
    items: Item[];
    total: number | null;
};

const initialState: InitialState = {
    items: [],
    total: 0,
};

const calculateTotal = (items: Item[]) => {
    return items.reduce(
        (prev, current) => (prev += current.price * current.count),
        0
    );
};

const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        removeItem: (state, { payload: id }: { payload: number }) => {
            state.items = state.items.filter((it) => it.id !== id);
            state.total = calculateTotal(state.items);
        },
        addItem: (state, { payload }: { payload: Product | undefined }) => {
            if (!payload) return;
            let index = state.items.findIndex((it) => it.id === payload.id);
            if (index !== -1) {
                state.items[index].count++;
            } else {
                state.items = [...state.items, { ...payload, count: 1 }];
            }
            state.total = calculateTotal(state.items);
        },
        incrementCount: (state, { payload: id }: { payload: number }) => {
            let index = state.items.findIndex((it) => it.id === id);
            state.items[index].count++;
            state.total = calculateTotal(state.items);
        },
        decrementCount: (state, { payload: id }: { payload: number }) => {
            let index = state.items.findIndex((it) => it.id === id);
            if (state.items[index].count === 1) return;
            state.items[index].count--;
            state.total = calculateTotal(state.items);
        },
    },
});

export const { addItem, removeItem, incrementCount, decrementCount } =
    CartSlice.actions;
export default CartSlice.reducer;
