//import React from 'react'
import React from 'react' ;
import {Router,Route,Link,IndexRoute} from 'react-router'
import urllite from 'urllite'


import PostListStore from './store/PostListStore.js'
import PostDetailStore from './store/PostDetailStore.js'
import {enhanceWithStore} from './zlux/index.js'
import PostListContainer from './posts/PostListContainer.js'
import PostDetailContainer from './post_detail/PostDetailContainer.js'

import './normalize.css'
import './common.less'

const postListStore = new PostListStore()
const postDetailStore = new PostDetailStore();

const PostListElement = enhanceWithStore(PostListContainer,postListStore)
const PostDetailElement = enhanceWithStore(PostDetailContainer,postDetailStore)


class AppComponent extends React.Component{

    constructor(props,context){
        super(props,context)
    }

    state={
        postListHide:false,
        postDetailHide:true
    }

    navigator(path){
        path= path || '#/'
        if(path=='#/'){
            this.setState({
                postListHide:false,
                postDetailHide:true
            })
        }else{
            const postId = path.split('/')[2];
            postDetailStore.loadPostDetail({postId:postId})
            this.setState({
                postListHide:true,
                postDetailHide:false
            })
        }
    }

    componentDidMount(){
        console.log('app mount')
        postListStore.loadPost();
        window.addEventListener('hashchange',e=>{this.navigator(location.hash)})
    }

    componentWillMount(){
    }


    render() {
        let postListClassName='post-list-area',
            postDetailClassName='post-detail-area'
        if(this.state.postListHide){postListClassName+=' hide'}
        if(this.state.postDetailHide){postDetailClassName+=' hide'}

        return (
            <div>
                <div className={postListClassName}>
                    <div className='app-header'>Header</div>
                    <PostListElement/>
                </div>
                <div className={postDetailClassName}>
                    <PostDetailElement/>
                </div>
            </div>
        )
    }
}

React.render((
       <AppComponent/>
    ), document.getElementById('mount-dom')
)

