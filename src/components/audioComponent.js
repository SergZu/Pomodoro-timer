const beep = ['440.00', '392.00', '246.00', '196.00', '493.00', '440.00', '293.00', '261.00'];

class audio {
	constructor(context) {
  this.context = context
  }
  
  init() {
  	this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.oscillator.type = 'sine';
  }
  play(value, time) {
  	this.init();
    this.oscillator.frequency.value = value;
    this.gainNode.gain.setValueAtTime(1, this.context.currentTime);
    this.oscillator.start(time);
    this.stop(time);
  }
  stop(time) {
    this.gainNode.gain.exponentialRampToValueAtTime(0.03, time + 1);
    this.oscillator.stop(time + 1);
  }
}

const beepFunctionCreator = function() {
  if ((window.AudioContext || window.webkitAudioContext) === false) {
    return () => {console.info('Web Audio API not supported')}
  }
  else {
    return () => {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      const sound = new audio(context);
      const now = context.currentTime;
      let noteTime = now;
      beep.forEach( (freq) => {
        sound.play(freq, noteTime);
        noteTime += 0.5} )
      }
  }
}

const beepCreator = beepFunctionCreator();

export { beepCreator }