import React, { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


import { useSimpleList } from "../../api/gql/simpleQueries";

const Simple = () => {
  const { error, loading, data } = useSimpleList()

  return (
    <Box sx={{padding: 2, display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "stretch", alignItems: "center", height: '100%', backgroundColor: '#838383', borderRadius: '20px' }}>
      {
        data?.characters?.results?.map( (item) => {
          return (
            <Card key={item.id} sx={{ width: 350, height: 320, margin: 2}}>
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.species}
              </Typography>
            </CardContent>
          </Card>
          )

        }) 
        }
    </Box>
  );
};

export default Simple;
