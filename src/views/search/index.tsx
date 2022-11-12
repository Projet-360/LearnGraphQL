import React, { useCallback, useEffect, useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { LIST_LAZY } from "../../api/gql/lazyQueries";
import { useLazyQuery } from "@apollo/client";

export default function CustomPaginationActionsTable() {
const [name, setName] = useState('');
const [getData, { error, loading, data, called }] = useLazyQuery(LIST_LAZY, {
  variables: {
    name,
  }
});

useEffect(() => {

getData({
  variables: {
    name,
  }
})

}, [name]);

return (
<>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={()=> getData()}>Rechercher</button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
            { !loading && data &&
            data?.characters.results.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <img src={row.image} style={{ width: '100px' }} />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.species}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.gender}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.type}
              </TableCell>
            </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </TableContainer>
</>
);
}