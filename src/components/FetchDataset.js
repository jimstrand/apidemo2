import React, { Component } from 'react';



class FetchDataset extends Component {
  constructor(props){
    super(props);

  }

  fetchformation(){

    if(this.props.datasetid !== null){
    var API_URL = 'https://app.oliasoft.com/api';
    fetch(API_URL+'/evalds', {
      method: 'POST',
      body: JSON.stringify({email: 'EMAIL', password: 'PASSWORD'}),
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        t: this.props.t,
        dataset: this.props.datasetid
      })
    })
    .then(res => res.json())
    .then(json => {
      console.log(json);

    });
  }

}


  render(){
  return (

    <div>
    hello yes hello {this.fetchformation()}
    </div>

  )
}
}

export default FetchDataset;
