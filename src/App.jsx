import React, { useState } from 'react'
import './App.css'

 export const App = () => {
  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[mobile, setMobile] =useState("")
  const[password, setPassword] = useState("")

 

const handleSubmit = (e) => {
  e.preventDefault()

   console.log("Username:", username)
   console.log("Email:", email)    
   console.log("Mobile:", mobile) 
   console.log("Password:", password)

   // Reset form
    // setUsername("")
    // setEmail("")
    // setMobile("")
    // setPassword("")


}



  return (
    <div className='back'>
      <div className='sec'>
        <h1>Fill the form</h1>
        <form onSubmit={handleSubmit}>
          <label className='label'>Username:</label>
          <input type="text" value={username} placeholder='Firstname' 
          onChange={(e) => setUsername(e.target.value)}/>

          <label className='label'>Email:</label>
          <input type="email" value={email} placeholder='Enter your email'
           onChange={(e) => setEmail(e.target.value)}/>

          <label className='label'>Mobile:</label>
          <input type="tel" value={mobile} placeholder='Enter phone no.'
           onChange={(e) => setMobile(e.target.value)} />

          <label className='label'>Password:</label>
          <input type="password" value={password} placeholder='password' 
          onChange={(e) => setPassword(e.target.value)}/>

          <button id='btn'   type='submit'>Submit</button>
        </form>


      </div>
    </div>
  )
}

export default App;