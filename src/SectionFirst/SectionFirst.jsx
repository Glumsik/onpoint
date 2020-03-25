import React from 'react';
import './css/sectionFirst.scss'

export default class SectionFirst extends React.Component
{
    render()
    {
        return (
            <section className='sectionFirst'>
                <h1 className='sectionFirst__title'>
                    Всегда ли цели терапии СД2 на&nbsp;поверхности?
                </h1>
                <div className='sectionFirst__macker'>
                    <div className='sectionFirst__marker1'>
                        <span className='sectionFirst__titleMarker titleMarker1'>Цель по HbA1c</span>
                        <div className='sectionFirst__pointMarker1'></div>
                    </div>
                    <div className='sectionFirst__marker2'>
                        <span className='sectionFirst__titleMarker titleMarker2'>Гипогликемия</span>
                        <div className='sectionFirst__pointMarker1'></div>
                    </div>
                    <div className='sectionFirst__marker3'>
                        <span className='sectionFirst__titleMarker titleMarker3'>Осложнения СД</span>
                        <div className='sectionFirst__pointMarker1'></div>
                    </div>
                    <div className='sectionFirst__marker4'>
                        <span className='sectionFirst__titleMarker titleMarker4'>СС риски</span>
                        <div className='sectionFirst__pointMarker1'></div>
                    </div>
                </div>
                <div className="nextSlide">
                    <span className="nextSlide__text">Листайте вниз</span>
                </div>
            </section>
        )
    }
}