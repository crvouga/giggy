import {
  AppBar,
  Avatar,
  Button,
  Container,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Account() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex" }}>
          <Typography sx={{ flex: 1 }} variant="h6">
            Account
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ my: 2 }}></Container>
    </>
  );
}
