import { Card, CardContent, Typography, IconButton } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

interface FolderProps {
  title: string;
  onClick: () => void;
  bgColor?: string;
}

export function FolderOutside({ title, onClick, bgColor }: FolderProps) {
  return (
    <Card
      onClick={onClick}
      sx={{
        minWidth: 200,
        cursor: "pointer",
        m: 1,
        backgroundColor: bgColor || "default",
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <IconButton>
          <FolderIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
