import React from 'react';
import store from '../NoteStore';
import { observer } from 'mobx-react';

@observer
export default class MainViewSect4 extends React.Component{
    createNew(e){
        if(e.which === 13){
            store.createNote(e.target.value);
            e.target.value="";
        }
    }
    render(){
        return(
            <div className= "sect4" >
                    <div className="text-area">
                        <textarea 
                            onKeyPress= {this.createNew.bind(this)}
                            name="" id="" cols="30" rows="10"></textarea>
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