import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from "./Pages/Home"
import ListPage from "./Pages/ListPage"
import Navbar from "./components/Navbar"
function App(){
    return <div>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/listpage" element={<ListPage/>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
}
export default App