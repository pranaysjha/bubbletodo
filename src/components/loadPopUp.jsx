import { useGoogleLogin } from '@react-oauth/google';
import { gapiInit, onSucessCallback } from '../modules/google';
import { useEffect } from 'react';
import '../input.css';

const SCOPE = 'https://www.googleapis.com/auth/tasks';

/* global gapi */
const LoadPopUp = () => {

  useEffect(() => {
    gapi.load('client:auth2', gapiInit)
  }, [])

  const login = () => {
    auth();
    //TODO: async await the successcallback so we can call the success bool method in google.js instead of hiding the elem in the onSuccessCallback method directly
  }

  const auth = useGoogleLogin({
		onSuccess: tokenResponse => onSucessCallback(tokenResponse),
		onError: err => console.log(err),
		scope: SCOPE
	});

  return (
    <div className="card w-80 bg-neutral card-bordered border-gray-700 shadow-xl" id='loginPopup'>
      <div className="card-body text-center">
        <div className="text-3xl">Logo</div>
        <div className="text-sm px-8">A beautiful, interactive visualizer for Google Tasks.</div>
        <div className="card-actions flex-col items-center pt-2">
          <button className="btn btn-outline" onClick={() => login()}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default LoadPopUp;