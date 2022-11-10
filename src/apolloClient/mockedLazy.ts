import {
  LIST_LAZY
} from "../api/gql/lazyQueries";

export const mockedLazy_1 = {
  request: {
    query: LIST_LAZY,
    variables: {
      page: 0,
      itemsPerPage: 3,
    },
  },
  result: {
    data: {
      lazy: {
        paginationInfo: {
          totalCount: 6,
        },        
        items: [{
            id: "customer-1",
            name: "customer1",
            address: "Adresse 1",
            manager: {
              id: "1",
              firstName: "first1",
              lastName: "last 1",
            },
            nbSites: "user-1",
            nbInterventions: "10",
          },
          {
            id: "customer-2",
            name: "customer2",
            address: "Adresse 2",
            manager: {
              id: "2",
              firstName: "first2",
              lastName: "last 2",
            },
            nbSites: "user-2",
            nbInterventions: "20",
          },
          {
            id: "customer-3",
            name: "customer3",
            address: "Adresse 3",
            manager: {
              id: "user-3",
              firstName: "first3",
              lastName: "last 3",
            },
            nbSites: "3",
            nbInterventions: "30",
          },
        ],
      },
    },
  },
};

export const mockedLazy_2 = {
  request: {
    query: LIST_LAZY,
    variables: {
      page: 1,
      itemsPerPage: 3,
    },
  },
  result: {
    data: {
      lazy: {
        paginationInfo: {
          totalCount: 6,
        },        
        items: [{
            id: "customer-4",
            name: "customer4",
            address: "Adresse 4",
            manager: {
              id: "4",
              firstName: "first4",
              lastName: "last 4",
            },
            nbSites: "user-4",
            nbInterventions: "40",
          },
          {
            id: "customer-5",
            name: "customer5",
            address: "Adresse 5",
            manager: {
              id: "5",
              firstName: "first5",
              lastName: "last 5",
            },
            nbSites: "user-5",
            nbInterventions: "50",
          },
          {
            id: "customer-6",
            name: "customer6",
            address: "Adresse 6",
            manager: {
              id: "user-6",
              firstName: "first6",
              lastName: "last 6",
            },
            nbSites: "6",
            nbInterventions: "60",
          },
        ],
      },
    },
  },
};

export const mockedLazy_3 = {
  request: {
    query: LIST_LAZY,
  },
  result: {
    data: {
      lazy: {
        paginationInfo: {
          totalCount: 6,
        },        
        items: [{
            id: "customer-1",
            name: "customer1",
            address: "Adresse 1",
            manager: {
              id: "1",
              firstName: "first1",
              lastName: "last 1",
            },
            nbSites: "user-1",
            nbInterventions: "10",
          },
          {
            id: "customer-2",
            name: "customer2",
            address: "Adresse 2",
            manager: {
              id: "2",
              firstName: "first2",
              lastName: "last 2",
            },
            nbSites: "user-2",
            nbInterventions: "20",
          },
          {
            id: "customer-3",
            name: "customer3",
            address: "Adresse 3",
            manager: {
              id: "user-3",
              firstName: "first3",
              lastName: "last 3",
            },
            nbSites: "3",
            nbInterventions: "30",
          },
          {
            id: "customer-4",
            name: "customer4",
            address: "Adresse 4",
            manager: {
              id: "4",
              firstName: "first4",
              lastName: "last 4",
            },
            nbSites: "user-4",
            nbInterventions: "40",
          },
          {
            id: "customer-5",
            name: "customer5",
            address: "Adresse 5",
            manager: {
              id: "5",
              firstName: "first5",
              lastName: "last 5",
            },
            nbSites: "user-5",
            nbInterventions: "50",
          },
        ],
      },
    },
  },
};

export const mockedLazy_4 = {
  request: {
    query: LIST_LAZY,
  },
  result: {
    data: {
      lazy: {
        paginationInfo: {
          totalCount: 6,
        },        
        items: [{
          id: "customer-6",
          name: "customer6",
          address: "Adresse 6",
          manager: {
            id: "user-6",
            firstName: "first6",
            lastName: "last 6",
          },
          nbSites: "6",
          nbInterventions: "60",
        }, ],
      },
    },
  },
};