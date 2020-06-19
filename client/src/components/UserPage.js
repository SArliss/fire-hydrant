import React from 'react';
import FeedForm from './FeedForm';
import UserProfile from './UserProfile';
import Pack from './Pack';
import UserLoggedOut from './UserLoggedOut';
import Announcements from './Announcements';
import { getPersonalArticles, getAllArticles, getUsers, postArticle, deleteArticleCall, verifyUser } from '../services/Api-helper';

class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {
      personalArticles: [],
      allArticles: [],
      users: [],
      showPersonalArticles: false,
      showAllArticles: true,
      pack: false,
      form: true,
      announcements: true
    }
  }

  readPersonalArticles = async () => {
    const personalArticles = await getPersonalArticles();
    this.setState({ personalArticles });
  }

  readAllArticles = async () => {
    const allArticles = await getAllArticles();
    this.setState({ allArticles });
  }

  readUsers = async () => {
    const users = await getUsers();
    this.setState({
      users
    })
  }

  createArticle = async (articleData) => {
    const newArticle = await postArticle(articleData);
    this.setState({
      personalArticles: [...this.state.personalArticles, newArticle],
      allArticles: [...this.state.allArticles, newArticle]
    })
  }

  deleteArticle = async (e, articleId) => {
    e.preventDefault();
    await deleteArticleCall(articleId);
    this.readPersonalArticles();
    this.readAllArticles();
  }

  componentDidMount() {
    verifyUser();
    this.readPersonalArticles();
    this.readAllArticles();
    this.readUsers();
  }

  render() {
    const dateStyle = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    };

    return (
      <div className="App">
        {this.props.currentUser ?
          <div className="user-loggedin">
            <UserProfile handleLogout={this.props.handleLogout} />

            <div className="user-feed">

              <nav>
                <button onClick={e => (this.setState({ pack: false, form: true, announcements: true, showPersonalArticles: true, showAllArticles: false }), window.scrollTo(0, 0))}>Your Posts</button>
                <button onClick={e => (this.setState({ pack: false, form: true, announcements: true, showPersonalArticles: false, showAllArticles: true }), window.scrollTo(0, 0))}>All Posts</button>
                <button onClick={e => (this.setState({ pack: true, form: false, announcements: false, showPersonalArticles: false, showAllArticles: false }), window.scrollTo(0, 0))}>Pack</button>
                <button onClick={e => (this.setState({ pack: false, form: false, announcements: true, showPersonalArticles: false, showAllArticles: false }), window.scrollTo(0, 0))}>Global</button>
              </nav>

              <main>
                {this.state.form && <FeedForm createArticle={this.createArticle} />}
                {this.state.pack && <Pack />}

                {this.state.showPersonalArticles &&
                  <div className="articles-wrapper">
                    <div className="articles-container">
                      {this.state.personalArticles && this.state.personalArticles.map(article => (
                        <div key={article.id} className="single-article">

                          <div>
                            {this.state.users.filter(user => user.id === parseInt(article.created_by)).map(filteredUser => (
                              <div key={filteredUser.id} className="single-article-content">
                                <div><img src={filteredUser.first_img} alt="article writter"></img></div>
                                <section>
                                  <h3>{filteredUser.name}</h3>
                                  <h4>{filteredUser.position}</h4>
                                  <h5>{filteredUser.location}</h5>
                                  <p>{new Date(article.created_at).toLocaleDateString("en-US", dateStyle)}</p>
                                  <p>{article.title}</p>
                                </section>
                              </div>
                            ))}
                          </div>

                          <div className="single-article-bottom">
                            <button className="delete" onClick={e => this.deleteArticle(e, article.id)}>Delete</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                }

                {this.state.showAllArticles &&
                  <div className="articles-wrapper">
                    <div className="articles-container">
                      {this.state.allArticles && this.state.allArticles.map(article => (
                        <div key={article.id} className="single-article">

                          <div>
                            {this.state.users.filter(user => user.id === parseInt(article.created_by)).map(filteredUser => (
                              <div key={filteredUser.id} className="single-article-content">
                                <div><img src={filteredUser.first_img} alt="article writter"></img></div>
                                <section>
                                  <h3>{filteredUser.name}</h3>
                                  <h4>{filteredUser.position}</h4>
                                  <h5>{filteredUser.location}</h5>
                                  <p>{new Date(article.created_at).toLocaleDateString("en-US", dateStyle)}</p>
                                  <p>{article.title}</p>
                                </section>
                              </div>
                            ))}
                          </div>

                          <div className="single-article-bottom">
                            {parseInt(article.created_by) === this.props.currentUser.id &&
                              <button className="delete" onClick={e => this.deleteArticle(e, article.id)}>Delete</button>
                            }
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

