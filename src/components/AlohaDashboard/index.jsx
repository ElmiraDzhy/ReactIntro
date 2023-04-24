import React from "react";
import Aloha from "../Aloha";

class AlohaDashboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [
				{
					name: "John",
					age: 12,
					id: "Yb212312312",
				},
				{
					name: "Ann",
					age: 23,
					id: "Yb1341342323rewfe",
				},
				{
					name: "Kate",
					age: 15,
					id: "Ybefqr34234412321",
				},
				{
					name: "Tom",
					age: 19,
					id: "Ybefqewf23r32r2",
				},
				{
					name: "Vasy",
					age: 27,
					id: "Yb32432erer",
				},
				{
					name: "Lola",
					age: 30,
					id: "Yb21",
				},
				{
					name: "Poul",
					age: 17,
					id: "Yb6586",
				},
				{
					name: "George",
					age: 18,
					id: "Ybrfef",
				},
				{
					name: "Dominick",
					age: 43,
					id: "Yb22321",
				},
			],
		};
	}

	sortUsers = () => {
		const arr = [...this.state.users];
		arr.sort((a, b) => {
			return a.name < b.name ? -1 : 1;
		});

		this.setState({
			users: arr,
		});
	};

	deleteHandler = (id) => {
		const { users } = this.state;
		const filtered = users.filter((u) => u.id !== id);
		this.setState({
			users: filtered,
		});
	};

	render() {
		const { users } = this.state;

		return (
			<ul>
				<button onClick={this.sortUsers}>Sort Users</button>
				{users.map((u) => (
					<Aloha
						user={u}
						key={u.id}
						deleteCallback={this.deleteHandler}
					/>
				) ) }
				
			</ul>
		);
	}
}

export default AlohaDashboard;

