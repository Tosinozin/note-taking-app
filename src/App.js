import React, { Component } from 'react';
import Top from './components/top';
import Bottom from './components/bottom';
import { observer } from "mobx-react";

@observer
export default class App extends Component {
  // constructor(props){
  //   super(props);

    
  // }
  // createNew(e){
  //   if(e.which === 13){
  //     this.props.store.createNote(e.target.value);
  //     e.target.value= ""
  //   }
  // }

  // filter(e){
  //   this.props.store.filter = e.target.value;
  // };

  // toggleComplete(note){
  //   note.complete = !note.complete
  // }
  
  render() {
    // const { clearComplete, filter, filteredNotes, notes } = this.props.store;

    // const noteLis = filteredNotes.map(note => (
    //   <li key = {note.id}>
    //     <input type = "checkbox" 
    //       onChange = {this.toggleComplete.bind(this, note)}
    //       value={note.complete} checked = {note.complete} />
    //     {note.value}
    //   </li>

    // ))
    return(
      <div className = "container" >
        <Top />
        <Bottom />
      </div>

      // <div>
      //   <h1>Notes</h1>
      //   <div>Create Note: <input className = "create" onKeyPress={this.createNew.bind(this)} /> </div>
      //   <div>Search for Note: <input  className = "filter" value={filter} onChange= {this.filter.bind(this)} /> </div>
      //   <ul>{noteLis}</ul>
      //   <a href = "#" onClick= {clearComplete}>Clear Complete Notes </a>
      // </div>
    )
  }
}
