import React from 'react';
import ToggleButton from 'react-toggle-button';
import { observer } from 'mobx-react';
import store from '../NoteStore';

@observer
export default class InfoBar extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            value : '',
            value2 : '',
        }
    }
    render(){
        return(
            <div className = "info-bar">
                <div className="row1">
                    <div className="row1-container">
                        <h3>INFO</h3>
                        <h2>Modified</h2>
                        <p>Feb 15, 2018 10:18 am</p>
                        <h2>{store.NoOfWords} words</h2>
                        <h2>{store.NoOfChars} characters</h2>
                    </div>
                </div>

                <div className="row2">
                    <div className="row2-container">
                        <h2>Pin to top 
                        <span><ToggleButton
                            value={ this.state.value || false }
                            onToggle={(value) => {
                                this.setState({
                                value: !value,
                                })
                            }}
                        /></span></h2>
                    </div>
                </div>

                <div className="row3">
                    <div className="row3-container">
                        <h2>Markdown
                            <span><ToggleButton
                            value={ this.state.value2 || false }
                            onToggle={(value) => {
                                this.setState({
                                value2: !value,
                                })
                            }}
                            /></span>
                        </h2>
                        <p>Enable markdown formatting on this note <a href="">Learn more...</a></p>
                    </div>
                </div>
            </div>
        )
    }
}