import React from 'react';
import store from '../NoteStore';
import { observer } from 'mobx-react';

@observer
export default class MainViewSect3 extends React.Component{
    render(){
        return(
            <div className = "sect3" >
                <div className = "note-list">
                    {/* <div className="note">
                        <h2>Yahaha</h2>
                        <p>huhuru</p>
                    </div> */}
                    {this.renderNotes()}
                </div>
            </div>
        )
    }
    renderNotes(){
        let  notes = [];
        store.notes.forEach( (note) => {
            notes.push(
                <div onClick = {()=>store.presentNote(note._id)} key= {note._id} className="note">
                    <h2>{note.title || "New Note"}</h2>
                    <p>{note.text}</p>
                </div>
            );
        });
        return notes;
    }
}