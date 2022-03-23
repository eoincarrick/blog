import { request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHQL__KEY;

export const getCharacterDetails = async () => {
  const query = gql`
    query MyQuery {
      characters {
        name
        name_as
        image {
          url
        }
        slug
        twitter
        ig
        content {
          raw
        }
        short_text
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.characters;
};
