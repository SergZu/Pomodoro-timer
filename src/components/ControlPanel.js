import React from 'react';
import './styles/controlPanel.css';
import { TimerControl } from './TimerControl';
import { TimerPreferences } from './TimerPreferences';
import PropTypes from 'prop-types';

function ControlPanel(props) {
		return (
			<div className='timer-panel' >
				<TimerControl currentPeriod={props.currentPeriod} onStartHandler={props.onStartHandler} isPaused={props.isPaused}
				onStopHandler={props.onStopHandler} onResetHandler={props.onResetHandler} startFlag={props.startFlag} 
				onChangePeriod={props.onChangePeriod} />
				<TimerPreferences onChangePeriodTime={props.onChangePeriodTime} sessionTime={props.sessionTime}  
				breakTime={props.breakTime} onChangePeriodNumber={props.onChangePeriodNumber} maxPeriods={props.maxPeriods} 
				onStartHandler={props.onStartHandler} onStopHandler={props.onStopHandler} />
			</div>
			)
		}

ControlPanel.propTypes = {
	currentPeriod : PropTypes.number.isRequired,
	maxPeriods : PropTypes.number.isRequired,
	sessionTime : PropTypes.number.isRequired,
	breakTime : PropTypes.number.isRequired,
	isPaused : PropTypes.bool.isRequired,
	startFlag : PropTypes.bool.isRequired,
	onStartHandler : PropTypes.func.isRequired,
	onStopHandler : PropTypes.func.isRequired,
	onResetHandler : PropTypes.func.isRequired,
	onChangePeriod : PropTypes.func.isRequired,
	onChangePeriodTime : PropTypes.func.isRequired,
	onChangePeriodNumber : PropTypes.func.isRequired,
}

export {ControlPanel}