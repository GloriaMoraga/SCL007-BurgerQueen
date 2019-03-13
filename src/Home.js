import React, {Component} from 'react';
import fire from './config/Fire';
import NameForm from './Component/NameForm'

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
            Bienvenidos a Burger Queen
        </h1>
        <NameForm />
        <button onClick={this.logout} >Salir</button>
    </div>
    );
}     

}

export default Home;