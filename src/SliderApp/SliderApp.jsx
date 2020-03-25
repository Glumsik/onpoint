import React from 'react';
import SectionFirst from '../SectionFirst/SectionFirst'
import SectionSecond from '../SectionSecond/SectionSecond'
import SectionThird from '../SectionThird/SectionThird'

export default class SliderApp extends React.Component
{
    test = () =>
    {
        console.log( 'asdf' )
    }

    render()
    {
        return (
            <div className='sliderInner' onTouchStart={this.test} >
                <SectionFirst />
                <SectionSecond />
                <SectionThird />
            </div >
        )
    }
}