import React from 'react';
import './css/sectionThird.scss'

export default class SectionThird extends React.Component
{
    render()
    {
        return (
            <section className='sectionThird'>
                <section className='sectionThird1'>
                    <h1 className='sectionThird1__title'>Звенья патогенеза СД2</h1>
                    <div className='sectionThird1__box'>
                        <div className='sectionThird1__item1'>
                            <span className='sectionThird1__number1'>
                                1
                            </span>
                            <h2 className='sectionThird1__subTitle1'>β‑клетки</h2>
                            <div className='sectionThird1__subItem1'></div>
                        </div>
                        <div className='sectionThird1__item2'>
                            <span className='sectionThird1__number2'>
                                2
                            </span>
                            <h2 className='sectionThird1__subTitle2'>Мышцы</h2>
                            <div className='sectionThird1__subItem2'></div>
                        </div>
                        <div className='sectionThird1__item3'>
                            <span className='sectionThird1__number3'>
                                2
                            </span>
                            <h2 className='sectionThird1__subTitle3'>Печень</h2>
                            <div className='sectionThird1__subItem3'></div>
                        </div>
                        <div className='sectionThird1__item4'>
                            <h2 className='sectionThird1__subTitle4'>
                                Гипергликемия
                            </h2>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}