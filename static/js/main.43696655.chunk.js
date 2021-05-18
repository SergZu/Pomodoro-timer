(this["webpackJsonppomodoro-app"]=this["webpackJsonppomodoro-app"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('{"b":{"minSessionTime":60,"maxSessionTime":5400,"minBreakTime":60,"maxBreakTime":3600,"minPeriodNumber":4,"maxPeriodNumber":10},"a":{"currentTime":1800,"sessionTime":1800,"breakTime":300,"currentPeriod":1,"maxPeriods":6,"isPaused":false,"timerId":""}}')},,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(11),i=n.n(r),s=n(13),a=n(1),o=n.n(a),c=n(8),l=n.n(c),d=(n(21),n(14)),u=n(4),m=n(5),h=n(2),b=n(3),j=n(7),p=n(6),f=(n(22),n(23),n(0)),O=function(e){var t=e.isActive?"point-active":"point";return Object(f.jsx)("div",{className:t})},x=function(e,t){for(var n=[],r=1;r<=t;r++){var i=r===e,s=Object(f.jsx)("li",{children:Object(f.jsx)(O,{isActive:i})},r.toString());n.push(s)}return n},v=function(e){return Object(f.jsx)("ul",{className:"periodDisplay-box",children:x(e.currentPeriod,e.maxPeriods)})},g=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).getFormatedTime=function(e){var t=Math.floor(e/60),n=e-60*t;return"".concat(t<10?"0".concat(t):t," : ").concat(n<10?"0".concat(n):n)},e}return Object(b.a)(n,[{key:"componentDidUpdate",value:function(){document.title="".concat(this.getFormatedTime(this.props.currentTime)," Pomodoro Timer App")}},{key:"render",value:function(){var e=this.props.currentTime;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"display-block",children:this.getFormatedTime(e)}),Object(f.jsx)(v,{currentPeriod:this.props.currentPeriod,maxPeriods:this.props.maxPeriods})]})}}]),n}(o.a.Component);n(25),n(26);function P(e){var t=!!e.startFlag||e.isPaused;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h3",{className:"timer-panel-control",children:["Now is",Object(f.jsx)("span",{children:e.currentPeriod%2?"FOCUS":"BREAK"}),"time"]}),Object(f.jsxs)("div",{className:"timer-panel-control-buttons",children:[Object(f.jsx)("button",{className:"control-panel-btn",onClick:function(t){return e.onChangePeriod(t,!0)},children:Object(f.jsx)("span",{role:"img","aria-label":"previous",children:"\u2b05"})}),t?Object(f.jsxs)("button",{className:"control-panel-btn",onClick:e.onStartHandler,children:[" ",Object(f.jsx)("span",{role:"img","aria-label":"play",children:"\u25b6"})]}):Object(f.jsxs)("button",{className:"control-panel-btn",onClick:e.onStopHandler,children:[" ",Object(f.jsx)("span",{role:"img","aria-label":"pause",children:"\u2016"})]}),Object(f.jsxs)("button",{className:"control-panel-btn",onClick:e.onResetHandler,children:[" ",Object(f.jsx)("span",{role:"img","aria-label":"reset",children:"\u274c"})]}),Object(f.jsx)("button",{className:"control-panel-btn",onClick:function(t){return e.onChangePeriod(t,!1)},children:Object(f.jsx)("span",{role:"img","aria-label":"next",children:"\u27a1"})})]})]})}n(27);var T=n(34);function N(e){return Object(f.jsxs)("div",{className:"timer-preference-block",children:[Object(f.jsx)("button",{onClick:e.handler[0],className:"timer-preference-block-btn",children:"-"}),Object(f.jsx)("span",{className:"timer-preference-block-display",children:e.value}),Object(f.jsx)("button",{onClick:e.handler[1],className:"timer-preference-block-btn",children:"+"})]})}var k=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).changeSession=function(e){return function(t){return r.props.onChangePeriodTime(t,["sessionTime",Number(e)])}},r.changeBreak=function(e){return function(t){return r.props.onChangePeriodTime(t,["breakTime",Number(e)])}},r.changePeriodCount=function(e){return function(t){return r.props.onChangePeriodNumber(t,e)}},r.onToggleHandler=function(){r.state.isOpen?r.props.onStartHandler():r.props.onStopHandler(),r.setState((function(e){return{isOpen:!e.isOpen}}))},r.onKeyPressed=function(e){13===e.keyCode&&r.onToggleHandler()},r.state={isOpen:!1},r}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state.isOpen?"timerSettings__form form-opened":"timerSettings__form";return Object(f.jsxs)("div",{className:"timerSettings",children:[Object(f.jsx)("h3",{className:"timerSettings-toggle",onClick:this.onToggleHandler,tabIndex:0,onKeyDown:this.onKeyPressed,children:" Settings "}),Object(f.jsx)(T.a,{in:this.state.isOpen,timeout:250,classNames:"SettingsBox",unmountOnExit:!0,children:Object(f.jsxs)("div",{className:e,children:[Object(f.jsxs)("div",{className:"timer-Settings-row",children:[Object(f.jsx)("h4",{children:"Session time"}),Object(f.jsx)(N,{handler:[this.changeSession(-60),this.changeSession(60)],value:Math.floor(this.props.sessionTime/60)})]}),Object(f.jsxs)("div",{className:"timer-Settings-row",children:[Object(f.jsx)("h4",{children:"Break time"}),Object(f.jsx)(N,{handler:[this.changeBreak(-60),this.changeBreak(60)],value:Math.floor(this.props.breakTime/60)})]}),Object(f.jsxs)("div",{className:"timer-Settings-row",children:[Object(f.jsx)("h4",{children:"Number of periods"}),Object(f.jsx)(N,{handler:[this.changePeriodCount(-2),this.changePeriodCount(2)],value:this.props.maxPeriods/2})]})]})})]})}}]),n}(o.a.Component);function S(e){return Object(f.jsxs)("div",{className:"timer-panel",children:[Object(f.jsx)(P,{currentPeriod:e.currentPeriod,onStartHandler:e.onStartHandler,isPaused:e.isPaused,onStopHandler:e.onStopHandler,onResetHandler:e.onResetHandler,startFlag:e.startFlag,onChangePeriod:e.onChangePeriod}),Object(f.jsx)(k,{onChangePeriodTime:e.onChangePeriodTime,sessionTime:e.sessionTime,breakTime:e.breakTime,onChangePeriodNumber:e.onChangePeriodNumber,maxPeriods:e.maxPeriods,onStartHandler:e.onStartHandler,onStopHandler:e.onStopHandler})]})}n(30);var C=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.percent<50;return Object(f.jsx)("div",{className:"main-block",children:Object(f.jsxs)("div",{className:"circle-block",children:[Object(f.jsx)("div",{className:"clip",id:"section-1",children:Object(f.jsx)("div",{className:"item"})}),function(e,t){if(e){var n={backgroundColor:"#d1f9e1",transform:"rotate(".concat(180+3.6*t,"deg)")};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"clip",id:"section-2",children:Object(f.jsx)("div",{className:"item"})}),Object(f.jsx)("div",{className:"clip",id:"section-3",children:Object(f.jsx)("div",{className:"item",style:Object(m.a)({},n)})})]})}var r={backgroundColor:"#d1f9e1",transform:"rotate(".concat(3.6*t,"deg)")};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"clip",id:"section-2",children:Object(f.jsx)("div",{className:"item",style:Object(m.a)({},r)})}),Object(f.jsx)("div",{className:"clip",id:"section-3",children:Object(f.jsx)("div",{className:"item"})})]})}(e,this.props.percent),Object(f.jsx)("div",{className:"center-section",children:Object(f.jsx)("div",{className:"content-section",children:this.props.children})})]})})}}]),n}(o.a.PureComponent),w=["440.00","392.00","246.00","196.00","493.00","440.00","293.00","261.00"],H=function(){function e(t){Object(h.a)(this,e),this.context=t}return Object(b.a)(e,[{key:"init",value:function(){this.oscillator=this.context.createOscillator(),this.gainNode=this.context.createGain(),this.oscillator.connect(this.gainNode),this.gainNode.connect(this.context.destination),this.oscillator.type="sine"}},{key:"play",value:function(e,t){this.init(),this.oscillator.frequency.value=e,this.gainNode.gain.setValueAtTime(1,this.context.currentTime),this.oscillator.start(t),this.stop(t)}},{key:"stop",value:function(e){this.gainNode.gain.exponentialRampToValueAtTime(.03,e+1),this.oscillator.stop(e+1)}}]),e}(),I=!1===(window.AudioContext||window.webkitAudioContext)?function(){console.info("Web Audio API not supported")}:function(){var e=new(window.AudioContext||window.webkitAudioContext),t=new H(e),n=e.currentTime;w.forEach((function(e){t.play(e,n),n+=.5}))},y=n(9),A=(n(31),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).componentWillUnmount=function(){r.state.timerId&&clearInterval(r.state.timerId)},r.tick=function(){var e;if(r.state.timestamp){var t=Date.now()-r.state.timestamp;e=t>1050?Math.round(t/1e3):1}else e=1;r.setState((function(t){return{currentTime:t.currentTime-e,timestamp:Date.now()}}))},r.stopTimer=function(){clearInterval(r.state.timerId),r.setState({timerId:"",isPaused:!0,timestamp:null})},r.runTimer=function(e){r.setState({timerId:e,isPaused:!1})},r.reset=function(){r.state.timerId&&clearInterval(r.state.timerId),r.setState(Object(m.a)(Object(m.a)({},y.a),{},{timestamp:null}))},r.changePeriodTime=function(e,t){var n="min".concat(e[0].toUpperCase()).concat(e.slice(1)),i="max".concat(e[0].toUpperCase()).concat(e.slice(1));if(t<0&&r.state[e]===r.state[n]||t>0&&r.state[e]===r.state[i])return null;r.setState((function(n){var i,s=n[e]+t;return r.state.timerId&&clearInterval(r.state.timerId),i={},Object(u.a)(i,e,s),Object(u.a)(i,"currentTime","sessionTime"===e?s:n.sessionTime),Object(u.a)(i,"timerId",""),Object(u.a)(i,"isPaused",!1),Object(u.a)(i,"currentPeriod",1),Object(u.a)(i,"timestamp",null),i}))},r.periodSwitch=function(e,t,n){if(r.stopTimer(),r.state.currentPeriod===r.state.maxPeriods)return n&&I(),r.setState((function(e){return{currentPeriod:1,currentTime:e.sessionTime,timestamp:null}})),null;if(e&&1===r.state.currentPeriod)return null;var i=e?-1:1;n&&I(),setTimeout((function(){r.setState((function(e){var t=!!(e.currentPeriod%2);return{currentPeriod:e.currentPeriod+i,currentTime:t?e.breakTime:e.sessionTime,timestamp:null}})),n&&r.onStartHandler()}),t)},r.changePeriodsMaxNumber=function(e){var t=r.state.maxPeriods+e;t>r.state.maxPeriodNumber||t<r.state.minPeriodNumber||(r.state.timerId&&clearInterval(r.state.timerId),r.setState((function(e){return{maxPeriods:t,timerId:"",isPaused:!1,currentPeriod:1,currentTime:e.sessionTime,timestamp:null}})))},r.onStartHandler=function(){if(r.state.timerId&&!r.state.isPaused)return null;var e=setInterval((function(){0===r.state.currentTime?(clearInterval(e),r.setState({timerId:""}),r.periodSwitch(!1,4e3,!0)):r.tick()}),1e3);r.runTimer(e)},r.onStopHandler=function(){if(r.state.isPaused)return null;r.stopTimer()},r.onResetHandler=function(){r.reset()},r.onChangePeriodTime=function(e,t){var n=Object(d.a)(t,2),i=n[0],s=n[1];r.changePeriodTime(i,s)},r.onChangePeriodNumber=function(e,t){r.changePeriodsMaxNumber(t)},r.onChangePeriod=function(e,t){r.periodSwitch(t,100,!1)},r.onFocusClickHandler=function(e){var t=e.target.closest(".timerSettings-toggle")||e.target.closest("button");if(!t)return null;t.blur()},r.state=Object(m.a)(Object(m.a)(Object(m.a)({},y.b),y.a),{},{timestamp:null}),r}return Object(b.a)(n,[{key:"render",value:function(){var e=!this.state.timerId&&!this.state.isPaused,t=Object(f.jsx)(S,{sessionTime:this.state.sessionTime,currentPeriod:this.state.currentPeriod,maxPeriods:this.state.maxPeriods,onChangePeriodTime:this.onChangePeriodTime,breakTime:this.state.breakTime,onChangePeriodNumber:this.onChangePeriodNumber,onStartHandler:this.onStartHandler,isPaused:this.state.isPaused,onStopHandler:this.onStopHandler,onResetHandler:this.onResetHandler,startFlag:e,onChangePeriod:this.onChangePeriod}),n=this.state.currentPeriod%2?Math.floor(this.state.currentTime/this.state.sessionTime*100):Math.floor(this.state.currentTime/this.state.breakTime*100);return Object(f.jsx)(C,{percent:100-n,children:Object(f.jsxs)("div",{className:"App",onClick:this.onFocusClickHandler,children:[Object(f.jsx)("header",{className:"App-header",children:Object(f.jsx)(g,{currentTime:this.state.currentTime,currentPeriod:this.state.currentPeriod,maxPeriods:this.state.maxPeriods})}),t]})})}}]),n}(o.a.Component));window.addEventListener("load",Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=9;break}return e.prev=1,e.next=4,navigator.serviceWorker.register("/serviceWorker.js");case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("Service worker register failed");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))),l.a.render(Object(f.jsx)(A,{}),document.getElementById("root"))}],[[32,1,2]]]);