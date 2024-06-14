import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Task } from "./Task";

interface TaskItem {
  id: number;
  title: string;
  description: string;
  doByDate: string;
}

interface FolderInsideProps {
  title: string;
  onBack: () => void;
}

export function FolderInside({ title, onBack }: FolderInsideProps) {
  const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);

  // Sample tasks for demonstration purposes
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: 1,
      title: "Task 1",
      description: "Description of Task 1",
      doByDate: "2024-06-30",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description of Task 2",
      doByDate: "2024-07-15",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description of Task 3",
      doByDate: "2024-07-01",
    },
  ]);

  const handleTaskClick = (task: TaskItem) => {
    setSelectedTask(task);
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setSelectedTask(null); // Clear selected task after deletion if it's the current one
  };

  return (
    <Container sx={{ mt: 4, position: "relative" }}>
      <Typography variant="h4" component="div" sx={{ mt: 6 }}>
        {title} Interior
      </Typography>
      {selectedTask ? (
        <Task
          id={selectedTask.id}
          initialTitle={selectedTask.title}
          initialDescription={selectedTask.description}
          initialDoByDate={selectedTask.doByDate}
          onDelete={() => handleDeleteTask(selectedTask.id)}
        />
      ) : (
        <>
          <Typography variant="body1" component="div" sx={{ mt: 2 }}>
            Select a task to view details:
          </Typography>
          <List sx={{ mt: 2 }}>
            {tasks.map((task) => (
              <ListItem
                key={task.id}
                button
                onClick={() => handleTaskClick(task)}
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  mb: 1,
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                <ListItemText primary={task.title} />
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            onClick={onBack}
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </>
      )}
    </Container>
  );
}
