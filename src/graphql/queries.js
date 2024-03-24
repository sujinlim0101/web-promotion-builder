/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPromoPage = /* GraphQL */ `
  query GetPromoPage($id: ID!) {
    getPromoPage(id: $id) {
      id
      info
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPromoPages = /* GraphQL */ `
  query ListPromoPages(
    $filter: ModelPromoPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPromoPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        info
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
