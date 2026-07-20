import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const postList = data.map(
          (item) => new Post(item.userId, item.id, item.title, item.body),
        );

        this.setState({
          posts: postList,
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("Error: " + error.message);
    console.error(info);
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Blog Posts</h1>

        {this.state.posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid gray",
              marginBottom: "15px",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
