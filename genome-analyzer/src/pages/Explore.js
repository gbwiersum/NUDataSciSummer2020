import React, { Component } from 'react';
import axios from 'axios';
import luke from '../images/luke.jpg';
import leia from '../images/leia.jpg';
import mace from '../images/mace.jpg';

class Explore extends Component {

render(){
  return(
    <React.Fragment>
      <div className="hero"></div>
      <div className="content">
        <div className="sequence">
          <p>Gene Sequence Alignment</p>
          <div className="seq"></div>
        </div>
        <div className="taxonomy">
          <p>Viral Taxonomy</p>
          <div className="tax"></div>
        </div>

      </div>
    </React.Fragment>
  )
}

}

export default Explore;
