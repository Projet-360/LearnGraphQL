import React, { useCallback, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { LIST_LAZY } from "../../api/gql/lazyQueries";
import tab from "./configLazyData";

const Lazy = () => {
    const [name, setName] = useState('');
    const [getData, { loading, data }] = useLazyQuery(LIST_LAZY);

    useEffect(() => {
    getData({
    variables: {
    name,
    }
    })
    }, [name]);

    console.log(data?.characters.results);

    return (
    <>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={data?.characters.results.map((option) => option.name)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params}  label="Personnages" />}
      />

      { !loading && data &&
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Espèces</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.characters.results.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.species}</TableCell>
              <TableCell>{row.genre}</TableCell>

              <TableCell>
                <img src={row.image} alt="" />
              </TableCell>

            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      }
    </>
    )
};

export default Lazy;