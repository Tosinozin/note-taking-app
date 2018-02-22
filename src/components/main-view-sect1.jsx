import React from 'react';
import store from '../NoteStore';

export default class MainViewSect1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showSideBar : true,
        }
    }

    openSideBar(){
        this.setState({showSideBar : !this.state.showSideBar});
        
        if(this.state.showSideBar === true){
            document.querySelector('.side-bar').style.display = "block";
            document.querySelector('.main-view').style.marginLeft = "250px";
        }else{
            document.querySelector('.side-bar').style.display = "none";
            document.querySelector('.main-view').style.marginLeft = "0";
        }
    }
    createNote(){
        store.createNote();
    }
    render(){
        return(
            <div className = "sect1" >
                <div className="options">
                    <i onClick = {this.openSideBar.bind(this)} className = "fa fa-tags fa-2x" ></i>
                        <input 
                            onChange = {(e) =>{e.preventDefault();}}
                            type="text"/>
                    <i onClick = {this.createNote.bind(this)} className = "fa fa-file fa-2x" ></i>
                    
                </div>
            </div>
        )
    }
}