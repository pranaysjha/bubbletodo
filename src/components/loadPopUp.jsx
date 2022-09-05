import { useGoogleLogin } from '@react-oauth/google';
import { gapiLoad, onSucessCallback } from '../modules/google';
import { fetchUserProfile } from '../modules/tasks';
import { useEffect } from 'react';
import '../input.css';

const SCOPE = 'https://www.googleapis.com/auth/tasks';

const LoadPopUp = () => {

  useEffect(() => {
    gapiLoad();
  }, [])

  const auth = useGoogleLogin({
		onSuccess: tokenResponse => {
      onSucessCallback(tokenResponse);
      fetchUserProfile();
      document.getElementById("loadPopUp").style.display = "none";
    },
		onError: err => console.log(err),
		scope: SCOPE
	});

  return (
    <div className="card w-80 bg-neutral card-bordered border-gray-700 shadow-xl" id='loadPopUp'>
      <div className="card-body text-center">
        <div className="text-3xl">Logo</div>
        <div className="text-sm px-8">A beautiful, interactive visualizer for Google Tasks.</div>
        <div className="card-actions flex-col items-center pt-2">
          <button className="btn btn-outline" onClick={() => auth()}>Sign In</button>
        </div>
      </div>
    </div>
  );

}

export default LoadPopUp;