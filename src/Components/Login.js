import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='parentlogindiv'>

        
        <div className='formdiv'>
        <div className='textdiv'>
        <h3>Welcome Back</h3>
        </div>
        <form className="" action="">
          <div className="inplogin1div">
            <input className="inplogin1" type="text" placeholder="Username" />
          </div>
          <div className="inplogin2div">
            <input className="inplogin2" type="text" placeholder="Business name" />
          </div>
         <div className='checkboxdiv'>
        <div>
        <input type="checkbox" /> Remember Password
        </div>
          <h6 className='headie'>Forgot password</h6>
         </div>
          <div className='btnlogindiv'>
         <Link to='/'> <button className='btnlog'>Log in</button></Link>
          </div>

        </form>
       <div className='infomdiv'>
       <h6>New user ? <Link to='login'><span className='spanned'>Click here</span></Link></h6>
       </div>
        </div>
    </div>
  )
}

export default Login