import {Component} from 'react'
const { array, func, object } = React.PropTypes
import {Link} from 'react-router'

export default class PostList extends Component{

    static defaultProps={
        list:[]
    }


    constructor(props,context){
        super(props,context)
    }

    render(){
        var list = this.props.list;
        var repeatLi = list.map(item=>{
            return (
                <li key={item.id} className="post-item">
                    <Link className='post-item-wrapper' to={`/posts/${item.id}`} >
                        <div className='cover-image'>
                            <img src={item.imageUrl} alt='新闻封面'/>
                        </div>
                        <div className='post-info'>
                            <div className='post-title'>{item.title}</div>
                            <div className='post-created-time'>{item.createdTime}</div>
                        </div>
                    </Link>
                </li>
            )
        })

        return (
            <ul className='post-list'>
                {repeatLi}
            </ul>
        )
    }

}