import { useRef, useState, useEffect, useContext } from 'react';
import NavBar from './NavBar.js'
import { useAuth } from "../Components/context/AuthProvider";

import axios from '../Components/api/axios';
const LOGIN_URL = 'http://localhost:3001/api/user/login';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            username: e.target.username.value,
            password: e.target.password.value
        };
    
        if (!formData.username || !formData.password) {
            setErrMsg('Please enterboth username and password');
        }

        try {
            const response = await axios.post(LOGIN_URL, formData);
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            useAuth.login({user, pwd, roles, accessToken});
            setUser('');
            setPwd('');
            setSuccess(true);
            console.log(response)
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
        <NavBar/>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
              
              <div className="Login">
                  <section >
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/register">Sign Up</a>
                        </span>
                    </p>
                </section>
              </div>
                
            )}
            <style>
              {
                `*{
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
               }
               
               h1, label{
                 font-family: 'Nunito', sans-serif;
                 font-size: 25px;
                 color: black;
               }
               .Login{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                min-height: 75vh; 
                padding: 1rem 0.5rem;
               }
               
               body {
                  min-height: 100vh;
                  background-color: #FAF9F6;
               }
              
               section {
            width: 100%;
            max-width: 500px;
            min-height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 1rem;
            background-color: rgba(0,0,0,0.4);
               }
               
               form {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-evenly;
                  flex-grow: 1;
                  padding-bottom: 1rem;
               } 
               .instructions {
                  font-size: 0.75rem;
                  border-radius: 0.5rem;
                  background: #000;
                  color: #fff;
                  padding: 0.25rem;
                  position: relative;
                  bottom: -10px;
               }
               
               .instructions > svg {
                  margin-right: 0.25rem;
               }
               
               .offscreen {
                  position: absolute;
                  left: -9999px;
               }
               
               button {
                 padding: 1rem;
                 margin: 0.5rem;
                 background-color: #d9534f
               }
               input[type="text"],
               input[type="password"],
               button,
               textarea {
                 font-family: 'Nunito', sans-serif;
                 font-size: 22px;
                 padding: 0.25rem;
                 border-radius: 0.5rem;
                 
               }
               
               .hide {
                  display: none;
               }
               
               .valid {
                  color: limegreen;
                  margin-left: 0.25rem;
               }
               
               .invalid {
                  color: red;
                  margin-left: 0.25rem;
               }
               
               .errmsg {
                  background-color: lightpink;
                  color: firebrick;
                  font-weight: bold;
                  padding: 0.5rem;
                  margin-bottom: 0.5rem;
               }
               
               .line {
                  display: inline-block;
               }
              `
              }
            </style>
        </>
        
    )
}

export default Login