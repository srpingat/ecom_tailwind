import { Button,  Label, TextInput } from "flowbite-react";
import { useState } from 'react';
import axios from "axios";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let handleLogin = (e) => {
        console.log(email);
        console.log(password);
        e.preventDefault();

        axios.post('/api/auth/login', {
            email: email,
            password: password
        })
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user) );
    
            window.location.replace("/");
        })
        .catch(err => {
            console.log(err);
        })

    }

    
  return (
    <>
    <form className="flex max-w-md flex-col gap-4" onSubmit={(e) => {
          
          handleLogin(
              e,  email, password);
      
        }}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1"  value={password}  type="password" onChange={(e) => setPassword(e.target.value)} required />
      </div>
   
      <Button type="submit">Submit</Button>
    </form>
    </>
  )
}

export default Login