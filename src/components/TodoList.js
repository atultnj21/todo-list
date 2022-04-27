import { Button, Typography, Grid ,Container} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../App.css";
import CreateTaskModal from "./CreateTaskModal";
import NoteCard from "./NoteCard";

const useStyles = makeStyles({
  // for styling the CreateTask Button
  button: {
    backgroundColor: "#8D8DAA",
    color: "#DFDFDE",
    "&:hover": {
      border: "2px solid #8D8DAA",
      color: "#8D8DAA",
      backgroundColor: "#DFDFDE",
    },
  },
});

const TodoList = () => {
  const classes = useStyles();

  // States for Managing CreateTask Dialog
  const [openCreate, setOpenCreate] = useState(false);

  const handleCloseCreate = () => {
    setOpenCreate(false);
  };
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setOpenCreate(false);
  };

  const UpdateListArray = (taskObj, index) => {
    let tempList = taskList;
    tempList[index] = taskObj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  return (
    <>
      <div className="header" style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ color: "#8D8DAA", padding: "0 0 1% 0" }}
        >
          What are we doing today ? ...
        </Typography>
        <Button
          className={classes.button}
          variant="outlined"
          endIcon={<KeyboardArrowRightIcon />}
          onClick={() => setOpenCreate(true)}
        >
          Create Task
        </Button>
      </div>
      <Container>
        <Grid container spacing={3}>
          {taskList.map((obj, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <NoteCard
                taskObj={obj}
                index={index}
                deleteTask={deleteTask}
                UpdateListArray={UpdateListArray}
              />
              {/* {index} */}
            </Grid>
          ))}
        </Grid>
        </Container>
      <CreateTaskModal
        handleCloseCreate={handleCloseCreate}
        openCreate={openCreate}
        saveTask={saveTask}
      />
    </>
  );
};

export default TodoList;
