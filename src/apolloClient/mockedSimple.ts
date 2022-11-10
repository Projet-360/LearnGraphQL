import {LIST_SIMPLE} from "../api/gql/simpleQueries";

export const mockedSimple_1 = {
  request: {
    query: LIST_SIMPLE,
  },
  result: {
    data: {
      simple: {
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
