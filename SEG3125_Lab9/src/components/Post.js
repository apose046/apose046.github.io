import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/profile');
  }
  render() {

    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <img src={this.props.post.picture} />
        <div className="center">
        </div>
      </div>
    ) : (
      <div className="center"></div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch({type: 'DELETE_POST', id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)