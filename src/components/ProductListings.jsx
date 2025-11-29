
import ProductCard from "./ProductCard";

const ProductListings = ({products}) => {
  
    return (

        <div className="ml-16 md:ml-35 p-6  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              {products.length > 0 && 
              products.map((product) =>{
                return <ProductCard key={product.productId} product={product} />
              }) 
              }

            </div>
        </div>
    )

}

export default ProductListings;