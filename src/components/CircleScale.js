import React from 'react';
import PropTypes from 'prop-types';
import './styles/circleScale.css';

class CircleScale extends React.PureComponent {
	render(){

		const belowFiftyPercent = this.props.percent < 50;

		const createScale = function(condition, percent) {
			if (condition) {

				const angle = 180 + (3.6 * percent);
		
				const targetStyle = {
					backgroundColor : '#d1f9e1',
					transform : `rotate(${angle}deg)`
				}
				return (
					<>
						<div className='clip' id='section-2'>
							<div className='item' / >
						</div>
						<div className='clip' id='section-3'>
							<div className='item' style={{
								...targetStyle
							}}
						 	/>
						</div>
					</>
					)
			}
			else {
				const angle = 3.6 * percent;
				
				const targetStyle = {
					backgroundColor : '#d1f9e1',
					transform : `rotate(${angle}deg)`
				}
				return (
					<>
						<div className='clip' id='section-2'>
							<div className='item' style={{
								...targetStyle
							}}
							/>
						</div>
						<div className='clip' id='section-3'>
							<div className='item' />
						</div>
					</>
					)
			}
		}


		return (
			<div className='main-block'>
				<div className='circle-block'>
					<div className='clip' id='section-1'>
						<div className='item' />
					</div>
					{ createScale(belowFiftyPercent, this.props.percent) }
					<div className='center-section'>
						<div className='content-section'>
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
			)
	}
}

CircleScale.propTypes = {
	percent : PropTypes.number.isRequired
}

export { CircleScale }

