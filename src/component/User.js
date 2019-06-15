import React from 'react';

const User = ({ user }) =>
 <div >
  <div className="user">
   <span style={{ width: '20%' }}>Username </span>
   <span style={{ width: '20%' }}>Name </span>
   <span style={{ width: '20%' }}>Avatar </span>
   <span style={{ width: '20%' }}>Article count </span>
   <span style={{ width: '20%' }}>Comment count </span>
  </div>
  <div className="user">
   <span style={{ width: '20%' }}>{user.username} </span>
   <span style={{ width: '20%' }}>{user.name} </span>
   <span style={{ width: '20%' }}>{user.avatar_url} </span>
   <span style={{ width: '20%' }}>{user.article_count} </span>
   <span style={{ width: '20%' }}>{user.comment_count} </span>
  </div>
 </div>
export default User;