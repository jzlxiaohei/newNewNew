import React from 'react'

export default class ListItem extends React.Component{

    static defaultProps={}

    static propsType={}

    status={}

    constructor(props){
        super(props)
    }

    render(){
        return (
            <header>
                <div className='menu-indicator'></div>
                <div className='header-logo'></div>
                <div className='header-app'>
                    <a className='download-button' href='#'></a>
                </div>
            </header>
        )
    }
}