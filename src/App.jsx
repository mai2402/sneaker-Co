import {BrowserRouter, Routes, Route} from "react-router-dom"
import AppLayOut from "./pages/AppLayOut"
import Collections from './pages/Collections'
import MenProducts from "./pages/MenProducts"
import WomenProducts from "./pages/WomenProducts"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Cart from "./features/cart/cart"
import Profile from "./pages/Profile"
import SubmitOrder from "./features/order/SubmitOrder"

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< AppLayOut />}>
                        <Route index element={< Home />}/>
                        <Route path="/collections" element={< Collections />}/>
                        <Route path="/men" element={< MenProducts />}/>
                        <Route path="/women" element={< WomenProducts />}/>
                        <Route path="/about" element={< About />}/>
                        <Route path="/contact" element={< Contact />}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/submit-order" element={<SubmitOrder/>}/>
                    </Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
