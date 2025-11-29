import Price from "./Price";

const ProductCard = ({product}) => {

    return (

        <div className="bg-white w-48 h-75 rounded-sm shadow-2xl">

            <div>
                <img className="w-48 h-48  rounded-t-sm" src={product.imageUrl} alt={product.name} />
            </div>

            <div className="h-17 mt-1 ml-3">
               <h3 className="text-purple-900 ">{product.name}</h3>
               <p className="text-sm  ">{product.description}</p> 
            </div>

            <div className="pt-1 ml-3 ">
                <Price  currency="$" price={product.price} />
            </div>

        </div>
    )

}

export default ProductCard;