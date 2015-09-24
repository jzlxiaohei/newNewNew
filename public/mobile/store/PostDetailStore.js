import 'isomorphic-fetch';

import {BaseStore} from '../zlux/index.js'
import utils from '../utils/utils.js'


const ActionTypes={
    LOAD_POST_DETAIL:'LOAD_POST_DETAIL',
    LOAD_POST_DETAIL_S:'LOAD_POST_DETAIL_S',
    LOAD_POST_DETAIL_E:'LOAD_POST_DETAIL_E'
}

export default class PostListStore extends BaseStore{
    __className ='PostListStore'

    state = {
        isLoading:false,
        postObj:null,
        errMsg:null,
        postId:''
    }

    loadPostDetail(payLoad) {
        this.dispatch(ActionTypes.LOAD_POST_DETAIL,payLoad);

        var postId = this.state.postId;
        let apiUrl = utils.getApiUrl("/api/posts/:postId",{postId:postId})

        fetch(
            utils.Url.generate(apiUrl),
            {
                headers: {'Accept': 'application/json'}
            }
        ).then(res=> res.json())
            .then(res=>{
                console.log(res)
                this.dispatch(ActionTypes.LOAD_POST_DETAIL_S,res)
            })
            .catch(res=>{
            //TODO error msg
            this.dispatch(ActionTypes.LOAD_POST_DETAIL_E,{errMsg:res.stack})
        })
    }

    reducer(type,payLoad){
        switch(type) {
            case ActionTypes.LOAD_POST_DETAIL:
                return actionMethods.loadPostDetail(this.state,payLoad)
            case ActionTypes.LOAD_POST_DETAIL_S:
                return actionMethods.loadPostDetail_s(this.state, payLoad)
            case ActionTypes.LOAD_POST_DETAIL_E:
                return actionMethods.loadPostDetail_e(this.state, payLoad)

            default:
                console.warn(`type:${type} not found: use default`)
                return this.state
        }
    }
}

const actionMethods={
    loadPostDetail(state,payLoad){
        var postId = payLoad.postId;
        //console.log(postId)
        if(!postId){
            this.loadPostDetail_e(state,{errMsg:`postId:${postId} is invalid`});
        }
        if(postId == state.postId){return state;}

        if(state.isLoading){
            return state;
        }else{
            return utils.State.setShallow(state,{
                isLoading:true,
                postId:postId,
                postObj:null
            })
        }
    },
    loadPostDetail_s(state,data){
        var postObj = data;
        return utils.State.setShallow(state,{
            isLoading:false,
            postObj:postObj,
            errMsg:null
        })
    },
    loadPostDetail_e(state,data){
        return utils.State.setShallow(state,{
            isLoading:false,
            errMsg:data.errMsg
        })
    }
}

