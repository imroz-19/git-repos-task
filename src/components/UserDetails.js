import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = (props) => {
  const { id } = useParams();
  const filteredUser = props.userList.find(user => user.id.toString() === id);


  return (
    <div class="container">
    <div class="header">
      <img src="https://avatars.githubusercontent.com/u/1406546?v=4" alt="Owner Avatar" />
      <div>
        <h1>{filteredUser.name}</h1>
        <p><strong>Repository ID:</strong> {filteredUser.id}</p>
      </div>
    </div>
    <div class="description">
      <p>{filteredUser.description}</p>
    </div>
    <div class="meta">
      <span>Language: {filteredUser.language}</span>
      <span>License: {filteredUser.license.name}</span>
      <span>Visibility: {filteredUser.visibility}</span>
      <span>Archived: Yes</span>
      <span>Default Branch: {filteredUser.default_branch}</span>
    </div>
    <div class="stats">
      <div class="stat">
        <h3>{filteredUser.stargazers_count}</h3>
        <p>Stars</p>
      </div>
      <div class="stat">
        <h3>{filteredUser.forks_count}</h3>
        <p>Forks</p>
      </div>
      <div class="stat">
        <h3>{filteredUser.open_issues_count}</h3>
        <p>Open Issues</p>
      </div>
      <div class="stat">
        <h3>{filteredUser.watchers_count}</h3>
        <p>Watchers</p>
      </div>
    </div>
    <div class="footer">
      <p>
        View on GitHub: 
        <a href={filteredUser.clone_url} target="_blank">{filteredUser.clone_url}</a>
      </p>
    </div>
  </div>
  )
};

export default React.memo(UserDetails);