import React, { useContext,useState } from 'react'
import About from "../pages/About";
import {Route, Routes} from "react-router-dom";
import { privateRoutes, publicRoutes } from '../router/routes';
import Login from '../pages/Login';
import { AuthContext } from '../context';
import { WorkContext } from '../context';

const AppRouter = () => {
   const {isAuth, setIsAuth} = useContext(AuthContext)
   const [isWorking, setIsWorking] = useState(false)
   return (
      isAuth
         ?  <WorkContext.Provider value={{isWorking, setIsWorking}}>
               <Routes>
                  {privateRoutes.map(route =>
                     <Route path={route.path} element={route.element} key ={route.path}/>
                  )}
                  <Route path='*' element={<About/>}/>
               </Routes>
         </WorkContext.Provider>
         :  <Routes>
               {publicRoutes.map(route =>
                  <Route path={route.path} element={route.element} key ={route.path}/>
               )}
               <Route path='*' element={<Login/>}/>
            </Routes>
      
   )
}

export default AppRouter