import React, { Component } from 'react';



class Datasets extends Component {
  constructor(props){
    super(props);

  }

senddatasetid(){
  let id = document.getElementById("datasetId").value;

  if (id != ""){
    this.props.storeDataset(id);
    let x = document.getElementById("senddatasetid")
    x.className = "btn btn-success ml-2";
    x.disabled = "true";

  }
}

  render(){

if (this.props.groupId !== null) {

    return (
      <div>

      <form>
      <label className="mt-4">
      <input id="datasetId" className="form-control" type="number" name="datasetId" placeholder="Dataset ID (1-1000)" />
      </label>
      {"\n"}
      <input onClick={this.senddatasetid.bind(this)} id="senddatasetid" className="btn btn-primary ml-2" type="button" value="Fetch Dataset" />
      <p id="myName"></p>
      </form>


      </div>
    )

} else {
  return (
    <div>

    </div>
  )

  }

  }
}

export default Datasets;
