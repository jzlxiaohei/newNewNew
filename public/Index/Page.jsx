import React from 'react'
import List from './list.jsx'
import Header from './header.jsx'
import {Link} from 'react-router';

import * as NewsActions from './actions/index.jsx'

import rootReducer from './reducers/index.jsx'

export default class Page extends React.Component{
    static defaultProps={
        data:[]
    }

    static propsType={}

    status={}

    constructor(props){
        super(props)
    }

    componentDidMount(){
        //var state = this.state;
        //this.setState(rootReducer.news(state,{
        //    type:'add_news',title:'title',content:'content'}
        //))
    }



    render(){
        const {news} = this.props;
        //var actions = bindActionCreators(NewsActions,dispatch);

        return (
            <div className='page-index' style={ {height:'1000px'}}>
                <div>main</div>
                <Link to='/detail'>aaa</Link>
                <Header/>
                <List/>
            </div>
        )
    }


}

