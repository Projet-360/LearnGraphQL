import {
  gql,
  OperationVariables,
  QueryHookOptions,
  useQuery,
} from "@apollo/client";

//Schema
export const LIST_LAZY = gql`
  query getLazyList($page: Int, $itemsPerPage: Int, $searchText: String) {
    lazy(
      page: $page
      itemsPerPage: $itemsPerPage
      searchText: $searchText
    ) {
      items {
        id
        name
        address
        manager {
          id
          firstName
          lastName
        }
        nbSites
        nbInterventions
      }
      paginationInfo {
        totalCount
      }
    }
  }
`;


//Resolver
export const useLazyList = (
  options?: QueryHookOptions<any, OperationVariables> | undefined
) => {
  const { loading, data } = useQuery(LIST_LAZY, options);

  return {
    loading,
    data: data?.lazy?.items || null,
  };
};
