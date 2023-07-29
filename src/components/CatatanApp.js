import React from "react";
import Navigation from "./Navigation";
import CatatanInput from "./CatatanInput";
import CatatanList from "./CatatanList";
import { getInitialData, showFormattedDate } from "../utils/index";

class CatatanApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			catatans: getInitialData(),
			search: "",
		};

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onFormatDate = this.onFormatDate.bind(this);
		this.onArsipCatatan = this.onArsipCatatan.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.onAddCatatanHandler = this.onAddCatatanHandler.bind(this);
	}

	onDeleteHandler(id) {
		const catatans = this.state.catatans.filter((catatan) => catatan.id !== id);
		this.setState({ catatans });
	}

	onSearch(searchText) {
		this.setState(() => {
			return { search: searchText };
		});
	}

	onFormatDate(date) {
		return showFormattedDate(date);
	}

	onArsipCatatan(id) {
		const catatans = this.state.catatans.map((catatan) => {
			if (catatan.id === id) {
				catatan.archived = !catatan.archived;
			}
			return catatan;
		});
		this.setState({ catatans });
	}

	onAddCatatanHandler({ title, body }) {
		this.setState((prevState) => {
			return {
				catatans: [
					...prevState.catatans,
					{
						id: +new Date(),
						title,
						body,
						createdAt: new Date(),
						archived: false,
					},
				],
			};
		});
	}

	render() {
		return (
			<>
				<Navigation onSearch={this.onSearch} />
				<main>
					<CatatanInput addCatatan={this.onAddCatatanHandler} />
					<CatatanList
						catatans={this.state.catatans}
						onFormatDate={this.onFormatDate}
						onArsip={this.onArsipCatatan}
						searchText={this.state.search}
						onDelete={this.onDeleteHandler}
					/>
					<CatatanList
						catatans={this.state.catatans}
						onFormatDate={this.onFormatDate}
						onArsip={this.onArsipCatatan}
						searchText={this.state.search}
						onDelete={this.onDeleteHandler}
						isArsip={true}
					/>
				</main>
			</>
		);
	}
}

export default CatatanApp;
