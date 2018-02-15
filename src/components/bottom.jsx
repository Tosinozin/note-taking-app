import React from 'react';
import SideBar from './sidebar';
import MainView from './main-view';
import InfoBar from './info-bar';

export default class Bottom extends React.Component{
    render(){
        return(
            <div className = "bottom" >
                <SideBar />
                <MainView />
                <InfoBar />
            </div>
        )
    }
}