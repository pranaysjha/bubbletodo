import { useState } from 'react';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BubbleArena from "./components/BubbleArena";
import LoadPopUp from "./components/LoadPopUp";
import { GoogleOAuthProvider } from '@react-oauth/google';
import './input.css';

const App = () => {

  const CLIENT_ID = '145385750304-g53v1ihlt48gu2h7p0nvam0lfqrj1aog.apps.googleusercontent.com';

  const [user, setUser] = useState(null);

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="App">
        <NavBar user={user} />
        <div className="flex flex-col items-center justify-center w-screen h-screen absolute" id="popupContainer">
          <LoadPopUp setUser={setUser}/>
        </div>
        {user !== null &&
          <BubbleArena />
        }
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
