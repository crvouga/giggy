import {
  Button,
  Select,
  Container,
  AppBar,
  Toolbar,
  Typography,
  TextField,
} from "@mui/material";

export default function SessionCreate() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex" }}>
          <Typography sx={{ flex: 1 }} variant="h6">
            Create
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ my: 2 }}>
        <Select
          id="group"
          fullWidth
          label="Group"
          sx={{ marginBottom: 2 }}
        ></Select>

        <TextField fullWidth label="Session Name" sx={{ marginBottom: 2 }} />

        <TextField fullWidth label="Location" sx={{ marginBottom: 2 }} />

        <Button
          fullWidth
          size="large"
          variant="contained"
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
      </Container>
    </>
  );
}
