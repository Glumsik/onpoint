import React from 'react';
import Slider from '../Slider/Slider'
import './css/sectionThird.scss'

export default class SectionThird extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            scroll: null
        };
    }

    scroll = ( value ) =>
    {
        this.setState(
            {
                scroll: value
            }
        )
    }

    render()
    {
        return (
            <section className='sectionThird'>
                <div className='sectionThirdInner' style={{ right: this.state.scroll + "px" }}>
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
                <Slider scroll={( value ) => this.scroll( value )} />
            </section>
        )
    }
}