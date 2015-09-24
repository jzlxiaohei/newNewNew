
import React from 'react'

import PostList from '../components/PostList.jsx'

import {postStore} from '../Store/index.js'

export default class PostListPage extends React.Component{

    constructor(props,context){
        super(props,context)
        postStore.subscribe(()=>{
            if(this.state.list == postStore.getState())return;
            //console.log('update')
            this.setState({list:postStore.getState()})
        })
    }

    static defaultProps={
    }

    state =  {
        page: this.props.page,
        list:[]
    }

    //shouldComponentUpdate(nextProps,nextState){
    //    return this.state.list !== nextState.list;
    //}

    handleClick(){
        var props = this.props;
        var url = props.url;
        var page = this.state.page;
        $.ajax({
            url: url,
            dataType:'jsonp',
            data:{
                page:page
            }
        }).done(e=>{
            var results = e.results;
            //props.dispatch('push',results)
            postStore.dispatch('push',results)
            //this.setState({
            //    list:postStore.getState()
            //})
            this.state.page++;
        }).fail(e=>{

        })
    }

    componentDidMount(){
        this.handleClick();
    }

    render(){
        var list = this.state.list;
        return(
            <div className='post-container'>
                <PostList store={list}/>
                <div className='post-load-more' onClick={e=>this.handleClick(e)}>加载更多</div>
            </div>

        )
    }
}
