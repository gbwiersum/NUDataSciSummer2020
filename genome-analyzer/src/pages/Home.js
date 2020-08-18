import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isPredicted:false,
      stopSignPrediction:0,
      input:false,
      showAlert:false,
      alertText:"",
      data: [],
    };
  }

  inputMethod = () => {
    let i = !this.state.input;
    this.setState({input:i});
  }

  uploadHandler = (event) => {
    console.log(event.target.files[0])
    const data = new FormData()
    data.append('file', event.target.files[0])
    console.log(data)
    //https://genomeanalyzer.wl.r.appspot.com
    axios.post("http://localhost:5000/predict_upload", data, {
    }).then(
    axios.get("http://localhost:5000/predict_get").then(function (response) {
        console.log(response);
        console.log('dealio');
      })
    )
}

render(){
  return(
    <React.Fragment>
      <div className="hero"></div>
      <div className="float">
        <h1>Viral genome classification using deep learning.</h1>
        {this.state.isPredicted ? <p class="Alert">{this.state.stopSignPrediction}</p> : null}
        <label className="custom-file-upload">
          <input className="Input" type="file" name="file" onChange={this.uploadHandler}/>
            Upload File
        </label>

      </div>
    </React.Fragment>
  )
}

}

export default Home;
