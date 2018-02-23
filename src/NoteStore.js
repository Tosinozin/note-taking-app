import { observable } from 'mobx';

class  NoteStore {
    @observable notes = [
        
    ];
    @observable now = 0;

    createNote(text){
        let value = text || '';
        let note = {
            _id : Date.now(),
            text : value ,
            title: value.split(/\n/g)[0],
        }
        this.notes.push(note);
        for (let i = 0; i < this.notes.length; i++) {
            if (this.notes[i]._id === note._id) {
                this.now = i;
            }
        }
        this.currentNote = this.notes[this.now];
    }

    presentNote(id){
        for (let i = 0; i < this.notes.length; i++) {
            if (this.notes[i]._id === id) {
                this.now = i;
            }
        }
        
        this.currentNote = this.notes[this.now];
        
    }

    updateCurrentNote(text){
        this.currentNote.text = text;
        this.currentNote.title = text.split(/\n/g)[0]
    }

    @observable
    currentNote = {
        // text : "",
        // title: ''
    }
}

var store = window.store = new NoteStore()

export default store