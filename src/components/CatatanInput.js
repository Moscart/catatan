import React from "react";

class CatatanInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			body: "",
			search: 50,
		};

		this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
		this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
	}

	onTitleChangeEventHandler(event) {
		let title = event.target.value;
		if (title.length <= 50) {
			this.setState(() => {
				return {
					title: event.target.value,
					search: 50 - title.length,
				};
			});
		}
	}

	onBodyChangeEventHandler(event) {
		this.setState(() => {
			return {
				body: event.target.value,
			};
		});
	}

	onSubmitEventHandler(event) {
		event.preventDefault();
		this.props.addCatatan(this.state);
	}

	render() {
		return (
			<div>
				<div className="title">Buat Catatan</div>
				<div className="character">Sisa karakter: {this.state.search}</div>
				<form action="" id="form" onSubmit={this.onSubmitEventHandler}>
					<input
						type="text"
						required
						placeholder="Judul Catatan..."
						autoFocus
						value={this.state.title}
						onChange={this.onTitleChangeEventHandler}
					/>
					<textarea
						placeholder="Isi Catatan..."
						value={this.state.body}
						onChange={this.onBodyChangeEventHandler}
						required
					></textarea>
					<button id="submit">Buat</button>
				</form>
			</div>
		);
	}
}

export default CatatanInput;
