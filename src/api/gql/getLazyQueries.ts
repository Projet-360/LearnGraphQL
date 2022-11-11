import {
    gql,
    OperationVariables,
    QueryHookOptions,
    useQuery,
  } from "@apollo/client";
  
  //Schema
  export const LIST_LAZY = gql`
    query getLazyList($name: String) {
      characters ( 
        filter: {
          name: $name
        }
      ) {
        results {
          name
        }
      }
    }
  `;
  
  
  //Resolver
  export const useLazyList = (
    options?: QueryHookOptions<any, OperationVariables> | undefined
  ) => {
    const { error, loading, data } = useQuery(LIST_LAZY, options);
    
    return {
      error,
      loading,
      data,
    }
  };
  