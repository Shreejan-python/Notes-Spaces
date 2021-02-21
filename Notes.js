console.log("Welcome to Notes Space");
showing_notes()

// If any user adds a note add it to the local storage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesQ = [];
    } else {
        notesQ = JSON.parse(notes);
    }
    notesQ.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesQ));
    addTxt.value = "";
    //console.log(notesQ);
    showing_notes()

});

function showing_notes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesQ = [];
    } else {
        notesQ = JSON.parse(notes);
    }
    let txt = "";
    notesQ.forEach(function (element, index) {

        txt += `
                    <div class="card">
                        <div class="Notecard my-2, mx-2 card">
                        <h5 class="card-title">Note ${index + 1}</h5>
                     <p class="card-text">${element}</p>
                    <button id="$(index)" onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
                    <button id="$(index)" onclick="importantNote(this.id)" class="btn btn-primary">Mark as Important</button>

                </div>
                </div>
                `
    });
    let noteselm = document.getElementById("notes")
    if (notesQ.length != 0) {
        noteselm.innerHTML = txt
    }
    else {
        noteselm.innerHTML = `Nothing yet. Press "Add Note" to add note`
    }
}

function deleteNote(index) {
    console.log('I am deleting')
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesQ = [];
    } else {
        notesQ = JSON.parse(notes);
    }

    notesQ.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesQ));
    showing_notes();
}

let serach = document.getElementById("searchTxt")
serach.addEventListener("input", function(){
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

