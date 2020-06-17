import React from 'react';
import FeedForm from './FeedForm';
import UserProfile from './UserProfile';
import Pack from './Pack';
import UserLoggedOut from './UserLoggedOut';
import Announcements from './Announcements';
import { getArticles, postArticle, deleteArticleCall, verifyUser } from '../services/Api-helper';

class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      showYourPosts: true,
      showAllPosts: false,
      pack: false,
      form: true,
      announcements: true
    }
  }

  readAllArticles = async () => {
    const articles = await getArticles();
    this.setState({ articles });
  }

  createArticle = async (articleData) => {
    const newArticle = await postArticle(articleData);
    this.setState({
      todos: [...this.state.articles, newArticle]
    })
    this.readAllArticles();
  }

  deleteArticle = async (e, articleId) => {
    e.preventDefault();
    await deleteArticleCall(articleId);
    this.readAllArticles();
  }

  componentDidMount() {
    verifyUser();
    this.readAllArticles();
  }

  render() {
    return (
      <div className="App">
        {this.props.currentUser ?
          <div className="user-loggedin">
            <UserProfile handleLogout={this.props.handleLogout} />

            <div className="user-feed">

              <nav>
                <button onClick={e => this.setState({ pack: false, form: true, announcements: true, showYourPosts: true, showAllPosts: false })}>Your Posts</button>
                <button onClick={e => this.setState({ pack: false, form: true, announcements: true, showYourPosts: false, showAllPosts: true })}>All Posts</button>
                <button onClick={e => this.setState({ pack: true, form: false, announcements: false, showYourPosts: false, showAllPosts: false })}>Pack</button>
                <button onClick={e => this.setState({ pack: false, form: false, announcements: true, showYourPosts: false, showAllPosts: false })}>Global</button>
              </nav>

              <main>
                {this.state.form && <FeedForm createArticle={this.createArticle} />}
                {this.state.pack && <Pack />}

                {this.state.showYourPosts &&
                  <div className="articles-wrapper">
                    <h3>Your posts</h3>
                    <div className="articles-container">
                      {this.state.articles && this.state.articles.map(article => (
                        <div key={article.id} className="single-article">
                          <p>{article.title}</p>
                          <div className="single-article-bottom">
                            <button className="delete"
                              onClick={e => this.deleteArticle(e, article.id)}>Delete
                        </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                }
              </main>

              {this.state.announcements && <Announcements />}

            </div>

          </div>

          :

          <UserLoggedOut handleLogin={this.props.handleLogin} />
        }
      </div>
    )
  }
}

export default UserPage;

