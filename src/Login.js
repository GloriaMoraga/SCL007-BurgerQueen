import React, {Component} from 'react';
import fire from './config/Fire';
import logo from './bq-logo.png';
import VideoBack from './Component/VideoBack';
import {  Container, Row, Form, Col, Button } from 'react-bootstrap';
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
 <div>
<VideoBack id="background-video" loop autoPlay>
</VideoBack>


<Container>
    <Row >
        <Col md={4} ></Col>
        <Col md={4}  className="back-form px-2 mt-5 rounded d-flex flex-column align-items-center justify-content-center" >
        <img src={logo}
              width="250"
              height="auto"
         className="App-logo" alt="logo" />

        <Form className="mb-5 ml-5 mr-5">
        <Form.Group controlId="formBasicEmail">
 
                <label for="exampleInputEmail1">Email adress</label>
                <input value ={this.state.email} onChange ={this.handleChange} type="email" name="email" className="form-control" id ="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    
        </Form.Group>
    
        <Form.Group controlId="formBasicEmail">
 
           <label for="exampleInputPassword1">Password</label>
           <input value ={this.state.password} onChange ={this.handleChange} type="password" name="password" className="form-control" id ="exampleInputPassword1" placeholder="Password" />
           </Form.Group>
           <Button type="submit" onClick={this.login} className="btn btn-primary">Ingresar</Button>
           <Button onClick={this.signup} className="btn btn-success">Signup</Button>
          </Form>
          </Col>
          <Col md={4} ></Col>
    
      </Row>
      </Container>
      </div>   
   
            );

          }

        }

export default Login;        