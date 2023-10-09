import React from 'react';
import './App.css';
import IndividualProfilePage from './components/IndividualProfilePage';
import individualPictures from './components/shaggyInformation/individualPictures';
import profileDetails from './components/shaggyInformation/individualProfileDetails';

function App() {
  const user = {
    name: 'Shaggy',
    age: 25,
    individualPictures: individualPictures,
    about: profileDetails.about,
    job: profileDetails.job,
    company: profileDetails.company,
    education: profileDetails.education,
  };

  return (
    <div className="App">
      <IndividualProfilePage user={user} />
    </div>
  );
}

export default App;
