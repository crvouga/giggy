import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GoogleIcon from "@mui/icons-material/Google";
import {
  AppBar,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useMutation } from "react-query";
import { signIn } from "src/sign-in";
import Loading from "components/Loading";

export default function SignIn() {
  const mutation = useMutation(signIn);

  return (
    <>
      <Loading open={mutation.status === "loading"} label="Signing In" />

      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex" }}>
          <Typography sx={{ flex: 1 }} variant="h6">
            Sign In
          </Typography>
        </Toolbar>
      </AppBar>

      <List>
        <ListItem
          divider
          button
          onClick={() => mutation.mutate({ type: "google" })}
        >
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
