import React, { Component } from 'react';
import Property from './Property';
import Person from '../data-struct/person';
import styled from 'styled-components';

class Member extends Component {
	constructor(props){
		super(props);
		this.state = this.props.node;
		this.addProperty = this.addProperty.bind(this);
		this.addChild = this.addChild.bind(this);
		this.removeChild = this.removeChild.bind(this);
		this.saveProperty = this.saveProperty.bind(this);
	}

	addProperty() {
		const property = {key:'', value:''};
		let newProperties = this.state.properties;
		newProperties.push(property)
		this.setState({ properties: newProperties })
	}

	saveProperty(newProperty, index) {
		let newProperties = this.state.properties;
		newProperties[index] = newProperty
		this.setState({ properties: newProperties })
	}

	addChild() {
		const newChild = new Person();
		newChild.properties = [{key:'', value:''}];
		newChild.parent = this.state;
		this.state.children.push(newChild)
		this.props.refresh()
	}

	removeChild() {
		if (this.state.parent === null) return;
		let children = this.state.parent.children;
		for (var i = 0; i < children.length; i++) {
			if (children[i] === this.state) {
				children.splice(i, 1);
				break;
			}
		}
		this.props.refresh()
	}

	render() {
		const { properties } = this.state;
		const margin = this.state.margin + 'em';
		return (
			<Parent margin={margin}>
				{properties.map((prop, idx) => (
					<Property
						key={Math.random() * 10000000}
						property={prop}
						index={idx}
						saveProperty={this.saveProperty}
					/>
				))}
				<Button
					type="button"
					onClick={this.addProperty}>
					Add Property
				</Button>
				<Button
					type="button"
					onClick={this.addChild}>
					Add Child
				</Button>
				<Button
					type="button"
					onClick={this.removeChild}>
					Remove Child
				</Button>
			</Parent>
		);
	}
}


const Parent = styled.div`
	margin: 1em 0 1em ${props => props.margin};
	padding: 1em;
	border-radius: .5em;
	background: white;
`;
const Button = styled.button`
	margin: .3em;
	padding: .4em;
	border-radius: .5em;
	background: #efefef;
`;


export default Member;
