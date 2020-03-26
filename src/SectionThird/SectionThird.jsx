import React from 'react';
import Slider from '../Slider/Slider'
import './css/sectionThird.scss'

export default class SectionThird extends React.Component
{
    render()
    {
        return (
            <section className='sectionThird' style={{ right: this.right + "px" }}>
                <div className='sectionThirdInner'>
                    <section className='sectionThird1'>
                        <h1 className='sectionThird1__title'>Звенья патогенеза СД2</h1>
                    </section>
                    <section className='sectionThird2'>
                        <h1 className='sectionThird1__title'>Смертельный октет</h1>
                    </section>
                    <section className='sectionThird3'>
                        <h1 className='sectionThird1__title'>Звенья патогенеза СД2</h1>
                    </section>
                </div>
                <Slider />
            </section>
        )
    }
}