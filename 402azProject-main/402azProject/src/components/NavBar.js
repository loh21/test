import React, { useState, Component } from 'react';
import logo from './picture/logo.png' ;
import {Auth} from 'aws-amplify';
import { useNavigate } from 'react-router-dom';


export default class NavBar extends Component{

    state ={
        user: {}
      }
    
    
    
      getUsr(){
        Auth.currentAuthenticatedUser()
        .then(res => this.setState({user: res}));
    
      }
    
      async signOut(){
        try{
          await Auth.signOut(); 
    
        }catch(ex){
          console.log(ex)
        }
        
    
      };
    
      componentDidMount(){
        this.getUsr();
      }



    render (){
        return(
            <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                    <img src={logo} width="112" height="28"/>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasic" class="navbar-menu">
                    <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Home
                    </a>

                    <a className="navbar-item" href="/Movies">
                        Movies
                    </a> 

                    <a className="navbar-item" href="/TvShows">
                        TV
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                        Support
                        </a>

                        <div className="navbar-dropdown">
                        <a className="navbar-item" href="/about">
                            About
                        </a>
                        <a className="navbar-item" href="/FAQ">
                            FAQ
                        </a>
                        <hr className="navbar-divider" />
                        <a className="navbar-item " href="/feedback">
                            Feedback
                        </a>
                        <a className="navbar-item" href="/viewFB">
                            View FeedBack
                        </a>
                        </div>
                    </div>
                    

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                        Admin
                        </a>

                        <div className="navbar-dropdown">
                        <a className="navbar-item" href="/MoviesEdit">
                            Movie Admin
                        </a>

                        <hr className="navbar-divider" />
                        <a className="navbar-item " href="/Admin">
                            TV Show Admin
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <button onClick= {() => this.signOut()} href = "/" className="button is-primary">
                            <strong>Logout</strong>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </nav>
        );
    }
}