import { Box, Button, Chip, Divider, Typography } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

function createData(chk, title, desc, r_year, lang, dir, rating, sp_feat) {
    return { chk, title, desc, r_year, lang, dir, rating, sp_feat };
}

const rows = [
    createData(true, 'Academy Dinosaur', 'Animated movie', 2009, 'English', 'Nolan', 'NC-17', 'VFX Scenes'),
    createData(false, 'Academy Dinosaur', 'Animated movie', 2009, 'English', 'Nolan', 'PG-13', 'VFX Scenes'),
    createData(false, 'Academy Dinosaur', 'Animated movie', 2009, 'English', 'Nolan', 'PG', 'VFX Scenes'),
];


const TableGrid = () => {
    return (
        <Box sx={{ width: '100%', boxShadow: '2px 2px 10px #808080', marginTop: 2, borderRadius: 3 }}>
            <Typography sx={{ fontFamily: 'Noto Sans', fontSize: 28, margin: 2 }}>Details</Typography>
            <Button variant='contained' sx={{ backgroundColor: '#3457D5', borderRadius: 3, margin: 2 }}><AddIcon />Add</Button>
            <Button variant='contained' sx={{ backgroundColor: '#3457D5', borderRadius: 3, margin: 2 }}><EditIcon />Edit</Button>
            <Button variant='contained' sx={{ backgroundColor: '#3457D5', borderRadius: 3, margin: 2 }}><DeleteIcon />Delete</Button>
            <Divider sx={{ backgroundColor: 'skyblue' }} /><br />
            <TableContainer component={Box}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>  </TableCell>
                            <TableCell><b>Title</b></TableCell>
                            <TableCell ><b>Description</b></TableCell>
                            <TableCell ><b>Release Year</b></TableCell>
                            <TableCell ><b>Language</b></TableCell>
                            <TableCell ><b>Director</b></TableCell>
                            <TableCell ><b>Rating</b></TableCell>
                            <TableCell ><b>Special Features</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow>
                                <TableCell ><Checkbox isChecked={row.chk} /></TableCell>
                                <TableCell >{row.title}</TableCell>
                                <TableCell >{row.desc}</TableCell>
                                <TableCell >{row.r_year}</TableCell>
                                <TableCell >{row.lang}</TableCell>
                                <TableCell >{row.dir}</TableCell>
                                <TableCell ><Chip label={row.rating} variant="outlined" sx={{ backgroundColor: '#76ff7a', color: 'black' }} /></TableCell>
                                <TableCell >{row.sp_feat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default TableGrid