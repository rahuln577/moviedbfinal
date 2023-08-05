import {HashRouter,Routes,Route,Link} from "react-router-dom"
import Home from "./Pages/Home"
import ListPage from "./Pages/ListPage"
import Navbar from "./components/Navbar"
function App(){
    return <div>
        <HashRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/nowplaying" element={<ListPage />}></Route>
                <Route path="/popular" element={<ListPage />}></Route>
                <Route path="/upcoming" element={<ListPage />}></Route>
                <Route path="/toprated" element={<ListPage />}></Route>
            </Routes>
        <footer><h2> &#169; Copyrights Reserved by Rahul N</h2></footer>
        </HashRouter>
        </div>
}
export default App