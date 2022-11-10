import {
  gql,
  useQuery,
} from "@apollo/client";


export const LIST_SIMPLE = gql`
  query {
    simple {
      items {
        id
        firstName
        lastName
        email
      }
    }   
  }
`;

export const useSimpleList = () => {
  const { error, loading, data } = useQuery(LIST_SIMPLE)  
  return {
    error,
    loading,
    data,
    triggerData : data?.simple?.items || null
  }
}