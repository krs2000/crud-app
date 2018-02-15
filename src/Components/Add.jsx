import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { add_user } from "../actions";

class Add extends Component {

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
		let newId = this.props.users[this.props.users.length - 1].id;
		newId = newId + 1;
		this.setState({ id: newId }, ()=>
			this.props.add_user(this.state, this.props.users)
		);

		alert("User Added");
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
						<h2> Add new User</h2>
						<form>
							<div className="form-group ">
								<label htmlFor="inputName">Name</label>
								<input
									type="text"
									className="form-control"
									id="inputName"
									onChange={this.handleName}
									aria-describedby="emailHelp"
									placeholder="Enter email"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="inputUsername">Username</label>
								<input
									type="text"
									className="form-control"
									id="inputUsername"
									onChange={this.handleUsername}
									placeholder="Enter Username"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="inputEmail">Email</label>
								<input
									type="email"
									className="form-control"
									id="inputEmail"
									onChange={this.handleEmail}
									placeholder="Enter Email"
								/>
							</div>
							<button
								type="button"
								className="btn btn-primary text-center"
								onClick={this.handleSubmit}
							>
								Confirm new User
							</button>
						</form>
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

export default connect(mapStateToProps,  { add_user } )(Add);
