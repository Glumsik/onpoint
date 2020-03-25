import React from 'react';
import './css/pagination.scss'

export default class Pagination extends React.Component
{
    render()
    {
        return (
            <div className='pagination'>
                <div className='pagination__point' style={{ backgroundColor: this.props.bg === 1 ? '#f78b1f' : 'white' }}></div>
                <div className='pagination__point' style={{ backgroundColor: this.props.bg === 2 ? '#f78b1f' : 'white' }}></div>
                <div className='pagination__point' style={{ backgroundColor: this.props.bg === 3 ? '#f78b1f' : 'white' }}></div>
            </div>
        )
    }
}