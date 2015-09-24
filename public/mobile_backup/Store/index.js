import PostStore from './PostStore.js'


export let postStore =new PostStore()

window.postStore = postStore;

//postStore.subscribe(e=>{
//    console.log(e)
//    console.log(postStore.getState())
//})
//
//postStore.dispatch('push',{id:1,content:'c1',title:'t1'})
//postStore.dispatch('update',{id:1,content:'c2',title:'t1'})
//
//var state1 = postStore.getState();
//console.log(state1 == postStore.getState())
//
//postStore.dispatch('push',{id:2,content:'c2',title:'t1'})
//console.log(state1 == postStore.getState())
