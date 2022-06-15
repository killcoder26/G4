import { Button, Divider, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const AdvSearch = () => {
  const [lang_arr, setlang] = useState('');

  const handleChange = (event) => {
    setlang(event.target.value);
  };

  const [mov, setMov] = useState('');
  const [dir, setDir] = useState('');
  const [ry, setRy] = useState('');

  const reset = () => {
    setMov('');
    setDir('');
    setRy('');
    setlang('');
  }
  const val = '';
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 'auto',
          boxShadow: "2px 2px 10px #808080",
          borderRadius: 2,
          marginTop: 2
        }}
      >
        <Typography
          sx={{ fontFamily: "Noto Sans", fontSize: 28, marginLeft: 2 }}
        >
          Advanced Search
        </Typography>
        <Divider sx={{ backgroundColor: 'skyblue' }} />
        <div className="container">
          <div className="item"><Typography sx={{ fontFamily: 'Noto Sans', fontSize: 16, marginTop: 1 }} >Movie<br />
            <TextField type="text" variant="outlined" sx={{ width: 330 }} onChange={setMov} />
          </Typography>
            <Typography sx={{ fontFamily: 'Noto Sans', fontSize: 16, marginTop: 1 }}>Release Year<br />
              <TextField type="date" variant="outlined" sx={{ width: 330 }} onChange={setRy} />
            </Typography>
          </div>
          <div className="item">
            <Typography sx={{ fontFamily: 'Noto Sans', fontSize: 16, marginTop: 1 }} >Director<br />
              <TextField type="text" variant="outlined" sx={{ width: 330 }} onChange={setDir} />
            </Typography>
            <Typography sx={{ fontFamily: 'Noto Sans', fontSize: 16, marginTop: 1 }}>Language<br />
              <Select
                value={lang_arr}
                label="language"
                onChange={handleChange}
                sx={{ width: 330 }}
              >
                <MenuItem value={'English'}>English</MenuItem>
                <MenuItem value={'Hindi'}>Hindi</MenuItem>
                <MenuItem value={'Tamil'}>Tamil</MenuItem>
                <MenuItem value={'Russian'}>Russian</MenuItem>
                <MenuItem value={'Chinese'}>Chinese</MenuItem>
              </Select>
            </Typography>
          </div>
        </div><center>
          <Button variant='contained' sx={{ backgroundColor: '#3457D5', borderRadius: 3, marginBottom: 3, marginTop: 3 }}><SearchIcon />Search</Button>
          <Button variant='contained' onCLick={reset} sx={{ backgroundColor: '#3457D5', borderRadius: 3, marginLeft: 2, marginBottom: 3, marginTop: 3 }}><ClearIcon /> Reset</Button>
        </center>
      </Box>
    </>
  );
};

export default AdvSearch;
