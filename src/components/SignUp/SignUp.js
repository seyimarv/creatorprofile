import React, {useState} from 'react'
import './SigUp.scss'
import { auth, createUserProfile } from '../../firebase/firebase'


const SignUp = () => {
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        secondName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
   const {firstName, secondName, userName, email, password, confirmPassword} = userDetails;

   const handleSubmit = async event => {
    event.preventDefault();


    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
     

      await createUserProfile(user, { userName, firstName, secondName});

      setUserDetails({
        firstName: '',
        secondName: '',
        userName: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.error(error);
    }
  };


    const  handleChange = event => {
        const { name, value } = event.target;
    
        setUserDetails({...userDetails, [name]: value });
        console.log(email)
        console.log(password)
      };
    
    return (
        <div className='signup'>
         
         <div className='container'>
           <p className='title'>Sign up as  new user</p>
           <form className='form'>
              <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="First name" onChange={handleChange}  name='firstName' value={firstName}/>
                    </div>
                    <div class="col">
                    <input type="text" class="form-control" placeholder="Last name" onChange={handleChange} name='secondName' value={secondName} />
                    </div>
                </div>
                <div class="form-group pt-3">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="emailaddress" onChange={handleChange} name='email' value={email}/>
                </div>
                <div class="row">
                    <div class="col">
                    <input type="text" class="form-control" placeholder="Username" onChange={handleChange} name='userName' value={userName} />
                    </div>
                    <div class="col">
                    <input type="password" class="form-control" placeholder="password" onChange={handleChange} name='password' value={password} />
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-6">
                    <input type="password" class="form-control" placeholder="confirm password" onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                    </div>
                </div>
                <div className='button'>
                <button type="submit" onClick={handleSubmit} class="btn btn-secondary mt-5 ">Sign up</button>
                </div>
           </form>
          
          
         </div>
        </div>
    )
}




export default SignUp