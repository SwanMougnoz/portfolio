import React, {Component} from 'react';

export default class PostList extends Component {

  createPostItem(post) {
    return (
      <div key={post.id}>
        lol
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.posts.map(this.createPostItem)}
      </div>
    )
  }
}