import React from 'react';
import PropTypes from 'prop-types';
import './styles/display.css';
import { PeriodDisplay } from './PeriodDisplay';

class Display extends React.Component {
		render() {
			const { currentTime } = this.props;
			const minutes  = Math.floor(currentTime / 60);
			const seconds = currentTime - ( minutes * 60);
			return (
				<>
					<div className='display-block'>
						{`${minutes < 10 ? `0${minutes}` : minutes } : ${seconds < 10 ? `0${seconds}` : seconds}`}
					</div>
					<PeriodDisplay currentPeriod={this.props.currentPeriod} maxPeriods={this.props.maxPeriods} />
				</>
			)
		}
}

Display.propTypes = {
	currentTime : PropTypes.number.isRequired,
	currentPeriod : PropTypes.number.isRequired,
	maxPeriods : PropTypes.number.isRequired
}

export {Display}