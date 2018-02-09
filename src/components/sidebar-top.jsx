import React from 'react';

export default class SideBarTop extends React.Component{
    render(){
        return(
            <div className = "side-bar-top" >
                <div className = "content">
                    <h3>All Notes</h3>
                    <h3>Trash</h3>
                </div>
            </div>
        )
    }
}