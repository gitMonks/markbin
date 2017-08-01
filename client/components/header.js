import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import Accounts from './accounts';

class Header extends Component {
	onBinClick(e) {
		e.preventDefault();

		Meteor.call('bins.insert');
	}
	render() {
		return (
			<nav className="nav navbar-default">
				<div className="navbar-header">
					<a href="" className="navbar-brand">Markbin</a>
				</div>
				<ul className="nav navbar-nav">
					<li>
						<Accounts />
					</li>
					<li>
						<a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Header;