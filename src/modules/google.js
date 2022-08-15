import { useGoogleLogin } from '@react-oauth/google';
import { useEffect } from 'react';

const API_KEY = 'AIzaSyDP5e13jE7MnCbJCQBCSAo-foFMxTqYGEM';
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest';
const SCOPE = 'https://www.googleapis.com/auth/tasks';

/* global gapi */

const Google = () => {

	const gapiInit = () => {
		gapi.client.init({
			apiKey: API_KEY,
		}).then(() => {
			gapi.client.load(DISCOVERY_DOC);
		});
	}

	const onSucessCallback = (tokenResponse) => {
		console.log(tokenResponse.access_token);
		console.log(gapi.client.getToken().access_token);
	}

	const auth = useGoogleLogin({
		onSuccess: tokenResponse => onSucessCallback(tokenResponse),
		onError: err => console.log(err),
		scope: SCOPE
	});

	useEffect(() => {
		gapi.load('client:auth2', gapiInit)
	})

  return (
	  <>
			<button onClick={() => auth()} className="">Sign in</button>
  	</>
  );
}

export default Google;