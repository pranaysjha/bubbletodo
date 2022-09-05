import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BubbleArena from "./components/BubbleArena";
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {

  const CLIENT_ID = '145385750304-g53v1ihlt48gu2h7p0nvam0lfqrj1aog.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="App"> 
        <NavBar />
        <BubbleArena />
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
