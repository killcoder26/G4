import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <>
      <Box id="header"
        sx={{
          width: "100%",
          backgroundColor: "white",
        }}>
        <Typography sx={{ fontSize: 34, fontFamily: 'Noto Sans', fontWeight: 600 }}><ArrowRightAltIcon /> Movie
        </Typography>
        <Avatar id='ava' sx={{  marginTop: 0.5, border: 1, borderColor: 'grey' }} alt='pp' src="https://res.cloudinary.com/mycloud2604/image/upload/v1655155120/jeffrey.mabazza5264eaa375b39_vvqdqk.png" />
      </Box>
      <Divider />
    </>
  );
}

export default Header;
