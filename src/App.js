import React from "react";
import Aloha from "./components/Aloha";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [
				{
					name: "John",
					age: 12,
				},
				{
					name: "Ann",
					age: 23,
				},
				{
					name: "Kate",
					age: 15,
				},
				{
					name: "Tom",
					age: 19,
				},
				{
					name: "Vasy",
					age: 27,
				},
				{
					name: "Lola",
					age: 30,
				},
				{
					name: "Poul",
					age: 17,
				},
				{
					name: "George",
					age: 18,
				},
				{
					name: "Dominick",
					age: 43,
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

	render() {
		const { users } = this.state;

		return (
			<>
				<button onClick={this.sortUsers}>Sort Users</button>
				{users.map((u) => (
					<Aloha name={u.name} />
				))}
			</>
		);
	}
}

export default App;

