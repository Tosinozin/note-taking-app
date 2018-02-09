import React from 'react';
import TopMenu from './top-menu';

export default class Top extends React.Component{
    render(){
        return(
            <div className = "header" >
                <TopMenu />
            </div>
        )
    }
}