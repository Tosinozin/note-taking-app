import React from 'react';

export default class SideBarTop extends React.Component{
    render(){
        return(
            <div className = "side-bar-top" >
                <div className = "content">
                    <h3><i className = "fa fa-file" ></i>All Notes </h3>
                    <h3><i className = "fa fa-trash" ></i>Trash</h3>
                </div>
            </div>
        )
    }
}