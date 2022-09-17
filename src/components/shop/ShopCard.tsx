import { numberToIDR } from "../../utils/utils";
import { Product } from "./shop.types";

const ShopCard = ({ product }: ShopCardProps): JSX.Element => {
    return (<>
        <div className="flex px-16 py-3 sm:p-3 basis-full sm:basis-1/2 md:basis-1/3">
            <div className="flex flex-col bg-slate-50 w-full h-full rounded-xl shadow-lg">
                <img className='h-[225px] w-full object-cover rounded-t-xl border-b-4 border-ws-orange' src={product.imageUrl} alt={product.title} />
                <div className="flex flex-col justify-between p-3 w-full max-w-xl">
                    <h2 className="font-sans text-2xl font-semibold mb-1 mx-auto">
                        {(product.title.length > 50) ? product.title.substring(0, 50) + '...' : product.title}
                    </h2>
                    <h3 className='font-sans font-semibold text-lg mx-auto'>
                        {numberToIDR(product.price)}
                    </h3>
                    <a className="mt-4 mb-2 mx-auto" href={product.link} rel="noopener noreferrer" target={'_blank'}>
                        <button className="bg-ws-orange text-gray-800 hover:text-gray-50 font-bold py-2 px-4 rounded-full">
                            Buy Now
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </>);
}

interface ShopCardProps {
    product: Product
}

export default ShopCard;