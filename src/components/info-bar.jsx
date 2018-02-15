import React from 'react';

export default class InfoBar extends React.Component{
    render(){
        return(
            <div className = "info-bar">
                <div className="row1">
                    <div className="row1-container">
                        <h3>INFO</h3>
                        <h2>Modified</h2>
                        <p>Feb 15, 2018 10:18 am</p>
                        <h2>173 words</h2>
                        <h2>1062 characters</h2>
                    </div>
                </div>

                <div className="row2">
                    <div className="row2-container">
                        <h2>Pin to top </h2>
                    </div>
                </div>

                <div className="row3">
                    <div className="row3-container">
                        <h2>Markdown</h2>
                        <p>Enable markdown formatting on this note <span><a href="#">Learn more...</a></span></p>
                    </div>
                </div>
            </div>
        )
    }
}