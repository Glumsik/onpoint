import React from 'react';
import './css/slider.scss'

export default class SliderApp extends React.Component
{
    render()
    {
        return (
            <div className='slider' onTouchMove={( event ) => this.props.mouseMove( event )}>
                <div className='slider__line'>
                    <div className='slider__scroll'></div>
                    <div className='slider__scrollItem' style={{ left: this.props.scrollItem + "px" }}></div>
                </div>
                <div className='slider__number'>
                    <span className='slider__title'>1998</span>
                    <span className='slider__title'>2009</span>
                    <span className='slider__title'>2016</span>
                </div>
            </div >
        )
    }
}