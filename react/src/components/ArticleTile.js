import React from 'react';
import { Link } from 'react-router';

const ArticleTile = (props) => {
  return(
    <div className="article-tile">
      <h3><Link to={`/articles/${props.id}`}> {props.title} </Link></h3>
      <hr/>
    </div>
  )
}

export default ArticleTile;
