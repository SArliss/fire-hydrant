import React, { Component } from 'react'

export default class FeedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {

    return (
      <div className="feed-form">

        <form >

          <label>Create New Post</label>
      
          <textarea rows="4" placeholder="What do you want to share?">
          </textarea>

          <div className="feed-form-bottom">
            <button>Post</button>
          </div>

        </form>

      </div>
    )
  }
}
