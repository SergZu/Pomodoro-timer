import React from 'react';
import './styles/timerPreferences.css';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

function PreferenceBlock(props) {
	return (
		<div className='timer-preference-block'>
			<button onClick={props.handler[0]} className='timer-preference-block-btn'>{'-'}</button>
			<span className='timer-preference-block-display'>{props.value}</span>
			<button onClick={props.handler[1]} className='timer-preference-block-btn'>{'+'}</button>
		</div>)
}

class TimerPreferences extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen : false
		};
	}

	changeSession = (value) => {
			return ((evt) => {return this.props.onChangePeriodTime(evt, ['sessionTime', Number(value)])})
		}

	changeBreak  = (value) => {
			return ((evt) => {return this.props.onChangePeriodTime(evt, ['breakTime', Number(value)])})
		}	

	changePeriodCount = (value) => {
			return ((evt) => {return this.props.onChangePeriodNumber(evt, value)})
		}	

	onToggleHandler = () => {
		if (this.state.isOpen) {
			this.props.onStartHandler()
		}
		else {
			this.props.onStopHandler()
		};

		this.setState( (state) => {
			return { isOpen : !state.isOpen }
		}  );
	}

	onKeyPressed = (evt) => {
		if (evt.keyCode === 13) {
			this.onToggleHandler();
		}
	}

	render() {

		const formClass = this.state.isOpen ? 'timerSettings__form form-opened' : 'timerSettings__form';

		return (
			<div className="timerSettings" >
				<h3 className='timerSettings-toggle' onClick={this.onToggleHandler} tabIndex={0} onKeyDown={this.onKeyPressed}> Settings </h3>
				<CSSTransition 
				in={this.state.isOpen} timeout={250} classNames='SettingsBox' unmountOnExit>

				<div className={formClass} >
						<div className='timer-Settings-row'>
				<h4>Session time</h4>
				<PreferenceBlock 
					handler={[this.changeSession(-60), this.changeSession(60)]}
					value={Math.floor(this.props.sessionTime / 60)} />
			</div>
			<div className='timer-Settings-row'>
				<h4>Break time</h4>
				<PreferenceBlock 
					handler={[this.changeBreak(-60), this.changeBreak(60)]}
					value={Math.floor(this.props.breakTime / 60)} />
			</div>
			<div className='timer-Settings-row'>
				<h4>Number of periods</h4>
				<PreferenceBlock 
					handler={[this.changePeriodCount(-2), this.changePeriodCount(2)]}
					value={this.props.maxPeriods / 2} />
			</div>
				
				</div>

				</CSSTransition>
			</div>
		)
	}
	
}

TimerPreferences.propTypes = {
	maxPeriods : PropTypes.number.isRequired,
	sessionTime : PropTypes.number.isRequired,
	breakTime : PropTypes.number.isRequired,
	onStartHandler : PropTypes.func.isRequired,
	onStopHandler : PropTypes.func.isRequired,
	onChangePeriodTime : PropTypes.func.isRequired,
	onChangePeriodNumber : PropTypes.func.isRequired,
}

export { TimerPreferences }
