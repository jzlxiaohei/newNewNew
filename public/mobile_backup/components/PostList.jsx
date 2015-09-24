import React from 'react'

export default class PostList extends React.Component{

    render(){
        var list = this.props.store.getState();

        var listDom = list.map(item=>{
            return (
                <li key={item.id} className='post-item'>
                    <div className='post-img'>
                        <img src={item.imageUrl}/>
                    </div>
                    <div className='post-title'>{item.title}</div>
                    <div className='created-time'>{item.createdTime}</div>
                </li>

            )
        })

        return (
            <ul className='post-list'>
                {listDom}
            </ul>
        )
    }

}