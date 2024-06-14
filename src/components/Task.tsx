import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

interface TaskProps {
  id: number;
  initialTitle: string;
  initialDescription: string;
  initialDoByDate: string;
  onDelete: () => void;
}

export function Task({
  id,
  initialTitle,
  initialDescription,
  initialDoByDate,
  onDelete,
}: TaskProps) {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [doByDate, setDoByDate] = useState(initialDoByDate);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Save logic here, e.g., send updated data to backend
    console.log("Saving changes...");
    // After saving, exit editing mode
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset fields to initial values
    setTitle(initialTitle);
    setDescription(initialDescription);
    setDoByDate(initialDoByDate);
    // Exit editing mode
    setIsEditing(false);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="div" gutterBottom>
        Task Details
      </Typography>
      {isEditing ? (
        <>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Title"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Description"
              multiline
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Do by Date"
              type="date"
              fullWidth
              value={doByDate}
              onChange={(e) => setDoByDate(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <IconButton color="primary" onClick={handleSave}>
              <SaveIcon />
            </IconButton>
            <IconButton color="error" onClick={handleCancel}>
              <CancelIcon />
            </IconButton>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" component="div">
              Title: {title}
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" component="div">
              Description: {description}
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" component="div">
              Do by Date: {doByDate}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
            <IconButton color="error" onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => setIsEditing(true)}>
              <EditIcon />
            </IconButton>
          </Box>
        </>
      )}
    </Container>
  );
}
