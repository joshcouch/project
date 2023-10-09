import React from 'react';
import './IndividualProfilePage.css';

function IndividualProfilePage({ user }) {
  return (
    <div className="profile-page">
      <header className="profile-name">
        <h1>{user.name}, {user.age}</h1>
      </header>
      <section className="profile-picture">
        <img src={user.individualPictures[0]} alt={`${user.name}'s profile`} className="profile-picture" />
      </section>
      <section className="profile-info">
        <div className="profile-detail">
          <h2>About Me</h2>
          <p>{user.about}</p>
        </div>
      </section>
      <section className="profile-picture">
        <img src={user.individualPictures[1]} alt={`${user.name}'s profile`} className="profile-picture" />
      </section>
      <section className="profile-info">
        <div className="profile-detail">
          <h2>Job</h2>
          <p>{user.job}</p>
        </div>
      </section>
      <section className="profile-picture">
            <img src={user.individualPictures[2]} alt={`${user.name}'s profile`} className="profile-picture" />
      </section>
      <section className="profile-info">
        <div className="profile-detail">
          <h2>Company</h2>
          <p>{user.company}</p>
        </div>
      </section>
      <section className="profile-picture">
            <img src={user.individualPictures[3]} alt={`${user.name}'s profile`} className="profile-picture" />
      </section>
      <section className="profile-info">
        <div className="profile-detail">
          <h2>Education</h2>
          <p>{user.education}</p>
        </div>
      </section>
      <section className="profile-photos">
        <h2>Photos</h2>
        <div className="photos-grid">
          {user.individualPictures.slice(4).map((photo, index) => (
            <img key={index} src={photo} alt="" className="photo" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default IndividualProfilePage;
