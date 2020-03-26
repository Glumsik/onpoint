import React from 'react';
import SliderApp from './SliderApp/SliderApp.jsx'
import Pagination from './Pagination/Pagination'
import './App.scss';


export default class App extends React.Component
{
  constructor()
  {
    super();
    this.state =
    {
      scroll: 0,
      bg: 1
    };

    this.touchStart = 0;
    this.touchEnd = 0;
  }


  onTouchStart = ( event ) =>
  {
    this.touchStart = event.targetTouches[0].screenY;
  }


  onTouchEnd = ( event ) =>
  {
    this.touchEnd = event.changedTouches[0].screenY;
    this.scrollSection();
  }

  scrollSection = () =>
  {
    if ( this.touchEnd - this.touchStart > 50 )
    {
      if ( this.state.scroll !== 0 )
      {
        this.setState(
          {
            scroll: this.state.scroll + 768,
            bg: this.state.bg - 1
          } );
      }
      else return

    }
    else if ( this.touchEnd - this.touchStart < -50 )
    {
      if ( this.state.scroll !== -1536 )
      {
        this.setState(
          {
            scroll: this.state.scroll - 768,
            bg: this.state.bg + 1
          } );
      }
      else return
    }
  }

  render()
  {
    return (
      <div className='sliderOuter'>
        <SliderApp scroll={this.state.scroll} touchStart={this.onTouchStart} touchEnd={this.onTouchEnd} />
        <Pagination bg={this.state.bg} />
      </div>
    )
  }
}