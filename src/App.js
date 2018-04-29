import React, { Component } from 'react';
import './App.css';
import Topbar from './components/Topbar';
import Login from './components/Login';
import Datasets from './components/Datasets';
import FetchDataset from './components/FetchDataset';

class App extends Component {


constructor(props){
  super();
  this.state = {
    token: null,
    myName: null,
    myCompany: null,
    groupId: null,
    datasetId: null
  };
}

setToken = (setmyName, setmyCompany, setGroupId, auth_token) => {
  this.setState({
    token: auth_token,
    myName: setmyName,
    myCompany: setmyCompany,
    groupId: setGroupId
  })
}

storeDataset = (datasetId) => {
  console.log("Callback called, datasetID is set to:", datasetId);
  this.setState({
    datasetId: datasetId
  })
}

  render() {
    return (
     <div className="App">
     <Topbar />
     <Login setToken={this.setToken}/>

     <Datasets storeDataset={this.storeDataset} groupId={this.state.groupId}/>
     <FetchDataset t={this.state.token} datasetid={this.state.datasetId} groupid={this.state.groupId} />

     </div>
   );
  }
}

export default App;
