import React from 'react';

export default class MainViewSect1 extends React.Component{
    render(){
        return(
            <div className = "sect1" >
                <div className="options">
                    <i className = "fa fa-tags fa-2x" ></i>
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