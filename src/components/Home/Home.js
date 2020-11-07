import React from 'react'
import './Home.scss'
import {ReactComponent as Create} from '../../assets/undraw_profile_6l1l.svg'
import {ReactComponent as Details} from '../../assets/profile.svg'
import {ReactComponent as View } from '../../assets/View.svg'
import {Link} from 'react-router-dom'

import { LogOut } from '../../redux/user/User.actions'
import {connect} from 'react-redux'

const Home = ({currentUser}) => {
  
  
  return (
    <div className='homepage'>
      <div className='first-section'>
        <div className='container'>
          <div class="row">
          <div className="col-md-12 col-sm-12 col-lg-8 left-section">
            <h1 class="home-heading-one tc animated fadeIn delay-1s">Create your profile, define yourself</h1>
            <div className='button'>
              {  currentUser ?    null :      

                 <Link to='/Signup'><button type="button" class="btn">Sign up</button></Link>
              }
            </div>

             </div>
          </div>

        </div>

      </div>
      <div className='second-section'>
       <div className='container'>
         <div className='row'>
         <div className="col-md-2"></div>
         <div className="col-md-8">
            <h1  className=" home-heading-two text-center">How it Works</h1>
            <p className=" home-paragraph-one text-center">This platform allows you to Create your profile, add necessary details about yourself, and also edit your details when you have to. </p>
         </div>
         <div className='col-md-2'></div>

         </div>

       </div>
        <div className='third-section'>
           <div className='container'>
              <div className='row'>
              <div className="col-md-4 text-center mt-5">
                    <Create className="img-fluid images"/>
                    <p className="home-paragraph-one pt-2 pl-4 pr-4">Create your Profile</p>
                </div>
                <div className="col-md-4 text-center mt-5">
                    <Details className="img-fluid images"/>
                    <p className="home-paragraph-one pt-2 pl-4 pr-4">Add your Profile details</p>
                </div>
                <div className="col-md-4 text-center mt-5">
                    <View className="img-fluid images"/>
                    <p className="home-paragraph-one pt-2 pl-4 pr-4">View and edit your profile</p>
                </div>
              </div>
           </div>

        </div>

      </div>

    </div>
)
  }
  const mapDispatchToProps = dispatch => ({
    LogOut: () => dispatch(LogOut())
  });
  





export default connect(null, mapDispatchToProps) (Home);