import React, { useEffect, useState } from "react";
import { useSimpleList } from "../../api/gql/simpleQueries";
import tab from "./configSimpleData";

const Simple = () => {
  const {error, loading, data} = useSimpleList()

  return (
    <>
    { !loading && data &&
      
      data?.simple?.items?.map( (item) => {
        return (
          tab?.map( ({dataKey}) => 
            <div key={dataKey}>{item?.[dataKey]}</div>
          )
        )
      })
    }

    </>
  );
};

export default Simple;
