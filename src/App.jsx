import React from 'react';
import SliderApp from './SliderApp/SliderApp.jsx'
import './App.scss';


export default class App extends React.Component
{
  render()
  {
    return (
      <div className='sliderOuter'>
        <SliderApp />
      </div>
    )
  }
}