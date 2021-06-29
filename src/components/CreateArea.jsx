import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name] : value
            }
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    const [isClicked, setClick] = useState(false);

    function handleClick() {
        setClick(true);
    }


  return (
    <div>
      <form className="create-note">
        {isClicked? <input name="title" value={note.title} onChange={handleChange} placeholder="Title" /> : null}
        <textarea name="content" value={note.content} onChange={handleChange} onClick={handleClick} placeholder="Take a note..." rows={isClicked? "3" : "1"} />
        <Zoom in={isClicked}>
            <Fab onClick={submitNote}>
                <AddIcon />
            </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
