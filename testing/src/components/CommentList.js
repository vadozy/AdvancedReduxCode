import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

  renderComments() {
    //console.log(typeof this.props.comments.comments);
    //return "test";
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>
    });
  }

  render () {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps)(CommentList);
