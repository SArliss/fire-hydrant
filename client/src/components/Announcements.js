import React, { Component } from 'react'
import Dogpic2 from '../images/dog2.jpg'
import Dogpic3 from '../images/dog3.jpg'

export default class Announcements extends Component {
    constructor(props) {
        super(props);
      }
      render (){
          return (
        <div className = "Announcements-container">
            <h3> Global Announcements</h3>


            <div className = "Announcement-box" style={{border:"1px solid black", borderRadius:"1em", marginBottom:"3rem"}}>
                
                <div className="Announcement-picture">
                <img src={Dogpic2} alt="dog2" style={{width:'10%', borderRadius:'5rem'}}/>

               
                </div>
                <h2> David T. Dog</h2>
                <h3> Software Engineer
                    <br/>
                    San Francisco
                    <br/>
                    May 22, 2020
                    <br/>
                </h3>
            <h4>Meet at the water cooler! Who's a good boy? Yes you are, yes you are!</h4>
            </div>

            <div className = "Announcement-box" style={{border:"1px solid black", borderRadius:"1em"}}>
                <div className="Announcement-picture">
                <img src={Dogpic3} alt="dog3" style={{width:'10%', borderRadius:'5rem'}}/>

               
                </div>
                <h2> Goldy Retriever</h2>
                <h3> Product Manager
                    <br/>
                    Los Angeles
                    <br/>
                    May 22, 2020
                    <br/>
                </h3>
            <h4>I love sniffing butts. I'm not about to let this pandemic affect my ability to sniff butts</h4>
            </div>



{/* 
            <div className = "Announcement" style={{border:"1px solid black"}} >
            <h4>Meet at the food court!</h4>
            </div> */}
        </div>

          )
  }
}