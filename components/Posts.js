import React from 'react';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { posts } = this.props;
    return (
      <ul>
        { posts.map(post=>
          <li key={post.id}>
            <a href={post.url} target="_blank">{post.title}</a><br/>
            by <i>{post.author}</i>
          </li>)}
      </ul>
    );
  }
}

Posts.propTypes = {
  posts: React.PropTypes.array.isRequired,
}
