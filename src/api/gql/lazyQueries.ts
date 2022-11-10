import {
  gql,
  useQuery,
} from "@apollo/client";


export const LIST_LAZY = gql`
  query {
    lazy {
      items {
        id
        firstName
        lastName
        email
      }
    }   
  }
`;

export const useLazyList = () => {
  const { error, loading, data } = useQuery(LIST_LAZY)  
  return {
    error,
    loading,
    data,
    triggerData : data?.lazy?.items || null
  }
}