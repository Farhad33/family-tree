import React, { Component } from 'react';


class Property extends Component {
	constructor(props){
		super(props);
		this.state = {
			key: '',
			value: ''
		}
		this.handleInput = this.handleInput.bind(this);
		this.generateProperty = this.generateProperty.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	handleInput(e){
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSave(){
		this.props.saveProperty(this.state, this.props.index)
	}

	generateProperty() {
		const {key, value} = this.props.property;
		if (key === "" || value === "") {
			return (
				<div>
					<input
						type="input"
						name="key"
						value={this.state.key}
						onChange={this.handleInput}
					/>
					<span> : </span>
					<input
						type="input"
						name="value"
						value={this.state.value}
						onChange={this.handleInput}
					/>
					<button
						type="button"
						onClick={this.handleSave}>
						Save
					</button>
				</div>
			)
		} else {
			return (
				<div>
					<span>{key}</span>
					<span> : </span>
					<span>{value}</span>
				</div>
			)
		}
	}

	render(){
		return (
			<div>
				{this.generateProperty()}
			</div>
		);
	}
}


export default Property;
