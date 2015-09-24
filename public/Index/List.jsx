import React from 'react';


class ListItem extends React.Component{

    static defaultProps={}

    static propsType={}

    status={}

    constructor(props){
        super(props)
    }

    render(){
        var props = this.props;
        return (
            <li>
                <a className='link-detail'>
                    <div className='fl image-area'>
                        <img className='news-image' src={props.imgUrl}/>
                    </div>

                    <div className='news-info'>
                        <div className='news-title'>{props.title}</div>
                        <div className='news-created-time'>{props.time}</div>
                    </div>
                </a>
            </li>
        )

    }
}

export default class List extends React.Component{

    static defaultProps={
        data:[]
    }

    static propsType={}

    status={}

    constructor(props){
        super(props)
    }

    render() {
        var props = this.props;
        var lis = props.data.map(item=> {
            return <ListItem {...item} key={item.key}/>
        })

        return (
            <ul className='news-list'>
                {lis}
            </ul>
        )

    }
}