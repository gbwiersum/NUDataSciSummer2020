import React, { Component } from 'react';
import axios from 'axios';
import {Ripple} from 'react-spinners-css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      prediction:0,
      loading:false,
      info:false
    };
  }

  inputMethod = () => {
    let i = !this.state.input;
    this.setState({input:i});
  }

  getData = async (file) => {
    this.setState({loading:true})
    console.log('About to send POST')
    await axios.post("http://localhost:5000/predict_upload", file, {
    }).then(response => console.log(response))

    console.log('Data POSTed')
  }

 uploadHandler =  async (event) => {
    console.log(event.target.files[0])
    const data = new FormData()
    data.append('file', event.target.files[0])
    console.log(data)
    this.getData(data)
    //https://genomeanalyzer.wl.r.appspot.com
}

infoToggle = () => {
  this.setState({info:!this.state.info});
}

render(){
  return(
    <React.Fragment>
      <div className="hero"></div>
      <div className="float">
        <h1>Machine learning powered viral genome classification.</h1>
        {this.state.isPredicted ? <p class="Alert">{this.state.stopSignPrediction}</p> : null}

        {this.state.loading ? null:
        <div className="inputSection">
        <label className="custom-file-upload">
          <input className="Input" type="file" name="file" onChange={this.uploadHandler}/>
            Upload file
        </label>
        <button onClick={() => this.infoToggle()}><p>i</p></button>
        {this.state.info ? <p>Upload a .txt file containing a viral genome segment in FASTA format.</p>: null}
        </div>
        }

        {this.state.loading ?
          <div className="loadingSection">
            <Ripple className='loading' color='white'/>
            <p>This can take several minutes. Great time to make a coffee.</p>
          </div> : null}



      </div>
    </React.Fragment>
  )
}

}

export default Home;
