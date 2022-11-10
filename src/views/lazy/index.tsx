import React, { useEffect, useState } from "react";
import { useLazyList } from "../../api/gql/lazyQueries";
import tab from "./configLazyData";

const Lazy = () => {
  const {error, loading, data} = useLazyList()

  return (
    <>
    { !loading && data &&
      
      data?.lazy?.items?.map( (item) => {
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

export default Lazy;
