import React, { Component } from 'react'
import Dogpic2 from '../images/dog2.jpg'
import Dogpic3 from '../images/dog3.jpg'

export default class Announcements extends Component {
    constructor(props) {
        super(props);
      }
      render (){
          return (
        <div className = "Announcements-container" style={{width:'80%'}}>
            <h1> Global Announcements</h1>


            <div className = "Announcement-box" style={{border:"1px solid black", padding:"2rem", borderRadius:"1em", marginBottom:"3rem"}}>
    
                <div className="Announcement-picture">
                <img src={Dogpic2} alt="dog2" style={{width:'15%', borderRadius:'5rem'}}/>

               
                </div>
                <h2> Derek Dog</h2>
                <h3> Software Engineer
                    <br/>
                    San Francisco
                    <br/>
                    May 22, 2020
                    <br/>
                </h3>
            <h4>Meet at the water cooler! Who's a good boy? Yes you are, yes you are! Lets go for a walk! Did someone say Walk?!</h4>
            </div>
            <div className = "Announcement-box" style={{border:"1px solid black", padding:"2rem", borderRadius:"1em", marginBottom:"3rem"}}>
    
    <div className="Announcement-picture">
    <img src={Dogpic2} alt="dog2" style={{width:'15%', borderRadius:'5rem'}}/>
    </div>
    <h2> Goldy Retreiver</h2>
    <h3> Software Engineer
        <br/>
        Nashville
        <br/>
        May 21, 2020
        <br/>
    </h3>
<h4>That meeting sure was "Ruff"! </h4>
</div>


<div className = "Announcement-box" style={{border:"1px solid black", padding:"2rem", borderRadius:"1em", marginBottom:"3rem"}}>
    
    <div className="Announcement-picture">
    <img src={Dogpic2} alt="dog2" style={{width:'15%', borderRadius:'5rem'}}/>

   
    </div>
    <h2> Mr. Peanutbutter</h2>
    <h3> Product Manager
        <br/>
        Los Angeles
        <br/>
        May 20, 2020
        <br/>
    </h3>
<h4>This quarantine is too much, I haven't been able to smell any butts in weeks!</h4>
</div>

        </div> 

          )
  }
}