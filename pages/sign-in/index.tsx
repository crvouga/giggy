import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GoogleIcon from "@mui/icons-material/Google";
import {
  AppBar, List,
  ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Toolbar,
  Typography
} from "@mui/material";

export default function SignIn() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex" }}>
          <Typography sx={{ flex: 1 }} variant="h6">
            Sign In
          </Typography>
        </Toolbar>
      </AppBar>

      <List>
        <ListItem divider button>
          <ListItemIcon>
            <GoogleIcon />
          </ListItemIcon>
          <ListItemText primary="Sign In With Google" />
          <ListItemSecondaryAction>
            <ChevronRightIcon />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </>
  );
}
