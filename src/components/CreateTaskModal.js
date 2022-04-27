import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@material-ui/styles";

const styles = {
  textfeild: {
    backgroundColor: "#F1DDBF",
    borderRadius: 2,
  },

  dialog: {
    backgroundColor: "#525E75",
    color: "#F1DDBF",
    textAlign: "center",
  },
};

const useStyles = makeStyles({
  button: {
    backgroundColor: "#8D8DAA",
    color: "#DFDFDE",
    padding: 2,
    height: 30,
    width: "50%",
    borderColor: "#DFDFDE",
    "&:hover": {
      border: "2px solid #8D8DAA",
      color: "#8D8DAA",
      backgroundColor: "#DFDFDE",
    },
  },
});

function CreateTaskModal({ openCreate, handleCloseCreate, saveTask }) {
  const classes = useStyles();
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const [errorTask, setErrorTask] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "task") {
      setTask(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = () => {

    setErrorTask(false)
    setErrorDescription(false)
    if(task===''){
      setErrorTask(true)
    }
    if(description===''){
      setErrorDescription(true)
    }

    if(task&&description){
    let taskObj = {};
    taskObj["Name"] = task;
    taskObj["Description"] = description;
    saveTask(taskObj);
    }
  };

  return (
    <div>
      <Dialog open={openCreate} onClose={handleCloseCreate}>
        <DialogTitle sx={styles.dialog}>Create New Note </DialogTitle>
        <DialogContent sx={styles.dialog}>
          <form>
            <label>Task Name</label>
            <TextField
              error={errorTask}
              sx={styles.textfeild}
              name="task"
              required
              fullWidth
              variant="outlined"
              value={task}
              onChange={handleChange}
            />
            <label>Description</label>
            <TextField
              error={errorDescription}
              sx={styles.textfeild}
              name="description"
              required
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={description}
              onChange={handleChange}
            />
          </form>
        </DialogContent>
        <DialogActions sx={styles.dialog}>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={handleSave}
          >
            CREATE
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={() => handleCloseCreate()}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default CreateTaskModal;
