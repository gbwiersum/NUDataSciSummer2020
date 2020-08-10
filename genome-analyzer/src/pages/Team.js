import React, { Component } from 'react';
import axios from 'axios';
import luke from '../images/luke.jpg';
import leia from '../images/leia.jpg';
import mace from '../images/mace.jpg';

class Team extends Component {

render(){
  return(
    <React.Fragment>
      <div className="hero"></div>
      <div className="people">
        <div className="person">
          <div className="team1"></div>
          <p className="name">Grant Wiersum</p>
          <p>Website</p>
        </div>
        <div className="person">
          <div className="team2"></div>
          <p className="name">Daniela DeLeon</p>
          <p>Website</p>
        </div>
        <div className="person">
          <div className="team3"></div>
          <p className="name">Ayon Bhattacharya</p>
          <p>ayontech.io</p>
        </div>
      </div>
    </React.Fragment>
  )
}

}

export default Team;
