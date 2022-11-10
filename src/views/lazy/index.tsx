import React, { useCallback, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";


import { LIST_LAZY } from "../../api/gql/lazyQueries";
import tab from "./configLazyData";

const Lazy = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);    
  
  const [getData, { loading, data }] = useLazyQuery(LIST_LAZY);

  
  useEffect(() => {    
    getData({
      variables: {
        page,
        itemsPerPage: rowsPerPage,
      }
    })
  }, [rowsPerPage, page]);
  

  const handleChangePage = useCallback((e, newPage) => setPage(newPage), []);
  
  const handleChangeRowsPerPage = useCallback((e) => {
    setRowsPerPage(e.target.value);
    setPage(0);
  }, []);

  return (
    <>
      { !loading && data &&
        <>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {
                    tab?.map( ({headerValue}) => 
                        <TableCell key={headerValue}>{headerValue}</TableCell>
                    )
                  }
                </TableRow>
              </TableHead>
              <TableBody>
              {
                data?.lazy.items.map( (item) => {
                  return (
                    <TableRow key={item.id}>
                      {
                        tab?.map(({dataKey, personalizedCell}) => 
                          <TableCell key={dataKey}>
                          {personalizedCell ? personalizedCell(item) : item?.[dataKey]}
                          </TableCell>
                        )
                      }
                    </TableRow>
                  )}
                )
              }
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[3, 5]}
            component="div"
            count={data?.lazy.paginationInfo?.totalCount || 1}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </>
    }      
    </>
  );
};

export default Lazy;
