import {Component} from 'react'
import utils from '../utils/utils.js'

import PostList from './components/PostList.js'
import './post-list.less'


function formatTime(d){
    var t =utils.Time.getTimeObj(d);
    var month = t.month,
        date = t.date,
        hour = t.hour,
        minute = t.minute;
    return `${month}月${date}日 ${hour}:${minute}`;
}


export default class PostListContainer extends Component{

    constructor(props,context){
        super(props,context)
    }

    componentDidMount(){

    }

    loadMoreHandle(){
        const store = this.props.store;
        const state = store.getState();
        if(state.isLoading){return;}
        store.loadPost()
    }

    render() {
        const store = this.props.store;
        const state = store.getState();
        let list = state.posts,
            isLoading = state.isLoading,
            errMsg = state.errMsg;

        //TODO if err...

        list = list.map(item=>{
            var d = new Date (item.createdAt*1000);
            item.createdTime = formatTime(d)
            item.imageUrl=item.imageUrl+'!index-news-cover'
            return item;
        })
        return (
            <div className='post-list-container'>
                <PostList list={list}/>
                <div className='posts-load-more' onClick={e=>{this.loadMoreHandle(e)}}>
                    <div className='load-more-button'>{isLoading?'数据加载中':'加载更多'}</div>
                </div>
            </div>
        )
    }
}