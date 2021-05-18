import React from 'react';
import { Display } from './components/Display';
import { ControlPanel } from './components/ControlPanel';
import { CircleScale } from './components/CircleScale';
import { beepCreator } from './components/audioComponent';
import { timeBorders, initData } from './appSettings';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...timeBorders,
      ...initData,
      timestamp : null
    }
  }


  componentWillUnmount = () => {
    if (this.state.timerId) clearInterval(this.state.timerId)
  }

  tick = () => {
    let value;
    if (this.state.timestamp) {  
      const currentTimestamp = Date.now();
      // Additional check if interval between calls is bigger than 1s
      const timeDiff = currentTimestamp - this.state.timestamp;
      value = (timeDiff > 1050) ? Math.round(timeDiff / 1000) : 1;
    }
    else value = 1;
    this.setState( (state) => {
      return {
        currentTime: state.currentTime - value,
        timestamp: Date.now()
      }
    } )
  }

  stopTimer = () => {
    clearInterval(this.state.timerId);
    this.setState({ 
      timerId : '',
      isPaused : true,
      timestamp : null
    })
  } 

  runTimer = (timer) => {
    this.setState({ 
      timerId : timer,
      isPaused : false
    })
  }

  reset = () => {
    if (!!this.state.timerId) clearInterval(this.state.timerId);
    this.setState({...initData, timestamp : null});
  }

  changePeriodTime = (periodName, value) => {
    const minTimeProp = `min${periodName[0].toUpperCase()}${periodName.slice(1)}`;
    const maxTimeProp = `max${periodName[0].toUpperCase()}${periodName.slice(1)}`;
    if ( ( (value < 0) && (this.state[periodName] === this.state[minTimeProp]) ) || 
      ( (value > 0) && (this.state[periodName] === this.state[maxTimeProp]) ) ){
        return null  
    };

    this.setState( (state) => {
      const newValue = state[periodName] + value;
      if (!!this.state.timerId) clearInterval(this.state.timerId);
      return {
        [periodName] : newValue,
        currentTime : periodName === 'sessionTime' ? newValue : state.sessionTime,
        timerId : '',
        isPaused : false,
        currentPeriod : 1,
        timestamp : null
      }
    } )

  }

  periodSwitch = (isReverse, timer, startAfter) => {    
    this.stopTimer();
    if (this.state.currentPeriod === this.state.maxPeriods) {
      if (startAfter) beepCreator();
      this.setState((state) => {
        return {currentPeriod : 1, currentTime : state.sessionTime, timestamp : null} 
      });
      return null;
    }
    if (isReverse && this.state.currentPeriod === 1) {
      return null;
    }
       
    const value = isReverse ? -1 : 1;
    if (startAfter) beepCreator();
      setTimeout( () => {
        this.setState( (state) => {
          const isOddPeriod = !!(state.currentPeriod % 2);
          return {
            currentPeriod : state.currentPeriod + value,
            currentTime : isOddPeriod ? state.breakTime : state.sessionTime,
            timestamp : null
          }
        } );
        if (startAfter) this.onStartHandler();
      }, timer);
  }

  changePeriodsMaxNumber = (value) => {
    const currentValue = this.state.maxPeriods + value;
    if (( currentValue > this.state.maxPeriodNumber ) || ( currentValue < this.state.minPeriodNumber ) ) return;
    if (!!this.state.timerId) clearInterval(this.state.timerId);
    this.setState( (state) => {
      return {  maxPeriods : currentValue,
                timerId : '',
                isPaused : false,
                currentPeriod : 1,
                currentTime : state.sessionTime,
                timestamp : null
              }
     });
  }

  // Event handlers

  onStartHandler = () => {
    if (!!this.state.timerId && !this.state.isPaused) return null;
    const timer = setInterval( () => {
      if (this.state.currentTime === 0) {
        clearInterval(timer);
        this.setState({ timerId : '' });
        this.periodSwitch(false, 4000, true);
      }
      else {
        this.tick()
      }
    }, 1000 )
    this.runTimer(timer);
  }

  onStopHandler = () => {
    if ( this.state.isPaused ) return null;
    this.stopTimer();
  }

  onResetHandler = () => {
    this.reset()
  }

  onChangePeriodTime = (evt, data) => {
    const [ period, value ] = data;
    this.changePeriodTime(period, value );
  }

  onChangePeriodNumber = (evt,value) => {
    this.changePeriodsMaxNumber(value);
  }

  onChangePeriod = (evt, isReversed) => {
    this.periodSwitch(isReversed, 100, false);
  }

  onFocusClickHandler = (evt)=>{
    const target = evt.target.closest('.timerSettings-toggle') || evt.target.closest('button'); 
    if (!target) return null;
    target.blur()
  }


  render() {

    const startFlag = (!this.state.timerId && !this.state.isPaused) ;

    const controlPanel = (<ControlPanel sessionTime={this.state.sessionTime} currentPeriod={this.state.currentPeriod} 
          maxPeriods={this.state.maxPeriods} onChangePeriodTime={this.onChangePeriodTime} breakTime={this.state.breakTime} 
          onChangePeriodNumber={this.onChangePeriodNumber} onStartHandler={this.onStartHandler} isPaused={this.state.isPaused}
          onStopHandler={this.onStopHandler} onResetHandler={this.onResetHandler} startFlag={startFlag} onChangePeriod={this.onChangePeriod} />);

    const percent = !!(this.state.currentPeriod % 2) ? Math.floor((this.state.currentTime / this.state.sessionTime) * 100) :
     Math.floor((this.state.currentTime / this.state.breakTime) * 100 );

    return (
      <CircleScale percent={100 - percent}>
        <div className='App' onClick={this.onFocusClickHandler}>
          <header className='App-header'>
            <Display currentTime={this.state.currentTime} currentPeriod={this.state.currentPeriod} maxPeriods={this.state.maxPeriods} />
          </header>
        {controlPanel}
        </div>
      </CircleScale>
    );
  }
}

export default App;
