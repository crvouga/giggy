import {
  Avatar,
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchField from "components/SearchField";
import NextLink from "next/link";
import * as React from "react";

const Index = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex" }}>
          <Typography sx={{ flex: 1 }} variant="h6">
            Giggy
          </Typography>
          <NextLink passHref href="/account">
            <Avatar />
          </NextLink>
        </Toolbar>
      </AppBar>

      <Container sx={{ my: 2 }}>
        <SearchField />
      </Container>

      <NextLink passHref href="/session/create">
        <Link align="center">Create</Link>
      </NextLink>
    </>
  );
};

export default Index;
