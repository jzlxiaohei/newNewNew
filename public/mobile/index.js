import React from 'react' ;
import {Router,Route,Link,IndexRoute} from 'react-router'
import utils from './utils/utils.js'

require('es6-promise').polyfill();
import FastClick from 'fastclick'
FastClick.attach(document.body);

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


class App extends React.Component{
    constructor(props,context){
        super(props,context)

        postListStore.subscribe((e,state)=>{
            if(state.isLoading !=this.state.isLoading){
                this.setState({
                    isLoading:state.isLoading
                })
            }
        })
        postDetailStore.subscribe((e,state)=>{
            if(state.isLoading !=this.state.isLoading){
                this.setState({
                    isLoading:state.isLoading
                })
            }
        })
    }

    state={
        isLoading:false
    }

    componentDidMount(){

    }

    render(){
        const isLoading = this.state.isLoading
        let loadingCoverClass='loading-cover'
        if(!isLoading){
            loadingCoverClass+=' hide'
        }

        return(
            <div>
                <div className='app-header'>
                    <div className='app-title'>华尔街见闻</div>
                </div>
                <div className='app-content'>
                    {this.props.children}
                </div>

                <div className={loadingCoverClass}>
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

console.log(utils.Scroll)
React.render(
    (
        <Router>
            <Route path="/" component={App}>
                <IndexRoute  component={PostListElement}
                             onEnter={()=>{ utils.Scroll.restoreScroll('PostList') }}
                             onLeave={()=>{ utils.Scroll.setScroll('PostList') }} />
                <Route path="posts/:postId" component={PostDetailElement} />
            </Route>
        </Router>
    ),
    document.getElementById('mount-dom')
)


