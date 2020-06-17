import React, { Component } from 'react'

export default class FeedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {

    return (
      <div className="feed-form">

        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.createArticle(this.state);
          this.setState({ title: "" });
        }}>

          <label htmlFor="create new post">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#5B35A0"><path d="M13.473 7.196c-.425-.439-.401-1.127.035-1.552l4.461-4.326c.218-.211.498-.318.775-.318.282 0 .563.11.776.331l-6.047 5.865zm-7.334 11.021c-.092.089-.139.208-.139.327 0 .25.204.456.456.456.114 0 .229-.042.317-.128l.749-.729-.633-.654-.75.728zm6.33-8.425l-2.564 2.485c-1.378 1.336-2.081 2.63-2.73 4.437l1.132 1.169c1.825-.593 3.14-1.255 4.518-2.591l2.563-2.486-2.919-3.014zm7.477-7.659l-6.604 6.405 3.326 3.434 6.604-6.403c.485-.469.728-1.093.728-1.718 0-2.088-2.53-3.196-4.054-1.718zm-1.946 11.333v7.534h-16v-12h8.013l2.058-2h-12.071v16h20v-11.473l-2 1.939z" /></svg>
            <p>Create New Post</p>
          </label>

          <textarea
            rows="3"
            placeholder="What do you want to share?"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          ></textarea>

          <div className="feed-form-bottom">
            <button>Post</button>
          </div>

        </form>

      </div>
    )
  }
}
