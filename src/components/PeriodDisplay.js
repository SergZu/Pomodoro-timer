import React from 'react';
import './styles/periodDisplay.css';
import PropTypes from 'prop-types';

const Point = function(props) {
	const classList = props.isActive ? 'point-active' : 'point';
	return (
		<div className={classList} />
		)
}

const displayMarkup = function(currentPeriod, totalPeriods) {
		let result = [];
		for (let n = 1; n <= totalPeriods; n++) {
			const statement = (n === currentPeriod);
			const element = (
				<li key={n.toString()}><Point isActive={statement} /></li>
				);
			result.push(element);
		}
		return result
	}


const PeriodDisplay = function(props){
	return (
	<ul className='periodDisplay-box'>
		{displayMarkup(props.currentPeriod, props.maxPeriods)}
	</ul>
	)
}


PeriodDisplay.propTypes = {
	currentPeriod : PropTypes.number.isRequired,
	maxPeriods : PropTypes.number.isRequired
}


export { PeriodDisplay }