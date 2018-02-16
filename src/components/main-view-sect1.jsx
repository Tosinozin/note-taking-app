import React from 'react';

export default class MainViewSect1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showSideBar : true,
        }

        this.OpenSideBar = this.OpenSideBar.bind(this);
    }

    OpenSideBar(){
        this.setState({showSideBar : !this.state.showSideBar});
        
        if(this.state.showSideBar === true){
            document.querySelector('.side-bar').style.display = "block";
            document.querySelector('.main-view').style.marginLeft = "250px";
        }else{
            document.querySelector('.side-bar').style.display = "none";
            document.querySelector('.main-view').style.marginLeft = "0";
        }
    }
    render(){
        return(
            <div className = "sect1" >
                <div className="options">
                    <i onClick = {this.OpenSideBar} className = "fa fa-tags fa-2x" ></i>
                    {/* <form onSubmit={(e) =>{e.preventDefault()}} action="get"> */}
                        <input 
                            onChange = {(e) =>{e.preventDefault();}}
                            type="text"/>
                    {/* </form> */}
                    <i className = "fa fa-file fa-2x" ></i>
                    
                </div>
            </div>
        )
    }
}