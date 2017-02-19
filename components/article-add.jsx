import React, {Component} from 'react';
import {Link} from 'react-router';


class AddArticle extends Component {
    render(){
        return (
            <form className="commentForm">
                <h2>Add article</h2>
                <div><input
                    type="text"
                    placeholder="Title"
                    className="searchFormInput"
                /></div>
                <textarea
                    type="text"
                    placeholder="Article"
                />
                <div className="sendButtonOut"><input type="submit" className="sendButton" value="Send" /></div>
            </form>
        );
    }
};

export default AddArticle;