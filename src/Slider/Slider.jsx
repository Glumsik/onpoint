import React from 'react';
import './css/slider.scss'

export default class SliderApp extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {

        };
        this.thMove = null
        this.scrollWidth = 700
        this.scrollLeft = 162
        this.shiftX = null
        this.cell = 0
        this.bg = null
        this.slider = null
    }


    startTouch = ( event ) =>
    {
        this.bg = event.target.nextSibling
        this.slider = event.target

        this.slider.style.transition = '';
        this.bg.style.transition = '';

        this.shiftX = event.targetTouches[0].clientX - this.slider.getBoundingClientRect().left

        document.addEventListener( 'touchmove', this.onMouseMove );
        document.addEventListener( 'touchend', this.touchEnd );
    }


    onMouseMove = ( event ) =>
    {
        this.thMove = Math.round( event.targetTouches[0].clientX - this.shiftX - this.scrollLeft );


        if ( this.thMove < -10 )
        {
            this.thMove = -10;
        }
        else if ( this.thMove > 690 )
        {
            this.thMove = 690;
        }

        event.target.style.left = this.thMove + 'px';

        if ( this.cell !== Math.floor( this.thMove / ( this.scrollWidth / 4 ) ) )
        {
            if ( this.thMove < 0 )
            {
                return
            }
            else
            {
                this.cell = Math.floor( this.thMove / ( this.scrollWidth / 4 ) )
            }


            if ( this.cell === 0 )
            {
                this.props.scroll( -2048 )
            }
            else if ( this.cell === 1 || this.cell === 2 )
            {
                this.props.scroll( -1024 )
            }
            else if ( this.cell === 3 )
            {
                this.props.scroll( -0 )
            }
        }

        this.bg.style.width = this.thMove / 6.8 + '%';
    }


    realPositionSlider = () =>
    {
        this.slider.style.transition = '.5s';
        this.bg.style.transition = '.5s';

        if ( this.thMove < this.scrollWidth / 4 )
        {
            this.slider.style.left = -10 + 'px';
            this.bg.style.width = 0 + '%';
        }
        else if ( this.thMove > this.scrollWidth / 4 * 3 )
        {
            this.slider.style.left = 690 + 'px';
            this.bg.style.width = 100 + '%';
        }
        else if ( this.scrollWidth / 4 < this.thMove < this.scrollWidth / 4 * 3 )
        {
            this.slider.style.left = this.scrollWidth / 4 * 2 + 'px';
            this.bg.style.width = 52 + '%';
        }

    }


    touchEnd = () =>
    {
        this.realPositionSlider();
        document.removeEventListener( 'touchmove', this.onMouseMove );
        document.removeEventListener( 'touchend', this.touchEnd );
    }


    render()
    {
        return (
            <div className='slider' style={{ left: this.scrollLeft + "px", width: this.scrollWidth + 'px' }}>
                <div className='slider__line'>
                    <div className='slider__scroll' ></div>
                    <div className='slider__scrollItem' onTouchStart={( event ) => this.startTouch( event )}></div>
                    <div className='slider__bg'></div>
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