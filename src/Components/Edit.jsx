import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { edit_user } from "../actions";

class Edit extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			username: "",
			email: ""
		};
}

	returnUser = property => {
		const user = this.props.users.find(
			x => x.id === parseFloat(this.props.match.params.userId)
		);
		return user[property];
	};

	handleName = e => {
		this.setState({ name: e.target.value });
	};

	handleUsername = e => {
		this.setState({ username: e.target.value });
	};

	handleEmail = e => {
		this.setState({ email: e.target.value });
	};

	handleSubmit = () => {
		const users = this.props.users;
		// const user = users.find(
		// 		x => x.id === parseFloat(this.props.match.params.userId)
		// 	)
		if (this.state.name) {
			users.find(
				x => x.id === parseFloat(this.props.match.params.userId)
			).name = this.state.name;
		}
		if (this.state.username) {
			users.find(
				x => x.id === parseFloat(this.props.match.params.userId)
			).username = this.state.username;
		}
		if (this.state.email) {
			users.find(
				x => x.id === parseFloat(this.props.match.params.userId)
			).email = this.state.email;
		}
		// console.log(user)
		this.props.dispatch(edit_user(users));
			alert("User Edited");
	};

	returnForm = () => {
		return (
			<form>
				<div className="form-group ">
					<label htmlFor="exampleInputEmail1">Name</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						onChange={this.handleName}
						aria-describedby="emailHelp"
						placeholder="Enter email"
						defaultValue={this.returnUser("name")}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Username</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputPassword1"
						onChange={this.handleUsername}
						defaultValue={this.returnUser("username")}
						placeholder="Password"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword3">Email</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputPassword3"
						onChange={this.handleEmail}
						defaultValue={this.returnUser("email")}
						placeholder="Password"
					/>
				</div>
				<button
					type="button"
					className="btn btn-primary text-center"
					onClick={this.handleSubmit}
				>
					Submit Edition
				</button>
			</form>
		);
	};
	render() {
		return (
			<div className="Container ">
				<Link to={"/"}>
					<button className="btn btn-success m-5">
						Return To List
					</button>
				</Link>
				<div className="row text-center">
					<div className="col-md-6 offset-md-3">
						<h2>Edit User</h2>
						{this.props.users && this.returnForm()}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.userList.users
	};
}

export default connect(mapStateToProps, null)(Edit);
