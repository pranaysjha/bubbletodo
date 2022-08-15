import '../input.css';
import AddBubbleButton from "./AddBubbleButton";
import AvatarButton from "./AvatarButton";

const NavBar = () => {
	return (
		<div className="navbar">
			<div className="flex-1">
				<a href="." className="btn btn-ghost normal-case text-3xl">Logo</a>
			</div>
			<div className="flex-none gap-4">
				<AddBubbleButton />
				<AvatarButton />
			</div>
		</div>
	);
}

export default NavBar;