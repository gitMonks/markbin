import React from 'react';

import Header from './header';
import BinsList from './bins/bins_list';

export default () => {
	return (
		<div className="container">
			<Header /> 
			<BinsList />
		</div>
	)
}