import { googleLogout } from '@react-oauth/google';
import '../input.css';

const AvatarButton = (props) => {

  return (
		<div className="dropdown dropdown-end">
			<label tabIndex="0" className="btn btn-ghost btn-circle avatar">
				<div className="w-10 rounded-full">
					{props.user == null ?
						<img src="https://placeimg.com/80/80/people" alt=""/>
						:
						<img src={props.user.picture} alt=""/>
					}
				</div>
			</label>
			<ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-neutral rounded-box w-52">
				<li><a href="https://calendar.google.com/calendar/u/0/r" target="_blank" rel="noreferrer">Google Calendar</a></li>
				<li><a href="/" onClick={() => {googleLogout();}}>Sign out</a></li>
			</ul>
		</div>
  );
}

export default AvatarButton;