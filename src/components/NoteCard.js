import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { DeleteOutlined } from "@mui/icons-material";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import EditTaskModal from "./EditTaskModal";

const NoteCard = ({ taskObj, index, deleteTask, UpdateListArray }) => {
  const handleDelete = () => {
    deleteTask(index);
  };
  // States for Managing EditTask Dialog
  const [openEdit, setOpenEdit] = useState(false);

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const updateTask = (taskObj) => {
    UpdateListArray(taskObj, index);
  };


  return (
    <div>
      <Card
        elevation={4}
        sx={{ backgroundColor: "#DFDFDE" ,  maxWidth: 320,
        margin: "auto", 
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }}}
      >
        <CardHeader
          action={
            <>
              <IconButton onClick={handleDelete}>
                <DeleteOutlined />
              </IconButton>

              <IconButton onClick={() => setOpenEdit(true)}>
                <ModeEditTwoToneIcon />
              </IconButton>
            </>
          }
          title={
            <Typography variant="h5" style={{ color: "#8D8DAA" }}>
              {taskObj.Name}
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="body2" style={{ color: "#8D8DAA" }}>
            {taskObj.Description}
          </Typography>
        </CardContent>
      </Card>
      <EditTaskModal
        openEdit={openEdit}
        handleCloseEdit={handleCloseEdit}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};

export default NoteCard;
