import About from "./pages/About";
import RealTime from "./pages/RealTime";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import EventJournal from "./pages/EventJournal";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";


function App() {

   useEffect(()=>{
      if(localStorage.getItem('auth')){
         setIsAuth(true)
      }
   }, [])
   const [isAuth, setIsAuth] = useState(false)

   return (
            <AuthContext.Provider value={{
               isAuth,
               setIsAuth
            }}>
               <BrowserRouter>
                  <AppRouter/>
               </BrowserRouter>
            </AuthContext.Provider>
   )

}

export default App;
