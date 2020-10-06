import React from 'react';
import PropTypes from 'prop-types';
import './styles/display.css';
import { PeriodDisplay } from './PeriodDisplay';

class Display extends React.Component {
	getFormatedTime = (time) => {
		const minutes  = Math.floor(time / 60);
		const seconds = time - ( minutes * 60);
		return `${minutes < 10 ? `0${minutes}` : minutes } : ${seconds < 10 ? `0${seconds}` : seconds}`
	} 
	componentDidUpdate() {
		document.title = `${this.getFormatedTime(this.props.currentTime)} Pomodoro Timer App`;
	}
		render() {
			const { currentTime } = this.props;
			return (
				<>
					<div className='display-block'>
						{this.getFormatedTime(currentTime)}
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

