import React, {useState} from 'react'
import './Login.scss'
import {Link} from 'react-router-dom'
import { auth, signInWithGoogle } from '../../firebase/firebase';


const Login = () => {
    const [user, setUser ] = useState({email: '', password:''})
    const { email, password } = user

    const handleSubmit = async event => {
        event.preventDefault();
    
       
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUser({ email: '', password: '' });
          } catch (error) {
            console.log(error);
          }
        
    }


    const handleChange = (event) => {
        const { value, name } = event.target;
    
        setUser({...user, [name]: value });   
        console.log(email)
      };
    

    return (
        <div className='login'>
         <div className='container'>
         <p className='title'>Log in to your existing account</p>
          <form onSubmit={handleSubmit}>
               <div class="form-group pt-2">
                    <input type="email" class="form-control" name='email' value={email} id="exampleFormControlInput1" placeholder="emailaddress" onChange={handleChange}/>
                </div>
                <div class="form-group pt-2">
                    <input type="password" class="form-control" name='password' value={password} id="exampleFormControlInput1" placeholder="password" onChange={handleChange}/>
                </div>
                <button type="button" class="btn btn-secondary btn-lg btn-block" onClick={handleSubmit}>Log in</button>
          </form>
          <div className='pt-2'>
          <button type="button" class="btn btn-primary btn-lg btn-block" onClick={signInWithGoogle} >Log in with Google</button>
          </div>
          <div className='title2 pt-2'>
          <p >Don't have an account?</p>
          <Link to='/Signup' className='text-center'>Sign up</Link>
          </div>
          
         </div>
           
        </div>
    )
}





export default Login