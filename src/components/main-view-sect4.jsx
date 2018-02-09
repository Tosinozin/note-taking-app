import React from 'react';

export default class MainViewSect4 extends React.Component{
    render(){
        return(
            <div className= "sect4" >
                    <div className="text-area">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    
                    <div className="tag-field">
                        <div className="field">
                            {/* <p>Lorem</p>
                            <p>Lorem</p>
                            <p>Lorem</p>
                            <p>Lorem</p>
                            <p>Lorem</p>
                            <p>Lorem</p>
                            <p>Lorem</p> */}
                            <div className="tag-input">
                                <input type="text" placeholder = "Add tags here" />
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}