import React from 'react';
import Nav from './Nav';
import Data from "../constants/Data.json"

const App = () => {
  return (
    <div>
      <Nav Name={Data.Name} ProfilePic={Data.ProfilePic} />
    </div>
  );
}

export default App;
