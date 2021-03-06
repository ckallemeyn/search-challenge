import React from 'react';
import mockProfiles from '../profiles.json';

export const ProfileContext = React.createContext({
  profiles: [],
  dummyProfiles: [],
});

function ProfilesReducer(state, action) {
  let profiles;

  switch (action.type) {
    case 'ascending':
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.handle > profileB.handle ? 1 : -1));
      return { profiles };

    case 'descending':
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.handle < profileB.handle ? 1 : -1));
      return { profiles };

    default:
      throw new Error();
  }
}

function ProfilesContextProvider({ children, dummyProfiles = [] }) {
  const [state, dispatch] = React.useReducer(ProfilesReducer, {
    profiles: mockProfiles,
    dummyProfiles,
  });

  return (
    <ProfileContext.Provider value={{ ...state, dispatch }}>{children}</ProfileContext.Provider>
  );
}

export default ProfilesContextProvider;
