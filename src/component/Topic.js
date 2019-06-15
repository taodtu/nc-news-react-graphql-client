import React from 'react';

const Topic = ({ topics, errors }) => {
  if (errors) {
    return (
      <p>
        <strong>Something went wrong:</strong>
        {errors.map(error => error.message).join(' ')}
      </p>
    );
  };
  return (
    <div >
      <h3>Topics</h3>
      <div className="topic">
        <span style={{ width: '10%' }}>Slug </span>
        <span style={{ width: '50%' }}>Description </span>
        <span style={{ width: '20%' }}>Article count </span>
        <span style={{ width: '20%' }}>Comment count </span>
      </div>
      {topics.map(topic =>
        <div key={topic.slug} className="topic">
          <span style={{ width: '10%' }}>{topic.slug} </span>
          <span style={{ width: '50%' }}>{topic.description} </span>
          <span style={{ width: '20%' }}>{topic.article_count} </span>
          <span style={{ width: '20%' }}>{topic.comment_count} </span>
        </div>)}
    </div>)
}
export default Topic;