import React, { Component } from 'react';
import styled from 'styled-components';
import Person from '../data-struct/person';
import Member from './Member';

let headParent = new Person();
headParent.properties.push({ key:'name', value:'Sara'});
headParent.properties.push({ key:'gender', value:'Female'});
let child = new Person();
child.properties.push({ key:'name', value:'Jack'});
child.properties.push({ key:'age', value:'7'});
headParent.children.push(child);
child.parent = headParent;


class Family extends Component {
	constructor() {
		super();
		this.state = { headParent };
		this.generateAllChild = this.generateAllChild.bind(this);
		this.refresh = this.refresh.bind(this);
	}

	generateAllChild(root) {
		if (root === null)
			return '';
		let allChild = [];
		let stack = [root];
		while(stack.length !== 0) {
			let node = stack.pop();
			let index = Math.random() * 1000000;
			allChild.push(
				<Member
					key={index}
					node={node}
					refresh={this.refresh}
				/>)
			node.children.forEach(child => {
				child.margin = child.parent.margin + 2;
				stack.push(child)
			})
		}
		return allChild;
	}

	refresh() {
		this.setState({  });
	}

	render() {
		const allChild = this.generateAllChild(this.state.headParent);
		return (
			<Parent>
				{ allChild }
			</Parent>
		);
	}
}

const Parent = styled.div`
	margin: 1em auto;
	width: 800px;
`;

export default Family;
