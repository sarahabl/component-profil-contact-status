// src/App.js
import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contact 
          name="Maelie Poussier" 
          profileImage="https://dam.malt.com/y3k3vf0dmtzinicbtmd4?gravity=face&func=face&face_margin=70&w=440&h=440&force_format=webp" 
          isOnline={true} 
        />
        <Contact 
          name="Manon Noblet" 
          profileImage="https://media.licdn.com/dms/image/C4D03AQETS2CM08jIrA/profile-displayphoto-shrink_400_400/0/1561455054907?e=2147483647&v=beta&t=wHj1sRshNC6d9wVoxe53TmspPiVDb4uQ7HjIGSru0R8" 
          isOnline={false} 
        />
        <Contact 
          name="Melvin Lemoine" 
          profileImage="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3KvgkE3rmmkwhekc_ev1dJepopWPBfFsQssXlT3Nqk7M8aQrC" 
          isOnline={true} 
        />
      </header>
    </div>
  );
}

export default App;