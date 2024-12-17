import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const UserList = (props) => {
  const { userList } = props;

  return (
    <div className='user-list-wrapper'>
      {/* {
        userList.map(user => (
          <div className='user-list-item' key={user.id}>
            <img src={user.owner.avatar_url} width={'200px'} height={'200px'} alt={`${user.name}-avatar`}/>
            <div>
              <strong className='text-style pd-6'>Name:</strong> {user.name}
            </div>
            <span>
              {
                user.description && (
                  <div className='text-style pd-6'>
                    <strong>Description:</strong> {user.description}
                  </div>
                )
              }
            </span>
            <Link to={`details/${user.id}`} className='link-style pd-6' >Click to go to details</Link>
          </div>
        ))
      } */}
      {
        userList.map((user, index) => (
          <div className="repo-container" key={index}>
            <div>
              <span className="repo-title">{user.name}</span>
              <span className="public-badge">{user.visibility}</span>
            </div>
            <div className="description">
              {user.description}
            </div>
            <Link to={`details/${user.id}`} className='link-style details-link' >Click to go to details</Link>
          </div>
        ))
      }
    </div>
  )
};

export default React.memo(UserList);