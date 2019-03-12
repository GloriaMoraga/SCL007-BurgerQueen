import React, {Component} from 'react';
import fire from './config/Fire';

class Home extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
     }
logout(){
    fire.auth().signOut();

}

render(){
    return(
    <div className="col-ms-6">
        <h1>
            You are Home
        </h1>
        <button onClick={this.logout} ></button>
    </div>
    );
}     

}

export default Home;