import {
  gql,
  useQuery,
} from "@apollo/client";


export const LIST_SIMPLE = gql`
query {
	characters{
    results {
    id
    image
    name
    species
    gender
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
  }
}