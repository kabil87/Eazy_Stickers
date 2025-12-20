import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import { useEffect, useState } from "react";
import appClient from "../api/appClient";
import { useLoaderData } from "react-router-dom";


const Home = () => {

    const products = useLoaderData();
    
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

export async function productsLoader(){

    try{

       const products = await appClient.get("/productsiy")
       return products.data;
        }
        catch(error){
            
            throw new Response(error.sttus ||"failed to fetch" )
            
        }

}