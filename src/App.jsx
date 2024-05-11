

import "./App.css"
/*============ React-router-dom ================ */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*=============== componets render in app.jsx =========== */
import Home from "./pages/home/home.jsx";
import Login from "./pages/login/login.jsx";
import List from "./pages/list/list.jsx";
import Single from "./pages/single/single.jsx";
import New from "./pages/new/new.jsx";
import { userInput, userInput2, userProducts, userProducts2} from "./Fromsource.jsx";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkmode.jsx";


const App = () => {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <>
      <div className={darkMode ? "app dark": "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login/>}/>

            <Route path="users">
              <Route index element={<List/>}/>
              <Route  path=":userId" element={<Single/>}/>
              <Route  path="new" element={<New inputs={userInput} inputs2={userInput2} title="Add New Users"  />}/>
            </Route>

            <Route path="products">
              <Route index element={<List/>}/>
              <Route  path=":productId" element={<Single/>}/>
              <Route  path="new" element={<New inputs={userProducts} inputs2={userProducts2} title="Add New Products" />}/>
            </Route>
          </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App