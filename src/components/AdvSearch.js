import { Button, Divider, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";

const AdvSearch = () => {
  const [language, setlang] = useState("");
  const [title, setMov] = useState("");
  const [director, setDir] = useState("");
  const [release_year1, setRy] = useState("");

  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    setlang(event.target.value);
  };

  const reset = () => {
    setMov("");
    setDir("");
    setRy("");
    setlang("");
  };

  const searchAction = () => {
    let release_year=release_year1.substring(0,4);
    dispatch({
      type: "SEARCH_USER_START",
      payload: {
        title,
        release_year,
        director,
        language
      },
    });
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          boxShadow: "2px 2px 10px #808080",
          borderRadius: 2,
          marginTop: 2,
        }}
      >
        <Typography
          sx={{ fontFamily: "Noto Sans", fontSize: 28, marginLeft: 2 }}
        >
          Advanced Search
        </Typography>
        <Divider sx={{ backgroundColor: "skyblue" }} />
        <div className="container">
          <div className="item">
            <Typography
              sx={{ fontFamily: "Noto Sans", fontSize: 16, marginTop: 1 }}
            >
              Movie
              <br />
              <TextField
                type="text"
                variant="outlined"
                value={title}
                sx={{ width: 330 }}
                onChange={(e) => setMov(e.target.value)}
              />
            </Typography>
            <Typography
              sx={{ fontFamily: "Noto Sans", fontSize: 16, marginTop: 1 }}
            >
              Release Year
              <br />
              <TextField
                type="date"
                variant="outlined"
                value={release_year1}
                sx={{ width: 330 }}
                onChange={(e) => setRy(e.target.value)}
              />
            </Typography>
          </div>
          <div className="item">
            <Typography
              sx={{ fontFamily: "Noto Sans", fontSize: 16, marginTop: 1 }}
            >
              Director
              <br />
              <TextField
                type="text"
                variant="outlined"
                value={director}
                sx={{ width: 330 }}
                onChange={(e) => setDir(e.target.value)}
              />
            </Typography>
            <Typography
              sx={{ fontFamily: "Noto Sans", fontSize: 16, marginTop: 1 }}
            >
              Language
              <br />
              <Select
                value={language}
                label="language"
                onChange={handleChange}
                sx={{ width: 330 }}
              >
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"Hindi"}>Hindi</MenuItem>
                <MenuItem value={"Tamil"}>Tamil</MenuItem>
                <MenuItem value={"Russian"}>Russian</MenuItem>
                <MenuItem value={"Chinese"}>Chinese</MenuItem>
              </Select>
            </Typography>
          </div>
        </div>
        <center>
          <Button
            variant="contained"
            onClick={searchAction}
            sx={{
              backgroundColor: "#3457D5",
              borderRadius: 3,
              marginBottom: 3,
              marginTop: 3,
            }}
          >
            <SearchIcon />
            Search
          </Button>
          <Button
            variant="contained"
            onClick={reset}
            sx={{
              backgroundColor: "#3457D5",
              borderRadius: 3,
              marginLeft: 2,
              marginBottom: 3,
              marginTop: 3,
            }}
          >
            <ClearIcon /> Reset
          </Button>
        </center>
      </Box>
    </>
  );
};

export default AdvSearch;
