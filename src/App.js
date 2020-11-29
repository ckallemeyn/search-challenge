import React, { useState, useEffect } from 'react';
import SearchPage from './components/SearchPage';
import ProfilesContextProvider from './components/ProfilesContextProvider';
// import fetchJsonp from 'fetch-jsonp';
import './styles.css';

// headers: {
//   'Access-Control-Allow-Origin': 'http://localhost:3000',
//   'Access-Control-Allow-Methods': 'GET',
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
// },

function App() {
  const [dummyProfiles, setDummyProfiles] = useState([]);

  useEffect(() => {
    fetch(`https://dummyapi.io/data/api/user`, {
      headers: {
        'app-id': `${process.env.REACT_APP_API_KEY}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ data }) => {
        console.log('characters from dummyAPI', data);
        setDummyProfiles(data);
      })
      .catch((error) => console.error('unable to fetch characters', error));
  }, []);

  return (
    <React.Fragment>
      {dummyProfiles.length > 0 ? (
        <ProfilesContextProvider dummyProfiles={dummyProfiles}>
          <SearchPage />
        </ProfilesContextProvider>
      ) : null}
    </React.Fragment>
  );
}

export default App;
