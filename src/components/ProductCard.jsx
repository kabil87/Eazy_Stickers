import Price from "./Price";

const ProductCard = ({product}) => {
 
    return (

        <div className="bg-white w-49 h-75 rounded-sm shadow-2xl dark:bg-darkbg border border-gray-400 dark:hover:border-lighter">

           <div className="overflow-hidden rounded-t-sm">
            <img
              className="w-full h-48 object-cover rounded-t-sm transition-transform duration-300 ease-in-out hover:scale-110"
              src={product.imageUrl}
               alt={product.name}
  />
</div>


            <div className="h-17 mt-1 ml-3 ">
               <h3 className="text-purple-900 dark:text-light ">{product.name}</h3>
               <p className="text-xs dark:text-light  pr-1">{product.description}</p> 
            </div>

            <div className="pt-1 ml-3 ">
                <Price  currency="$" price={product.price} />
            </div>

        </div>
    )

}

export default ProductCard;