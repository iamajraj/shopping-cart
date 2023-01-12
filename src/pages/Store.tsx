import { useDispatch } from 'react-redux/es/exports';
import { addItem } from '../store/slice/cart';

const data = [
    {
        id: 1,
        name: 'Burger',
        price: 20,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxwhFBvBW3z5V5bJa9i6lU7omyK3xzvGDc1o3LZcSdbwezD5PcOHorEUAd-0c2sq1arxE&usqp=CAU',
    },
    {
        id: 2,
        name: 'Pizza',
        price: 50,
        image: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
    },
    {
        id: 3,
        name: 'Sweets',
        price: 100,
        image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_5/Sweets_1666674901.webp',
    },
    {
        id: 4,
        name: 'Desserts',
        price: 200,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmG54aS4fSNzc3a3a9MMHSCUJ8bZyKKwYOkFBaWkaXTJud37wTRXIMUTfm0ifxCOQ-pPo&usqp=CAU',
    },
];

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

const Store = () => {
    const dispatch = useDispatch();

    const handleItemClick = (id: number) => {
        dispatch(addItem(data.find((d: Product) => d.id === id)));
    };

    return (
        <div className="flex p-10 flex-wrap gap-10">
            {data.map((d: Product) => (
                <div className="flex-1 min-w-[250px] max-w-[300px] min-h-[200px] border flex flex-col rounded-lg overflow-hidden">
                    <img
                        className="h-[70%] object-cover w-full"
                        src={d.image}
                        alt=""
                    />
                    <div className="p-5 w-full">
                        <h2 className="text-[22px]">{d.name}</h2>
                        <div className="flex items-center justify-between">
                            <p className="text-[18px]">${d.price}</p>
                            <button
                                onClick={() => handleItemClick(d.id)}
                                className="w-max py-2 px-4 border rounded-lg transition hover:border-blue-400 hover:text-blue-400"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Store;
