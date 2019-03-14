import React, {Component} from 'react';
import fire from './config/Fire';
import VideoBack from './Component/VideoBack'
import './Login.css';


class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state ={
            email:'',
            password: ''
        }
    }


 login(e){
     e.preventDefault();
     fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
     }).catch((error) =>{
         console.log(error);
      });

 }   

 signup(e){
     e.preventDefault();
     fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
         console.log(error);
     })
 }

handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
}

render() {
return (
    
 <div className ="container-fluid">
 <VideoBack id="background-video" loop autoPlay>
</VideoBack>
 <div className ="row">


 <div className="col-md-3"></div>
    <div className="col-md-6">
        <form>
            <div className = "form-group">
                <label for="exampleInputEmail1">Email adress</label>
                <input value ={this.state.email} onChange ={this.handleChange} type="email" name="email" className="form-control" id ="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    
            </div>
           < div className="form-group">
           <label for="exampleInputPassword1">Password</label>
           <input value ={this.state.password} onChange ={this.handleChange} type="password" name="password" className="form-control" id ="exampleInputPassword1" placeholder="Password" />
           </div>
           <button type="submit" onClick={this.login} className="btn btn-primary">Ingresar</button>
           <button onClick={this.signup} className="btn btn-success">Signup</button>
          </form>
         </div>
      <div className="col-md-3"></div>
     </div>
    </div>
            );

          }

        }

export default Login;        