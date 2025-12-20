import { Link, useRouteError } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import PageTitle from "./PageTitle";
import errorImg from "../assets/util/error.png"

const ErrorPage = () => {

    const errorMsg = useRouteError();
    console.log(errorMsg.status);
    

  return (

    <div className="flex flex-col">
        <Header />

        <div className="ml-110 mt-6">
           <div className="ml-48">
             <PageTitle  title={errorMsg.status} />
           </div>

            <p className="mt-4 mb-4 ml-20 dark:text-lighter">{errorMsg.data}</p>

            <img className="w-90" src={errorImg} />

           

        </div>

        <Footer />

       <div className="absolute">
         <Link to="/home">{<button className="hover:cursor-pointer hover:bg-purple-400 ml-240 mt-75  bg-purple-500 px-2 rounded-sm">Home</button>}</Link> 
       </div>
     
    </div>
    

  )
}

export default ErrorPage
