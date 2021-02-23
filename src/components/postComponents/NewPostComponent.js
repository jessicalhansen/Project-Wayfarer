import React from "react";

class NewPost extends React.Component {
  state = {
    post: {
      userId: '0',
      cityId: '0',
      title: "",
      body: "",
    }
  };

  handleNewPost = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmitPost = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/api/v1/posts", 
    { method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then((result) => result.json())
      .then((jsonData) => {
        console.log(jsonData);
        this.setState({
         post: {
          userId: '',
          cityId: '',
          title: "",
          body: "",
          }
        })
      }).catch((err) => {
          console.log(err);
        });
  }

  render() {
    return (
      <div className="row">
        <div className="col-6 offset-3">
          <h1>New Post</h1>
          <div>
            <form onSubmit={this.handleSubmitPost}>
              <div>
                {/* This is where the dropdown goes for cities */}
              </div>
              <div>
                <label className="form-label" htmlFor="title">
                  Title
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleNewPost}
                />
              </div>
              <br/>
              <div>
                <label className="form-label" htmlFor="body">
                  Body
                </label>
                <input
                  className="form-control"
                  type="text-area"
                  id="body"
                  name="body"
                  value={this.state.body}
                  onChange={this.handleNewPost}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primary block">Add Post</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPost;
