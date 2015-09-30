import {Component} from 'react'
import utils from '../../utils/utils.js'

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

    state={
        wasInitDataFetched:false
    }

    componentDidMount(){
        const store = this.props.store;
        store.loadInitPosts();
    }

    fetchData(){
        const store = this.props.store;
        const state = store.getState();
        if(state.isLoading){return;}
        store.loadPosts()
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
            item.imageUrl=item.imageUrl
            return item;
        })
        return (
            <div className='post-list-container'>
                <div className='app-header'>
                    <div className='app-title'>华尔街见闻</div>
                </div>
                <PostList list={list}/>
                <div className='posts-load-more' onClick={e=>{this.fetchData(e)}}>
                    <div className='load-more-button'>{isLoading?'数据加载中':'加载更多'}</div>
                </div>
            </div>
        )
    }
}