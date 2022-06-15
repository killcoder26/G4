import { Box, Button ,Typography,Divider} from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const columns = [
  { field: "title", headerName: "Title", width: 190 },
  {
    field: "desc",
    headerName: "Description",
    width: 190,
  },
  {
    field: "r_year",
    headerName: "Release Year",
    type: "number",
    width: 160,
  },
  {
    field: "lan",
    headerName: "Language",
    width: 160,
  },
  {
    field: "dir",
    headerName: "Director",
    width: 160,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 160,
    renderCell: (cellValues) => {
      return <Chip variant='outlined' label={cellValues.row.rating} sx={{backgroundColor:'rgba(137, 254, 169,0.6)'}} ></Chip>;
    },
  },
  {
    field: "sp_feat",
    headerName: "Special Features",
    width: 190,
  },
];

const rows = [
  {
    title: "Academy Dinosaur",
    desc: "This is a movie",
    r_year: 2009,
    lan: "English",
    dir: "Nolan",
    rating: "NC-17",
    sp_feat: "Deleted Scenes",
  },
];

function Grid() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "50vh",
        boxShadow: "2px 2px 10px #808080",
        borderRadius: 2,
        marginTop: 2,
      }}
    >
       <Typography sx={{ fontFamily: 'Noto Sans', fontSize: 28, margin: 2 }}>Details</Typography>
            <Button variant='contained' sx={{ backgroundColor: '#3457D5', borderRadius: 3, margin: 2 }}><AddIcon />Add</Button>
            <Button variant='contained' sx={{ backgroundColor: '#3457D5', borderRadius: 3, margin: 2 }}><EditIcon />Edit</Button>
            <Button variant='contained' sx={{ backgroundColor: '#3457D5', borderRadius: 3, margin: 2 }}><DeleteIcon />Delete</Button>
            <Divider sx={{ backgroundColor: 'skyblue' }} /><br />
      <DataGrid
        rows={rows}
        getRowId={(row) => row.title}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}

export default Grid;
