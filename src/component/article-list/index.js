import React, { Component } from 'react';
import Article from '../article/';

export default class ArticleList extends Component {
  render() {
    const articles = [];
    for (let i = 0; i < 6; i++) {
      articles.push(<Article id={i} key={i} />);;
    }
    return (
      <div className="main">
        {articles}
      </div>
    );
  }
}
