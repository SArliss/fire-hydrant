import React, {Component} from 'react'

export default class FeedForm extends Component {
    constructor(props) {
        super(props);
      }
      render (){

    return (
      <div className="Feed-form">
     <form>
        
    <label>
  
    Create New Post
    <input type="text" name="Create Post" placeholder="What do you want to share?" />
    </label>
    <input className ="post-button" type="submit" value="Post" style={{backgroundColor:"#5B35A0"}} />
    </form>

        </div>

    ) 
  }
 }
