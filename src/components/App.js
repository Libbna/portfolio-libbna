import React from 'react';
import Nav from './Nav';
import Data from "../constants/Data.json"
import PageContent from './Page/PageContent';

const App = () => {
  return (
    <div>
      <Nav Name={Data.Name} ProfilePic={Data.ProfilePic} />
      <PageContent Data={Data} />
    </div>
  );
}

export default App;
