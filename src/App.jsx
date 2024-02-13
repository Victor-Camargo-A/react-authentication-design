import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages Layouts
import { LayoutAdmin } from "./layouts/LayoutAdmin";
//pages Auth
import { Login } from './pages/auth/Login';
import { Register } from "./pages/auth/Register";
//pages admin
import { Home } from "./pages/admin/Home";
import { Error404 } from "./pages/Error404";
import { Chat } from "./pages/admin/Chat";
import { LayoutAuth } from "./layouts/LayoutAuth";
import { ForgetPassword } from "./pages/auth/ForgetPassword";


function App() {
  return (
      <BrowserRouter> 
        <Routes>
          <Route path="/auth" element={<LayoutAuth/>}>
          <Route index element={<Login />} />
          <Route path="registro" element={<Register/>}/>
          <Route path="olvide-Password" element={<ForgetPassword/>}/>

          </Route>

          <Route path="/" element={<LayoutAdmin/>}>
            <Route index element={<Home/>}/>
            <Route path="Chat" element={<Chat/>}/>
          </Route>
          <Route path="*" element={<Error404/>}/>
          
        </Routes>
      </BrowserRouter>

  )
}

export default App;
