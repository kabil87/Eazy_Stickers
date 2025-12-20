import { Link } from "react-router-dom"
import PageTitle from "./PageTitle"


const Login = () => {
  return (

    <div className="h-90">

      <div className="bg-white shadow-2xl dark:bg-gray-700 w-90 rounded-sm mx-auto mt-20 h-80 ">

        <div className="text-center pt-4">
          <PageTitle title="Login" />
        </div>

        <form className="mt-5 ml-10">

          <div className="flex flex-col">
            <label className="text-primary dark:text-light" htmlFor="name">UserName</label>
            <input className="w-70 p-1 px-2 mt-2 border border-gray-600 dark:text-lighter outline-none dark:borde dark:border-light rounded-sm" type="text" id="name" required placeholder="Your Name" ></input>
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-primary dark:text-light" htmlFor="password">Password</label>
            <input className="w-70 p-1 px-2 mt-2 border border-gray-600 dark:text-lighter outline-none dark:border dark:border-light rounded-sm" type="text" id="password" required placeholder="Your Password" ></input>
          </div>

          <button className="bg-primary text-lighter dark:text-gray-900 hover:cursor-pointer dark:hover:bg-lighter w-70 mt-4 rounded-sm p-1 dark:bg-light " type="submit">Login</button>

          <div className="flex mt-2 py-2 items-center">
            <p className="dark:text-light text-sm">Don't have an accound?</p>
            <Link className="dark:text-lighter ml-1" to="/register">Register Here</Link>
          </div>

        </form>

    </div>

    </div>

  )
}

export default Login
