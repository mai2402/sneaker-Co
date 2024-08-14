import { Outlet } from "react-router-dom"
import Header from "./Header"



function AppLayOut() {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default AppLayOut
