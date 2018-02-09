import React from 'react';
import SideBarTop from './sidebar-top';
import SideBarBottom from './sidebar-bottom';

export default class SideBar extends React.Component{
    render(){
        return(
            <div className = "side-bar" >
                <SideBarTop />
                <SideBarBottom />
            </div>
        )
    }
}