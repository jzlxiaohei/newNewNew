import React from 'react'
import Container from './containers/container.js'
import {postStore} from './Store/index.js'

var mountDom = document.getElementById('mount-dom')

function dispatch(type,posts){
    postStore.dispatch(type,posts);
}
import 'isomorphic-fetch';

fetch('/api/post')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
React.render(
    <Container url='http://api.wallstreetcn.com/v2/posts' page={1} dispatch={dispatch} store={postStore}/>,
    mountDom
)