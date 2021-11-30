import Cancel from "@mui/icons-material/Cancel";
import Search from "@mui/icons-material/Search";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import * as React from "react";

export default function SearchField(props: TextFieldProps) {
  return (
    <TextField
      label="Search"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Cancel />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
