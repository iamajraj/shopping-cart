import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import {
    decrementCount,
    incrementCount,
    removeItem,
} from '../store/slice/cart';

type Item = {
    id: number;
    name: string;
    price: number;
    image: string;
    count: number;
};

const Navbar = () => {
    const dispatch = useDispatch();
    const cart = useSelector(
        (state: { items: Item[]; total: number | null }) => state
    );

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="px-10 py-5 border-b flex items-center justify-between">
            <ul className="flex items-center gap-5">
                <Link
                    to="/"
                    className="text-[18px] py-3 px-4 cursor-pointer hover:border-blue-500 border rounded-lg"
                >
                    Home
                </Link>
                <Link
                    to="/store"
                    className="text-[18px] py-3 px-4 cursor-pointer hover:border-blue-500 border rounded-lg"
                >
                    Store
                </Link>
                <Link
                    to="/about"
                    className="text-[18px] py-3 px-4 cursor-pointer hover:border-blue-500 border rounded-lg"
                >
                    About
                </Link>
            </ul>
            <div
                onClick={() => setShowSidebar(true)}
                className="relative cursor-pointer border rounded-full p-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                </svg>
                <div className="absolute min-w-[30px] min-h-[30px] -top-3 -right-3 bg-white rounded-full border text-black flex items-center justify-center">
                    {cart.items.length}
                </div>
            </div>

            {/* sidebar */}
            <div
                className={`fixed top-0 w-[40%] transition-all h-screen border bg-white ${
                    showSidebar ? 'right-0' : '-right-[100%]'
                } p-10`}
            >
                <div className="flex items-center justify-between border-b pb-2">
                    <h1 className="text-2xl">
                        Your cart ({cart.items.length})
                    </h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => setShowSidebar(false)}
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <div className="pt-5 flex gap-5 flex-col">
                    {cart.items.map((item) => (
                        <div className="flex justify-between items-center h-[100px] border-b">
                            <div className="flex items-center flex-1 justify-between mr-5 h-full">
                                <img
                                    className="w-[40%] h-full object-cover"
                                    src={item.image}
                                    alt=""
                                />
                                <h1>{item.name}</h1>
                                <p>${item.price}</p>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => {
                                            dispatch(incrementCount(item.id));
                                        }}
                                        className="text-[18px] cursor-pointer border px-2 transition-transform active:scale-110"
                                    >
                                        +
                                    </button>
                                    <p>{item.count}</p>
                                    <button
                                        onClick={() => {
                                            dispatch(decrementCount(item.id));
                                        }}
                                        className="text-[18px] cursor-pointer border px-2 transition-transform active:scale-110"
                                    >
                                        -
                                    </button>
                                </div>
                            </div>
                            <svg
                                onClick={() => {
                                    dispatch(removeItem(item.id));
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 cursor-pointer"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    ))}
                    <h2 className="flex justify-between mt-10 text-2xl">
                        Total: <span className="">${cart.total}</span>
                    </h2>
                    <button className="mt-5 py-4 text-[18px] border border-indigo-600 text-center text-indigo-600">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
