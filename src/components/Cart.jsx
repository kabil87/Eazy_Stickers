import PageTitle from "./PageTitle"
import img from "../assets/util/emptycart.png"
import { Link } from "react-router-dom"


const Cart = () => {
  return (
    <div className="flex flex-col items-center mt-10">

     <div>
      <PageTitle title="Your Cart" />
     </div>

     <p className="dark:text-light mt-4">Opps... Your cart is empty, Continue Shopping</p>

     <div className="w-60 dark:bg-light rounded-sm mt-4">
      <img  src={img} />
     </div>

     <Link className="bg-primary mb-5 text-white dark:text-black dark:bg-light rounded-sm p-1 px-2 mt-4 dark:hover:bg-lighter" to="/home">Back to Products</Link>

    </div>
  )
}

export default Cart
