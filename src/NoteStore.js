import { computed, observable } from 'mobx';

class  NoteStore {
    @observable notes = [
        {
            text: "Note Building App\nWelcome to my app",
            title: "Note Building App",
            _id: 1
        }
        
    ];
    @observable now = 0;
    
    @observable
    currentNote = this.notes[0];
    // currentNote = {
    //     text : "",
    //     title: '',
    // };

    @computed get NoOfWords(){

        var tabSplit = this.currentNote.text.split(/\n/);
        var words = [];
        for (let i = 0; i < tabSplit.length; i++) {
            var temp = tabSplit[i].split(' ');
            for (let j = 0; j < temp.length; j++) {
                if(temp[j].length > 0){
                    words.push(temp[j])
                }
            }
        }
        return words.length;
    
    }

    @computed get NoOfChars(){
        return this.currentNote.text.length;
    }

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

    deleteNote(){
        if (this.now === this.notes.length - 1 && this.notes.length > 1) {
            this.notes.splice(this.now, 1);
            this.now = this.now - 1;
        }else if(this.now === 0 && this.notes.length === 1){
            this.createNote();
            this.notes.splice(0, 1);
            this.now = this.now - 1;
        }
        else{
            this.notes.splice(this.now, 1);
        }
        this.currentNote = this.notes[this.now];
    }
}

var store = window.store = new NoteStore()

export default store