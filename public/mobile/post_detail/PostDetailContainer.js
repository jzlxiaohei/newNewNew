import {Component} from 'react'
import utils from '../utils/utils.js'

import {Link} from 'react-router'
import PostDetail from './components/PostDetail.js'
import CommonError from '../error/CommonError.js'

import './post-detail.less'

export default class PostDetailContainer extends Component{
    constructor(props,context){
        super(props,context)
    }

    componentDidMount(){
        const props = this.props;

        const postId = props.postId || props.params.postId;

        if(!postId)return ;
        const store = this.props.store;
        //console.log(postId)
        store.loadPostDetail({postId:postId})
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
            return <div style={{textAlign:'center'}}>loading</div>
        }

        return (
            <div className='post-detail-container'>

                 <div className='app-header'>
                 <Link className='app-header-left' to='/'> {"< back"} </Link>
                 <div className='app-title'>文章详情</div>
                 <a className='app-header-right' href='/'> </a>
                 </div>
                <PostDetail postObj={postObj}/>
            </div>
        )

    }
}

/*
 <div className='app-header'>
 <a className='app-header-left' href='#/'> {"< back"} </a>
 <div className='app-title'>文章详情</div>
 <a className='app-header-right' href='#/'> </a>
 </div>*/