import React from "react";
import Search from "./Search";

function Navigation({ onSearch }) {
	return (
		<nav>
			Catatan
			<Search onSearch={onSearch} />
		</nav>
	);
}

export default Navigation;
