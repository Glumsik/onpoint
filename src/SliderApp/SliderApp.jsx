import React from 'react';
import SectionFirst from '../SectionFirst/SectionFirst'
import SectionSecond from '../SectionSecond/SectionSecond'
import SectionThird from '../SectionThird/SectionThird'

export default class SliderApp extends React.Component
{
    render()
    {
        return (
            <div className='sliderInner' style={{ top: this.props.scroll + "px" }} onTouchStart={( event ) => this.props.touchStart( event )} onTouchEnd={( event ) => this.props.touchEnd( event )} >
                <SectionFirst />
                <SectionSecond />
                <SectionThird />
            </div >
        )
    }
}