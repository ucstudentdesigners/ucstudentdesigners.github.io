import React from "react";
import { Nav, NavLink, NavMenu }
	from "./ChaptersElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/intentions" activeStyle>
			Intentions
		</NavLink>
		<NavLink to="/startingpoint" activeStyle>
			Starting Point
		</NavLink>
		<NavLink to="/northstars" activeStyle>
			North Stars
		</NavLink>
		<NavLink to="/opportunities" activeStyle>
			Opportunities
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
