import React from 'react'
import Logo from '../img/ibt.png'
import Eye from '../img/eye.png'
import User from '../img/profile.png'
import { useEffect } from 'react'
import { Link} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context'
import BigBtn from '../components/UI/BigBtn'

const About = () => {

   useEffect(() => {
      document.title = 'IBT Event Tool ';
   });

   const logOut = () => {
      setIsAuth(false)
      localStorage.removeItem('auth');
   }

   const{isAuth, setIsAuth} = useContext(AuthContext)

   return (
      // <Main>
         <div className="mt-4">
            <div className="flex flex-col items-center bg-slate-100">
               <div className="flex items-center">
                  <img  className='w-32' src={Logo} alt=""/>
                  <div className="flex flex-col w-fit ml-2">
                     <h1 className='text-5xl font-semibold text-sky-800 flex items-end'>IBT Event To<img src={Eye} className='w-[25px] h-[25px] ml-[2px] mb-1'/>l</h1>
                     <p className='text-sky-800 text-xl'>WEB приложение для мониторинга персонала</p>
                  </div>
               </div>
            </div>
            <div className="container mx-auto mt-10 flex flex-col">
               <div className="flex flex-col w-fit mx-auto">
                  <div className="flex items-center">
                     <div className="flex items-center rounded-full bg-sky-800 w-fit pr-3 z-0">
                        <img src={User} className='w-12 mr-2 rounded-full border bg-white ring-1 ring-white' />
                        <h3 className='text-3xl font-semibold text-white'>Музафаров Рахимбек Курамович</h3>
                     </div>
                     <button className='font-semibold text-sky-700 text-xl border-y-2 border-r-2 rounded-r-full -ml-5 pl-6 py-2 pr-6 border-sky-800 hover:bg-gradient-to-r from-sky-700/50 -z-5' onClick={logOut}>Выход</button>
                  </div>
                  
                     <BigBtn/>
                     <div className="flex flex-col items-start ml-16 ">
                        <h3 className='text-2xl text-sky-900'>Доступные функции: </h3>
                        <div className="flex items-center mt-2 rounded-l-full hover:bg-gradient-to-r hover:from-sky-700/50">
                           <img src={Eye} className='w-7 h-6 mr-2 rounded-full border bg-white ring-1 ring-white' />
                           <Link to='/my-events' className='font-semibold text-sky-800 text-xl border-sky-600 hover:border-sky-400 w-full text-left'>Мои события</Link>
                        </div>
                        <div className="flex items-center mt-2 rounded-l-full hover:bg-gradient-to-r hover:from-sky-700/50">
                           <img src={Eye} className='w-7 h-6 mr-2 rounded-full border bg-white ring-1 ring-white' />
                           <Link to='/panopticon'  className='font-semibold text-sky-800 text-xl border-sky-600 hover:border-sky-400 w-full text-left'>Паноптикум</Link>
                        </div>
                        <div className="flex items-center mt-2 rounded-l-full hover:bg-gradient-to-r hover:from-sky-700/50">
                           <img src={Eye} className='w-7 h-6 mr-2 rounded-full border bg-white ring-1 ring-white' />
                           <Link to='/event-journal'  className='font-semibold text-sky-800 text-xl border-sky-600 hover:border-sky-400 w-full text-left'>Журнал событий</Link>
                           </div>
                     
               
                  </div>
               </div>

            </div>


         </div>
      // </Main>
   )
}

export default About