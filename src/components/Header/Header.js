import React, {useState} from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo } from '../../assets/undraw_mobile_web_2g8b.svg'
import { auth } from '../../firebase/firebase'
import { LogOut } from '../../redux/user/User.actions'
import {connect} from 'react-redux'

const Header = ({ currentUser, LogOut }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const onLogout = () => {
    auth.signOut()
    LogOut()
  
  }
    return (
        <div className='header'>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <div className='container'>
             <Logo className="img-fluid images"/>
                <h1 className='nav-title'>Creatorprofile</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-expanded={!isNavCollapsed ? true : false} onClick={handleNavCollapse} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    { currentUser ? null :
                      <Link to= '/' className=" nav-link"><p className='nav-item pl-2'>Home </p> <span class="sr-only">(current)</span></Link>}
                    {  currentUser ?
                      <div className='nav-item nav-link link' onClick={onLogout}>
                      <Link to='/'><p className='nav-item'> log out </p></Link> 
                      </div> :

                    (<div className='navbar-nav'>
                    <Link to='/login'  className="nav-item nav-link"><p className='nav-item'>Log in</p></Link>
                    <Link to='/Signup'  className="nav-item nav-link"><p className='nav-item'>Sign up</p></Link>
                    </div>)
                    }
                    { currentUser ? 
                    <div className='navbar-nav'>
                     <Link to='/ProfilePage' className='nav-item nav-link' ><p className='nav-item'>Profile</p></Link>

                    </div> : null
                    }
                    
                    </div>
                </div>
              </div>
        </nav>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
  LogOut: user => dispatch(LogOut())
});




export default connect(null, mapDispatchToProps)(Header);