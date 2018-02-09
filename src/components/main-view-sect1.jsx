import React from 'react';

export default class MainViewSect1 extends React.Component{
    render(){
        return(
            <div className = "sect1" >
                <div className="options">
                    {/* <form onSubmit={(e) =>{e.preventDefault()}} action="get"> */}
                        <input 
                            onChange = {(e) =>{e.preventDefault();}}
                            type="text"/>
                    {/* </form> */}

                    
                </div>
            </div>
        )
    }
}