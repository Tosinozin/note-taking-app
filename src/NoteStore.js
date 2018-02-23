import { observable } from 'mobx';


// class Note {
//     @observable value
//     @observable id
//     @observable complete

//     constructor(value){
//         this.value = value;
//         this.id = Date.now();
//         this.complete = false;
//     }
// }

// class NoteStore {
//     @observable notes = [
//         "note1"
//     ];
//     @observable filter = "";

//     @computed get filteredNotes(){
//         var matchesFilter = new RegExp(this.filter, "i");
//         return this.notes.filter(note => !this.filter || matchesFilter.test(note.value))
//     }

//     createNote(value){
//         this.notes.push(new Note(value));
//     }

//     clearComplete = () =>{
//         const incompleteNotes = this.notes.filter(note => !note.complete)
//         this.notes.replace(incompleteNotes)
//     }
// }

// var store = window.store = new NoteStore()

// export default store


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