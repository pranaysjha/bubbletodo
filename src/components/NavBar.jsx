import '../input.css';
import AvatarButton from "./AvatarButton";

const NavBar = () => {
	return (
		<div id="navbar" className="navbar absolute">
			<div className="flex-1">
				<a href="." className="btn btn-ghost normal-case text-3xl">Logo</a>
			</div>
			<div className="flex-none gap-4">
				<AvatarButton />
			</div>
		</div>
	);
}

export default NavBar;