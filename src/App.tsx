import { useCallback, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import "./App.css";
import { FolderOutside } from "./components/FolderOutside";
import { FolderInside } from "./components/FolderInside";

function App() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const handleFolderClick = useCallback((title: string) => {
    setSelectedFolder(title);
  }, []);
  const handleBack = useCallback(() => {
    setSelectedFolder(null);
  }, []);
  const folders = [
    { title: "Do It Now", bgColor: "lightblue" },
    { title: "Take Action", bgColor: "lightgreen" },
    { title: "Waiting For", bgColor: "lightcoral" },
    { title: "General", bgColor: "lightgoldenrodyellow" },
    { title: "Project", bgColor: "lightpink" },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      {selectedFolder ? (
        <FolderInside title={selectedFolder} onBack={handleBack} />
      ) : (
        <>
          <Typography variant="h3" component="div" gutterBottom>
            Action Minder
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {folders.map((folder) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={folder.title}>
                <FolderOutside
                  title={folder.title}
                  onClick={() => handleFolderClick(folder.title)}
                  bgColor={folder.bgColor}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}

export default App;
