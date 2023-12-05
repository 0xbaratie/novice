import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";

const client = new ApolloClient({
  uri: "",
  cache: new InMemoryCache(),
  headers: { Authorization: "AIRSTACK_API_KEY" || "" },
});

export async function FarcasterAccount(address: string): Promise<any> {
  const query = gql`
      query FarcasterAccount {
        Wallet(input: {identity: "${address}", blockchain: ethereum}) {
          socials(input: {filter: {dappName: {_eq: farcaster}}}) {
            dappName
            profileName
          }
        }
      }
    `;

  const response = await client.query({
    query,
  });
  return response.data;
}
