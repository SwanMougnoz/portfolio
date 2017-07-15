import React, {Component} from 'react';

import PostList from './postList';

export default class PostListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {id: 1},
        {id: 2},
        {id: 3},
      ]
    };
  }

  render() {
    return (
      <PostList posts={this.state.posts}/>
    )
  }
}