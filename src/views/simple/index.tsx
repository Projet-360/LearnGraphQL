import React, { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useSimpleList } from "../../api/gql/simpleQueries";
import tab from "./configSimpleData";

const Simple = () => {
  const {error, loading, data} = useSimpleList()

  return (
    <Box sx={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "stretch", alignItems: "center", height: '100%', backgroundColor: '#838383', borderRadius: '20px' }}>
    { !loading && data &&
      
      data?.simple?.items?.map( (item) => {
        return (

          <Card key={item.id} sx={{ width: 300 }}>
          <CardContent>
            {
              tab?.map( ({dataKey, headerValue}) => 

                <div key={headerValue}>
                  <Typography variant="h5" component="div">
                    {headerValue}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item?.[dataKey]}
                  </Typography>
                </div>

              )
            }

            </CardContent>
          </Card>

        )
      })
    }
    </Box>
  );
};

export default Simple;
