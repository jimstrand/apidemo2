import React, { Component } from 'react';

let myName;
let myCompany;
let groupId;
let auth_token;




class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      myName: null
    }
  }

    myLogin(){
    console.log('logging in');
    let EMAIL = document.getElementById('username').value;
    let PASSWORD = document.getElementById('pass').value;

    console.log("Username: "+EMAIL);

    //var fetch = require('node-fetch');
    var API_URL = 'https://app.oliasoft.com/api';

    fetch(API_URL+'/login', {
      method: 'POST',
      body: JSON.stringify({email: EMAIL, password: PASSWORD}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(json => {
      if (json.rc === 'ok') {
        auth_token = json.token;
        myName = json.user.name;
        myCompany = json.user.groups[0];
        groupId = myCompany[0]
        myCompany = myCompany[1];
        // console.log(groupId);
        document.getElementById('username').className = "form-control";
        document.getElementById('pass').className = "form-control";
        this.loginSuccess(myName, myCompany, groupId, auth_token);
      } else {
        this.loginFail();

      }

    });
  }

// const loginSuccess = (myName, myCompany, auth_token) => {

   loginSuccess(myName, myCompany, groupId, auth_token) {
   let x = document.getElementById('authenticate');
   x.className = "btn btn-success ml-2";
   x.value = "Success";
   x.disabled = "true";
   document.getElementById("myName").innerHTML = "Welcome "+myName+" ("+myCompany+")";
   this.props.setToken(myName, myCompany, groupId, auth_token);
  }

    loginFail(){
    document.getElementById('username').className = "form-control is-invalid";
    document.getElementById('pass').className = "form-control is-invalid";
  }



  render(){
    return (

      <div>
      <form>
      <label className="mt-4">
      Username:
      <input id="username" className="form-control" type="text" name="username" placeholder="Email" />
      </label>
      {"\n"}
      <label className="mt-4">
      Password:
      <input id="pass" className="form-control" type="password" name="password" placeholder="Password"/>
      </label>
      <input onClick={this.myLogin.bind(this)} id="authenticate" className="btn btn-primary ml-2" type="button" value="Authenticate" />
      <p id="myName"></p>
      </form>
      </div>
    )
  }
}

export default Login;
