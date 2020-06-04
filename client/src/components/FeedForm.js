import React, { Component } from 'react'

export default class FeedForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className="feed-form">

        <form >

          <label>Create New Post</label>
      
          <textarea rows="6" placeholder="What do you want to share?">
          </textarea>

          <div className="feed-form-bottom">
            <button>Post</button>
          </div>

        </form>

      </div>
    )
  }
}
