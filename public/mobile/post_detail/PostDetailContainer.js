import {Component} from 'react'
import utils from '../utils/utils.js'

import PostDetail from './components/PostDetail.js'
import CommonError from '../error/CommonError.js'

import './post-detail.less'

export default class PostDetailContainer extends Component{
    constructor(props,context){
        super(props,context)
        console.log(11111)
    }

    componentDidMount(){
        const props = this.props;

        const postId = props.postId //|| props.params.postId;

        if(!postId)return ;
        const store = this.props.store;
        console.log(postId)
        store.loadPostDetail({postId:postId})

        //var url = utils.getApiUrl("/api/posts/:postId",{postId:postId})
    }

    render(){
        const store = this.props.store;
        const state = store.getState();
        if(state.errMsg){
            return <CommonError errMsg={state.errMsg}/>
        }
        let postObj = state.postObj
        if(!postObj){
            postObj={
                title:'',
                content:'',
                user:{screenName:''}
            }
        }

        if(state.isLoading){
            return <div>loading</div>
        }

        return (
            <div className='post-detail-container'>
                <div className='app-header'>
                    <a className='app-header-left' href='#/'> {"< back"} </a>
                    <div className='app-title'>文章详情</div>
                    <a className='app-header-right' href='#/'> </a>
                </div>
                <PostDetail postObj={postObj}/>
            </div>
        )

    }
}