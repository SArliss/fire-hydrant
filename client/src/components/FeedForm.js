import React, {Component} from 'react'
import DogPic from '../images/Dog1.jpeg';
import Camera from '../icons/camera.png'
import Face from '../icons/face.svg'
import Link from '../icons/link.svg'
import Page from '../icons/page.svg'


export default class FeedForm extends Component {
    constructor(props) {
        super(props);
      }
      render (){

    return (
      <div className="Feed-form-container" style={{ marginLeft: "2rem", marginRight:"4rem"}}>
       
        <div className="title" style={{ padding:'10px', color:"#622DA5", fontSize:"17px", fontWeight:"700"}}>
        Create New Post
        <hr/>
        </div>

          {/* <div class="dropdown">
  <button class="dropbtn">Home Office</button>
  <div class="dropdown-content">
    <a href="#">Home Office</a>
    <a href="#">Main Office</a>
    <a href="#">Out of Town</a>
  </div>
</div>        */}
   

          <form> 
            <div className="text-Area">
          <textarea rows="8" >
      What do you want to share?
</textarea>
</div>

  <div className="feed-bottom">

      <div className="feed-icons">
      <img src={Face} alt="Face"></img>
      <img src={Camera} alt="Camera"></img>
      <img src={Link} alt="Link"></img>
      <img src={Page} alt="Page"></img>


      </div>
      <input className="form-button" type="submit" value="Post" />

      </div>
      
    </form>
    </div>
      
    

      

    ) 
  }
 }