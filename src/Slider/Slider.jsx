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
        this.shiftX = null
    }

    startTouch = ( event ) =>
    {
        let slider = document.querySelector( 'DIV[class="slider__scrollItem"]' ),
            scroll = document.querySelector( 'DIV[class="slider__bg"]' );

        slider.style.transition = '';
        scroll.style.transition = '';

        this.shiftX = event.targetTouches[0].clientX - document.querySelector( 'DIV[class="slider__scrollItem"]' ).getBoundingClientRect().left

        document.addEventListener( 'touchmove', this.onMouseMove );
        document.addEventListener( 'touchend', this.touchEnd );
    }

    onMouseMove = ( event ) =>
    {
        this.thMove = Math.round( event.targetTouches[0].clientX - this.shiftX - document.querySelector( 'DIV[class="slider__scroll"]' ).getBoundingClientRect().left );

        if ( this.thMove < -10 )
        {
            this.thMove = -10;
        }
        else if ( this.thMove > 690 )
        {
            this.thMove = 690;
        }

        if ( this.thMove > document.querySelector( 'DIV[class="slider__scroll"]' ).offsetWidth / 4 * 3 )
        {
            document.querySelector( 'DIV[class="sectionThirdInner"]' ).style.right = -0 + 'px';
        }
        else if ( this.thMove > document.querySelector( 'DIV[class="slider__scroll"]' ).offsetWidth / 4 )
        {
            document.querySelector( 'DIV[class="sectionThirdInner"]' ).style.right = -1024 + 'px';
        }
        else if ( this.thMove < document.querySelector( 'DIV[class="slider__scroll"]' ).offsetWidth / 4 )
        {
            document.querySelector( 'DIV[class="sectionThirdInner"]' ).style.right = -2048 + 'px';
        }

        document.querySelector( 'DIV[class="slider__scrollItem"]' ).style.left = this.thMove + 'px';
        document.querySelector( 'DIV[class="slider__bg"]' ).style.width = this.thMove / 6.8 + '%';
    }

    realPositionSlider = () =>
    {
        let slider = document.querySelector( 'DIV[class="slider__scrollItem"]' ),
            scroll = document.querySelector( 'DIV[class="slider__bg"]' );

        slider.style.transition = '.5s';
        scroll.style.transition = '.5s';

        if ( this.thMove < document.querySelector( 'DIV[class="slider__scroll"]' ).offsetWidth / 4 )
        {
            slider.style.left = -10 + 'px';
            document.querySelector( 'DIV[class="slider__bg"]' ).style.width = 0 + '%';
        }
        else if ( this.thMove > document.querySelector( 'DIV[class="slider__scroll"]' ).offsetWidth / 4 * 3 )
        {
            slider.style.left = 690 + 'px';
            document.querySelector( 'DIV[class="slider__bg"]' ).style.width = 100 + '%';
        }
        else if ( document.querySelector( 'DIV[class="slider__scroll"]' ).offsetWidth / 4 < this.thMove < document.querySelector( 'DIV[class="slider__scroll"]' ).offsetWidth / 4 * 3 )
        {
            slider.style.left = document.querySelector( 'DIV[class="slider__scroll"]' ).offsetWidth / 4 * 2 + 'px';
            document.querySelector( 'DIV[class="slider__bg"]' ).style.width = 52 + '%';
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
            <div className='slider'>
                <div className='slider__line'>
                    <div className='slider__scroll'></div>
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