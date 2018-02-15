import React, { Component } from "react";
import { Link } from "react-router-dom";
import { delete_user, set_users } from "../actions";
import { connect } from "react-redux";

class Home extends Component {

	componentWillMount(){
		console.log(this.props)
		if(this.props.users.length === 0){
		this.props.set_users()
	}
	}

	handleDelete = id => {
		this.props.delete_user(id, this.props.users);
	};

	returnTable = () => {
		return (
			<table className="table ">
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Username</th>
						<th>Email</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{this.props.users &&
						this.props.users.map(item => {
							return (
								<tr key={`user-${item.id}`}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.username}</td>
									<td>{item.email}</td>
									<td>
										<Link to={`/edit/${item.id}`}>
											<button className="btn btn-success m-1">
												Edit
											</button>
										</Link>
										<button
											className="btn btn-danger m-1"
											onClick={() =>
												this.handleDelete(item.id)
											}
										>
											Delete
										</button>{" "}
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		);
	};

	render() {
		return (
			<div>
				<div className="container">
					<div className="title-box text-center ">
						<h1>User List CRUD app with react.js</h1>
					</div>
					<Link to={`/newUser/`}>
						<button
							className="btn btn-info m-5"
							onClick={this.handleDelete}
						>
							Add User
						</button>
					</Link>
					<div className="row">
						<div className="col-12 table-responsive">
					
							{this.returnTable()}
						</div>
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
export default connect(mapStateToProps,  { delete_user , set_users })(Home);
