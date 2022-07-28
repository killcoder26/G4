import { Box, Button, Typography, Divider, Select } from "@mui/material";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import CancelIcon from "@mui/icons-material/Cancel";
//import useStyles from '@mui/material/styles';

// const styles = {
//   root: { },
//   paper: { borderRadius: 15 }
// }

const columns = [
  { field: "title", headerName: "Title", width: 190 },
  {
    field: "description",
    headerName: "Description",
    width: 690,
  },
  {
    field: "release_year",
    headerName: "Release Year",
    width: 100,
  },
  {
    field: "name",
    headerName: "Language",
    width: 100,
  },
  {
    field: "director",
    headerName: "Director",
    width: 160,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 90,
    renderCell: (cellValues) => {
      return (
        <Chip
          variant="outlined"
          label={cellValues.row.rating}
          sx={{ backgroundColor: "rgba(137, 254, 169,0.6)" }}
        ></Chip>
      );
    },
  },
  {
    field: "special_features",
    headerName: "Special Features",
    width: 250,
  },
];

function Grid() {
  const [page, setPage] = useState(5);
  const [addopen, setAddOpen] = useState(false);
  const [special_feature, setSpFeat] = useState([]);
  const [title, setTitle] = useState("");
  const [release_year, setRelease] = useState();
  const [description, setDesc] = useState("");
  const [name, setLang] = useState("");
  const [rating, setRating] = useState("");
  const [director, setDirector] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state?.user?.ArrayList || []);
  console.log(data);
  useEffect(() => {
    dispatch({ type: "FETCH_USER_START" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAddOpen = () => {
    setAddOpen(true);
  };

  const handleAddClose = () => {
    setAddOpen(false);
    window.location.reload();
  };
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 60 * 4.5 + 8,
        width: 500,
      },
    },
  };
  const variants = [
    { id: 1, name: "Behind the Scenes" },
    { id: 2, name: "Trailer" },
    { id: 3, name: "Commentaries" },
    { id: 4, name: "Deleted Scenes" },
  ];

  const handleChange = (event) => {
    let tmp = event.target.value;
    console.log(tmp);
    if (special_feature.includes(tmp)) {
      setSpFeat(special_feature.filter((item) => item !== tmp));
    }
    setSpFeat(event.target.value);
  };
  const handleDelete = (e, value) => {
    e.preventDefault();
    console.log("clicked delete");
    // eslint-disable-next-line array-callback-return
    setSpFeat(
      special_feature.filter((n) => {
        if (n !== value) return n;
      })
    );
  };

  const handleChangeR = (event) => {
    setRating(event.target.value);
  };
  const handleChangeL = (event) => {
    setLang(event.target.value);
  };

  const addAction = () => {
    setAddOpen(false);
    let special_features = special_feature.toString();
    
    dispatch({
      type: "POST_USER_START",
      payload: {
        title,
        description,
        release_year,
        director,
        name,
        rating,
        special_features,
      },
    });
    window.location.reload();
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "70vh",
          boxShadow: "2px 2px 10px #808080",
          borderRadius: 2,
          marginTop: 2,
        }}
      >
        <Typography sx={{ fontFamily: "Noto Sans", fontSize: 28, margin: 2 }}>
          Details
        </Typography>
        <Divider sx={{ backgroundColor: "skyblue" }} />
        <br />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#3457D5", borderRadius: 3, margin: 2 }}
          onClick={handleAddOpen}
        >
          <AddIcon />
          Add
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#3457D5", borderRadius: 3, margin: 2 }}
        >
          <EditIcon />
          Edit
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#3457D5", borderRadius: 3, margin: 2 }}
        >
          <DeleteIcon />
          Delete
        </Button>

        <Dialog
          PaperProps={{ style: { borderRadius: 15, width: 650, height: 700 } }}
          open={addopen}
          onClose={handleAddClose}
          className="dg"
          sx={{ borderRadius: 50, minWidth: 800 }}
        >
          <DialogTitle>
            <Typography
              sx={{
                fontFamily: "Georgia",
                fontSize: 32,
                fontWeight: "bold",
                overflowY: "hidden",
              }}
            >
              ADD Movie
            </Typography>
          </DialogTitle>
          <DialogContent sx={{ height: 800 }}>
            <div className="container2">
              <div className="item2">
                <Typography
                  sx={{
                    fontFamily: "Noto Sans",
                    fontSize: 18,
                    marginTop: 0.5,
                    fontWeight: 600,
                  }}
                >
                  Title
                  <br />
                  <TextField
                    type="text"
                    variant="outlined"
                    value={title}
                    sx={{ width: 430, marginRight: 20 }}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Noto Sans",
                    fontSize: 18,
                    marginTop: 0.5,
                    fontWeight: 600,
                  }}
                >
                  Release Year
                  <br />
                  <TextField
                    type="number"
                    variant="outlined"
                    value={release_year}
                    sx={{ width: 430, marginRight: 20 }}
                    onChange={(e) => setRelease(e.target.value)}
                  />
                </Typography>
              </div>
              <div className="item2">
                <Typography
                  sx={{
                    fontFamily: "Noto Sans",
                    fontSize: 18,
                    marginTop: 0.5,
                    fontWeight: 600,
                  }}
                >
                  Director
                  <br />
                  <TextField
                    type="text"
                    variant="outlined"
                    value={director}
                    sx={{ width: 430, marginRight: 20 }}
                    onChange={(e) => setDirector(e.target.value)}
                  />
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Noto Sans",
                    fontSize: 18,
                    marginTop: 0.5,
                    fontWeight: 600,
                  }}
                >
                  Special Features
                  <br />
                  <Select
                    multiple
                    value={special_feature}
                    onChange={handleChange}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((value) => (
                          <Chip
                            key={value}
                            label={value}
                            clickable
                            deleteIcon={
                              <CancelIcon
                                onMouseDown={(event) => event.stopPropagation()}
                              />
                            }
                            onDelete={(e) => handleDelete(e, value)}
                            onClick={() => console.log("clicked chip")}
                            sx={{ fontSize: 18 }}
                          />
                        ))}
                      </div>
                    )}
                    MenuProps={MenuProps}
                    sx={{ width: 430 }}
                  >
                    {variants.map((variant) => (
                      <MenuItem key={variant.id} value={variant.name}>
                        <Checkbox />
                        <ListItemText primary={variant.name} />
                      </MenuItem>
                    ))}
                  </Select>
                </Typography>
              </div>
              <div className="item2">
                <Typography
                  sx={{
                    fontFamily: "Noto Sans",
                    fontSize: 18,
                    marginTop: 0.5,
                    fontWeight: 600,
                  }}
                >
                  Rating
                  <br />
                  <Select
                    value={rating}
                    label="language"
                    onChange={handleChangeR}
                    sx={{ width: 430, marginRight: 20 }}
                  >
                    <MenuItem value={"G"}>G</MenuItem>
                    <MenuItem value={"PG"}>PG</MenuItem>
                    <MenuItem value={"PG-13"}>PG-13</MenuItem>
                    <MenuItem value={"NC-17"}>NC-17</MenuItem>
                  </Select>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Noto Sans",
                    fontSize: 18,
                    marginTop: 0.5,
                    fontWeight: 600,
                  }}
                >
                  Language
                  <br />
                  <Select
                    value={name}
                    label="language"
                    onChange={handleChangeL}
                    sx={{ width: 430 }}
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
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ background: "#04D4F0", color: "white" }}
              variant="filled"
              onClick={handleAddClose}
            >
              Cancel
            </Button>
            <Button
              sx={{ background: "#04D4F0", color: "white" }}
              variant="filled"
              onClick={addAction}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>

        <DataGrid
          rows={data}
          getRowId={(x) => x.film_id}
          columns={columns}
          pageSize={page}
          pagination
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </>
  );
}

export default Grid;
