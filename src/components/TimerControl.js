import React from 'react';
import './styles/timerControl.css';
import PropTypes from 'prop-types';

function TimerControl(props) {
	const startBtnFlag = props.startFlag ? true : props.isPaused ;

	return (
		<>
			<h3 className='timer-panel-control'>{'Now is'}<span>{ props.currentPeriod % 2 ? 'FOCUS' : 'BREAK'}</span>{'time'}</h3>
			<div className='timer-panel-control-buttons'>
				<button className='control-panel-btn' onClick={ (evt)=>{return props.onChangePeriod(evt, true)} }> 
				<span role='img' aria-label='previous'>&#11013;</span></button>
				{ startBtnFlag  ? 
					(<button className='control-panel-btn' onClick={props.onStartHandler}> <span role='img' aria-label='play'>&#9654;</span></button>) :	
					(<button className='control-panel-btn' onClick={props.onStopHandler}>	<span role='img' aria-label='pause'>&#8214;</span></button>) }
				<button className='control-panel-btn' onClick={props.onResetHandler}> <span role='img' aria-label='reset'>&#10060;</span></button>
				<button className='control-panel-btn' onClick={ (evt)=>{return props.onChangePeriod(evt, false)} }> 
				<span role='img' aria-label='next'>&#10145;</span></button>			
			</div>
		</>
		)
}

TimerControl.propTypes = {
	currentPeriod : PropTypes.number.isRequired,
	isPaused : PropTypes.bool.isRequired,
	startFlag : PropTypes.bool.isRequired,
	onStartHandler : PropTypes.func.isRequired,
	onStopHandler : PropTypes.func.isRequired,
	onResetHandler : PropTypes.func.isRequired,
	onChangePeriod : PropTypes.func.isRequired
}

export {TimerControl}