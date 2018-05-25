import React, { Component } from 'react';
import ArticleList from '../article-list/';

export default class App extends Component {
  render() {
    return (
      <main>
        <div className="main">
          <ArticleList />
        </div>
      </main>
    );
  }
}

