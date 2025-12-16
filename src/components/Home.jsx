import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import { useEffect, useState } from "react";
import appClient from "../api/appClient";

const Home = () => {

    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState();
    const [errormsg, setErrormsg] = useState(null);


    useEffect(()=>{
        fetchProducts();
    },[])

    const fetchProducts = async () => {
        try{
            setLoading(true)
            const products = await appClient.get("/products")
            setProducts(products.data)
        }
        catch(errormsg){
            setErrormsg("failed to fetch the data pls try agaian later!...")
        }
        finally{
            setLoading(false);
        }
    }

    if (loading){
        return <div className=" m-40 mb-70 ml-150">Loading products...</div>
    }
    if (errormsg){
        return <div className="text-red-600 m-40 mb-70 ml-110">{errormsg}</div>
    }

    return (
        
        <div className=" pt-2">
            <PageHeading>
                Add a touch of creativity to your space with our wide Range of fun 
                and unique. Perfect for any accasion!  
            </PageHeading>

            <ProductListings products={products} />
        </div>
    )

}

export default Home;