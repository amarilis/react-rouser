import React, {Component} from 'react';
import moment from 'moment';

class Article extends Component{
    render(){
        var articleEdit;
        if ( this.props.userActive == this.props.userId ) {
            var editArticleHref = '/edit/' + this.props.articleId;
            articleEdit = <div>
                <a className="articleEdit" href={editArticleHref}>Edit atricle</a>
            </div>
        }
        var registeredData =  moment().format('LLLL');

        var fullName = ( this.props.name != undefined ) ? <span>{this.props.name.first}&nbsp;{this.props.name.last}</span> : '';
        return (
            <div className="article">

                <div className="articleUser">
                        <span className="articleUserLink">
                          {fullName}
                            <img src={this.props.picture} alt={this.props.email}/>
                        </span>
                    {articleEdit}
                </div>

                <div className="articleContent">
                    <h2 className="articleTitle">{this.props.title}</h2>
                    <div className="articleRegistered">{registeredData}</div>
                    <div className="articleText">{this.props.article}</div>

                </div>

            </div>
        );
    }
};

export default Article;