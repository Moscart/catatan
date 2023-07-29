import React from "react";

function Search({ onSearch }) {
	return (
		<input
			type="text"
			onChange={(event) => {
				onSearch(event.target.value);
			}}
			required
			placeholder="Search..."
		/>
	);
}

export default Search;
