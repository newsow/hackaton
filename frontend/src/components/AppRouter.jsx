import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './HomePage.jsx'
import Login from './Login.jsx'
import Registration from './Registration.jsx'
export default function AppRouter(){
    return(
        <div>
            <Routes>

                <Route path='/login' element={<Login/>} />
                <Route path='/registr' element={<Registration/>} />
            </Routes>
        </div>
    )
}