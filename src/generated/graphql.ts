import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<World>;
  worlds?: Maybe<Array<World>>;
};


export type QueryHelloArgs = {
  world?: Maybe<Scalars['String']>;
};

export type World = {
  __typename?: 'World';
  id: Scalars['Int'];
  name: Scalars['String'];
  count?: Maybe<Scalars['Float']>;
};



export type GetWorldsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorldsQuery = (
  { __typename?: 'Query' }
  & { worlds?: Maybe<Array<(
    { __typename?: 'World' }
    & Pick<World, 'id' | 'name'>
  )>> }
);


export const GetWorldsDocument = gql`
    query getWorlds {
  worlds {
    id
    name
  }
}
    `;

/**
 * __useGetWorldsQuery__
 *
 * To run a query within a React component, call `useGetWorldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorldsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWorldsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetWorldsQuery, GetWorldsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetWorldsQuery, GetWorldsQueryVariables>(GetWorldsDocument, baseOptions);
      }
export function useGetWorldsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetWorldsQuery, GetWorldsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetWorldsQuery, GetWorldsQueryVariables>(GetWorldsDocument, baseOptions);
        }
export type GetWorldsQueryHookResult = ReturnType<typeof useGetWorldsQuery>;
export type GetWorldsLazyQueryHookResult = ReturnType<typeof useGetWorldsLazyQuery>;
export type GetWorldsQueryResult = ApolloReactCommon.QueryResult<GetWorldsQuery, GetWorldsQueryVariables>;