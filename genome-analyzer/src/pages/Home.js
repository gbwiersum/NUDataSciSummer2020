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
    axios.post("/predict_upload", data, {
         // receive two    parameter endpoint url ,form data
    }).then(res => { // then print response status
      console.log(res)
      console.log(res.data)
      var data = res.data
      this.setState({stopSignPrediction: data, isPredicted: true})
      this.setState({alertText:String(this.stopSignPrediction)})
 })
}

render(){
  return(
    <React.Fragment>
      <div className="hero"></div>
      <div className="float">
        <h1>Viral genome classification using deep learning.</h1>
        {this.state.isPredicted ? <p class="Alert">{this.state.stopSignPrediction}</p> : null}
        <label class="custom-file-upload">
          <input className="Input" type="file" name="file" onChange={this.uploadHandler}/>
            Upload File
        </label>

      </div>
    </React.Fragment>
  )
}

}

export default Home;
