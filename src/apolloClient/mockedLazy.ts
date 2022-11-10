import {LIST_LAZY} from "../api/gql/lazyQueries";

export const mockedSimple_1 = {
  request: {
    query: LIST_LAZY,
  },
  result: {
    data: {
      lazy: {
        items: [{
            id: "contact-1",
            firstName: "contact-firstName-1",
            lastName: "contact-lastName-1",
            email: "email1",
          },
          {
            id: "contact-2",
            firstName: "contact-firstName-2",
            lastName: "contact-lastName-2",
            email: "email2",
          },
          {
            id: "contact-3",
            firstName: "contact-firstName-3",
            lastName: "contact-lastName-3",
            email: "email3",
          },
        ],
      },
    },
  },
};
