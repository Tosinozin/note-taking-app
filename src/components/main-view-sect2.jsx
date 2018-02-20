import React from 'react';

export default class MainViewSect2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showInfobar : true,
        }

        this.OpenInfoBar = this.OpenInfoBar.bind(this);
    }

    OpenInfoBar(){
        this.setState({showInfoBar : !this.state.showInfoBar});
        
        if(this.state.showInfoBar === true){
            document.querySelector('.info-bar').style.display = "none";
            document.querySelector('.main-view').style.marginLeft = "0";
        }else{
            document.querySelector('.info-bar').style.display = "block";
            document.querySelector('.main-view').style.marginLeft = "-350px";
        }
    }


    render(){
        return(
            <div className = "sect2" >
                <div className="sect2-container">
                    <i className = "fa fa-history fa-2x" ></i>
                    <i className = "fa fa-upload fa-2x" ></i>
                    <i className = "fa fa-trash fa-2x" ></i>
                    <i onClick = {this.OpenInfoBar} className = "fa fa-info-circle fa-2x" ></i>
                </div>
            </div>
        )
    }
}