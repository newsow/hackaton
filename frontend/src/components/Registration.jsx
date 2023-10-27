import {React,useState}  from "react";
import '../login.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Registration(){
    const host = axios.create('https://localhost/5000/')
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')

    return(
        <>
        <section>
        <div className="form-box2">
            <div className="form-value">
                <form action="">
                    <h2>Create an account</h2>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="login" required value={login} onChange={e=> setLogin(e.target.value)}></input>
                        <label for="">login</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required value={password} onChange={e=> setPassword(e.target.value)} ></input>
                        <label for="">Password</label>
                    </div>
                    
                    <button onclick="window.location.href = '1';">Create <ion-icon name="add-circle-outline"></ion-icon></button>
                    <div className="register">
                        <p>Already have an account?</p>                     
                    </div>
                </form>

                <button className="registration"><Link className='link' to={'/login'}>Login</Link></button>
            </div>
        </div>
    </section>


    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
    )
}

export default Registration