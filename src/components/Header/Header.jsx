import {Link, NavLink} from "react-router-dom";
function Header(){
    return(
        <header  className="shadow sticky z-50 top-0 ">
            <nav className="bg-blue-950 border-gray-200 border-b-2 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center text-slate-200  text-3xl font-bold">
                        <p className="">Quick News</p>
                    </Link>
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink to="/"
                                     className={({isActive}) =>
                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-white"}
                                                  border-b border-gray-100 text-xl hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                                                  hover:text-orange-700 lg:p-0`
                                     }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/articles"
                                     className={({isActive}) =>
                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-white"} border-b text-xl border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                     }
                            >
                                Articles
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header