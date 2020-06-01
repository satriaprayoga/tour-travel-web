import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Login from './Login';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.handleLogin=this.handleLogin.bind(this);
    }

    handleLogin(){
        setTimeout(()=>{
          const from=this.props.location.state;
          if(from){
            this.props.history.push(from.from);
          }else{
            this.props.history.push("/");
          }
         
         
        },1000);
      }
    render(){
        if(this.props.isAuthenticated){
            const from=this.props.location.state?this.props.location.state.from:'/';
            return <Redirect to={`${from}`}/>
        }else{
            return <Login onLogin={this.handleLogin} isAuthenticated={this.props.isAuthenticated}/>
        }
    }
}

export default withRouter(SignIn);