import { useEffect, useRef, useState } from "react";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons"
import NavBar from './NavBar.js'

import 'bootstrap/dist/css/bootstrap.min.css';


import { FontAwesomeIcon, faFontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef()
  const errRef = useRef()

  const [user,setUser] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [pwd,setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd,setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(()=> {
    userRef.current.focus();
  }, [])

  useEffect(()=>{
    const result = USER_REGEX.test(user);
    console.log(result)
    console.log(user);
    setValidName(result)
  }, [user])

  useEffect(()=>{
    const result = PWD_REGEX.test(pwd);
    console.log(result)
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);

  }, [pwd, matchPwd])

  useEffect(()=>{
    setErrMsg('')
  }, [user, pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if(!v1 || !v2){
      setErrMsg("Invalid Entry")
      return
    }
  }
  return (
  
  <div>
  <NavBar/>
<div className="Register">
  
<section >
 <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} 
 aria-live="assertive">{errMsg}</p>
 <h2>Sign Up</h2>
 <form onSubmit={handleSubmit}>
   <label htmlFor="username">
       Username:
       <span className={validName ? "valid" : "hide"}>
         <FontAwesomeIcon icon={faCheck}/>
       </span>
       <span className={validName || !user ? "hide" : "invalid"}>
         <FontAwesomeIcon icon={faTimes}/>
       </span>
   </label>

   <input 
   type = "text" id="username" ref={userRef} autoComplete="off"
   onChange={(e) => setUser(e.target.value)}
   required
   aria-invalid={validName ? "false" : "true"}
   aria-describedby="uidnote"
   onFocus={()=> setUserFocus(true)}
   onBlur={() => setUserFocus(false)}
   />
   <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
     <FontAwesomeIcon icon={faInfoCircle}/>
     4 to 24 characters.<br />
     Letters, numbers, underscores, hypens allowed.
   </p>

   <label htmlFor="password">
       Password:
       <span className={validPwd ? "valid" : "hide"}>
         <FontAwesomeIcon icon={faCheck}/>
       </span>
       <span className={validPwd || !pwd ? "hide" : "invalid"}>
         <FontAwesomeIcon icon={faTimes}/>
       </span>
   </label>

   <input 
   type = "password" 
   id="password"
   onChange={(e) => setPwd(e.target.value)}
   required
   aria-invalid={validName ? "false" : "true"}
   aria-describedby="pwdnote"
   onFocus={()=> setPwdFocus(true)}
   onBlur={() => setPwdFocus(false)}
   />
   <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
     <FontAwesomeIcon icon={faInfoCircle}/>
     8 to 24 characters.<br />
     Must include uppercase and lowercase letters, a number and a special
     character <br/>
     Allowed special characters: <span aria-label="exclamation mark">!</span>
     <span aria-label="at symbol">@</span><span aria-label="hashtag">#</span>
     <span aria-label="dollar sign">$</span><span aria-label="percent">%</span>
   </p>

   <label htmlFor="confirm_pwd">
     Confirm Password: 
     <span className={validMatch && matchPwd ? "valid" : "hide"}>
       <FontAwesomeIcon icon={faCheck}/>
     </span>
     <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
       <FontAwesomeIcon icon={faTimes} />
     </span>
   </label>
   <input
   type="password"
   id="confirm_pwd"
   onChange={(e) => setMatchPwd(e.target.value)}
   required
   aria-invalid={validMatch ? "false" : "true"}
   aria-describedby="confirmnote"
   onFocus={() => setMatchFocus(true)}
   onBlur={() => setMatchFocus(false)}
   />
   <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
     <FontAwesomeIcon icon={faInfoCircle} />
     Must match the first password input field.
   </p>
   <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                 </form>
                 <p>
                     Already registered?<br />
                     <span className="line">
                         {/*put router link here*/}
                         <a href="/login">Sign In</a>
                     </span>
                 </p>
</section>
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


body {
   min-height: 100vh;
   background-color: #FAF9F6;
}

.Register {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 min-height: 75vh; 
 padding: 1rem 0.5rem;
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
}`
 }

</style>
</div>
  </div>
  )


}
export default Register


