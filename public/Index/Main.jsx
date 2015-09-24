import Page from './Page.jsx'
import Detail from './Detail.jsx'
import React from 'react'

import Router from 'react-router'

let RouteHandler = Router.RouteHandler;
let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route

let mountDom = document.getElementById('mount-dom');


class App extends React.Component{
    render(){
        return (
            <div>
                <h1>App</h1>
                <RouteHandler/>
            </div>
        )
    }
}


let routes = (
    <Route  path='/' handler={App}>
        <DefaultRoute handler={Page}/>
        <Route path='detail' handler={Detail}/>
    </Route>
)

Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root/>, mountDom);
});

import {createStore,bindActionCreators,applyMiddleware} from 'redux'

function newsReducer(state=[],action={}){

    switch(action.type){
        case 'add_news':
            return [
                ...state,
                action.newsObj
            ]
        case 'update_news':
            var newObj = action.newsObj;
            var index = -1;
            for(var i = 0, len = state.length; i < len; i++) {
                if (state[i].id == newObj.id) {
                    index = i;
                    break;
                }
            }
            if(index==-1){
                return state
            }else{
                return [
                    ...state.slice(0,index),
                    newObj,
                    ...state.slice(index+1)
                ]
            }
        default:
            return state;
    }
}

export function addNews(newsObj){
    return {
        type:'add_news',
        newsObj
    }
}

export function updateNews(newsObj){
    return {
        type:'update_news',
        newsObj
    }
}


//let store = createStore(newsReducer)

var logger = store => next=> action =>{
    console.log(store.getState(),action.type)
    next(action);
    console.log(store.getState())
    console.log('============')

    //return newStore
}

let store = applyMiddleware(logger)(createStore)(newsReducer)





let enhance = ComposedComponent =>class extends React.Component{
    //constructor(props,context){
    //    super(props,context)
    //}
    static contextTypes = {
        store:React.PropTypes.object
    };

    render() {
        var ctx = this.context
        store = ctx.store
        return <ComposedComponent {...this.props} store={store}/>
    }
}

class MyList extends React.Component{

    componentDidMount(){
        var store = this.props.store

        setTimeout(function(){
            store.dispatch(addNews({id:'4',title:'t4',content:'c4'}))
        },5000)
    }

    render(){
        var lis =  this.props.store.getState();
        var lisDom = lis.map(item=>{
            return <li key={item.id}>{item.title}</li>
        })
        return(
            <ul>
                {lisDom}
            </ul>
        )
    }
}
var MyEnhanceList = enhance(MyList)

class MyApp extends React.Component{

    constructor(props,context){
        super(props,context)
        //this.store = props.store;
    }

    static childContextTypes={
        store:React.PropTypes.any
    }

    getChildContext(){
        return {
            //store : this.state.store
            store: this.props.store
        }

    }
    render() {
        return <MyEnhanceList/>
    }
}

var myApp = React.render(
    <MyApp store={store}  />, //传 action，传 state 数据
    document.getElementById('container')
)
let render = () => {
    myApp.setState(store.getState())
}
store.subscribe(render)
store.dispatch(addNews({id:'1',title:'t',content:'c'}))
store.dispatch(addNews({id:'2',title:'t',content:'c'}))
store.dispatch({type:'update_news',newsObj:{id:2,title:'t',content:'c2'}})
//console.log(store.getState())

var actionCreators = bindActionCreators({
    addNews,
    updateNews
},store.dispatch)

actionCreators.addNews({id:'3',title:'t3',content:'c'})
actionCreators.updateNews({id:'3',title:'t3',content:'c3'})
//console.log(store.getState())


import immutable from 'immutable'

var aa= {a:1,b:2,c:3};

var map1 = immutable.OrderedMap(aa);
console.log(map1.set('e',9).set('z',100).set('f',6).toArray())




