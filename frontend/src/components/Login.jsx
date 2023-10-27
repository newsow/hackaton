import {React,useState} from 'react'
import '../login.css'
import { Link } from 'react-router-dom'
function Login(){
    const [login,setLogin] = useState()
    return(
    <>
        <section>
        <div className="form-box">
            <div className="form-value">
                <form action="">
                    <h2>Login</h2>
                    <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="login" required></input>
                        <label for="">login</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required></input>
                        <label for="">Password</label>
                    </div>
                    
                    <button onclick="window.location.href = '1';">Log in</button>
                    <div className="register">
                        <p>Don't have a account?</p>                     
                    </div>
                </form>

                <button className="registration"><Link className='link' to={'/registr'}>Register</Link></button>
            </div>
        </div>
    </section>


    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
    )
}

export default Login
