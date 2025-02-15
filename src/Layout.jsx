import Header from "./components/Header/Header.jsx";
import {Outlet}from "react-router-dom";

function Layout() {
    return (
        <div className='w-full h-dvh'>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default Layout


