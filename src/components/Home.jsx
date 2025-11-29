import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import products from "../staticData/products"

const Home = () => {

    return (
        
        <div className="bg-gray-100 pt-2">
            <PageHeading>
                Add a touch of creativity to your space with our wide Range of fun 
                and unique. Perfect for any accasion!  
            </PageHeading>

            <ProductListings products={products} />
        </div>
    )

}

export default Home;