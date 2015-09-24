import 'isomorphic-fetch';

import {BaseStore} from '../zlux/index.js'
import utils from '../utils/utils.js'

const apiUrl = utils.getApiUrl('/api/posts')

const ActionTypes={
    LOAD_POST:'LOAD_POST',
    LOAD_POST_S:'LOAD_POST_S',
    LOAD_POST_E:'LOAD_POST_E'
}

export default class PostListStore extends BaseStore{
    __className ='PostListStore'

    state = {
        isLoading:false,
        posts:[],
        errMsg:'',
        page:1
    }

    loadPost() {
        var page = this.state.page;
        this.dispatch(ActionTypes.LOAD_POST);
        fetch(
            utils.Url.generate(apiUrl,{page:page}),
            {
                headers: {'Accept': 'application/json'}
            }
        )
            .then(res=> res.json())
            .then(res=>{
                alert(res)
                this.dispatch(ActionTypes.LOAD_POST_S,res.results)
            })
            .catch(res=>{
            //TODO error msg
            this.dispatch(ActionTypes.LOAD_POST_E,{errMsg:'请求出现错误'})
        })
    }

    reducer(type,payLoad){
        switch(type) {
            case ActionTypes.LOAD_POST:
                return actionMethods.loadPost(this.state)
            case ActionTypes.LOAD_POST_S:
                return actionMethods.loadPost_s(this.state, payLoad)
            case ActionTypes.LOAD_POST_E:
                return actionMethods.loadPost_e(this.state, payLoad)

            default:
                return this.state
        }
    }
}

const actionMethods={
    loadPost(state){
        if(state.isLoading){
            return state;
        }else{
            return utils.State.setShallow(state,{isLoading:true})
        }
    },
    loadPost_s(state,data){
        data.forEach(item=>{
            item.imageUrl = item.imageUrl +'!index-news-cover'
            state.posts.push(item)
        })
        var page = state.page + 1;

        return utils.State.setShallow(state,{
            isLoading:false,
            posts:state.posts,
            page:page
        })
    },
    loadPost_e(state,data){
        return utils.State.setShallow(state,{
            isLoading:false,
            errMsg:data.errMsg
        })
    }
}

