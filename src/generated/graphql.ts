import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  careEvents: Array<CareEvent>;
};

export type Doctor = {
  __typename?: 'Doctor';
  id: Scalars['Int'];
  firstName: Scalars['String'];
};

export type CareEvent = {
  __typename?: 'CareEvent';
  id: Scalars['Int'];
  emoji?: Maybe<Scalars['String']>;
  doctor: Doctor;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type GetCareEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCareEventsQuery = (
  { __typename?: 'Query' }
  & { careEvents: Array<(
    { __typename?: 'CareEvent' }
    & Pick<CareEvent, 'id' | 'name' | 'price' | 'emoji'>
    & { doctor: (
      { __typename?: 'Doctor' }
      & Pick<Doctor, 'id' | 'firstName'>
    ) }
  )> }
);


export const GetCareEventsDocument = gql`
    query getCareEvents {
  careEvents {
    id
    name
    price
    emoji
    doctor {
      id
      firstName
    }
  }
}
    `;

/**
 * __useGetCareEventsQuery__
 *
 * To run a query within a React component, call `useGetCareEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCareEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCareEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCareEventsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCareEventsQuery, GetCareEventsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCareEventsQuery, GetCareEventsQueryVariables>(GetCareEventsDocument, baseOptions);
      }
export function useGetCareEventsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCareEventsQuery, GetCareEventsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCareEventsQuery, GetCareEventsQueryVariables>(GetCareEventsDocument, baseOptions);
        }
export type GetCareEventsQueryHookResult = ReturnType<typeof useGetCareEventsQuery>;
export type GetCareEventsLazyQueryHookResult = ReturnType<typeof useGetCareEventsLazyQuery>;
export type GetCareEventsQueryResult = ApolloReactCommon.QueryResult<GetCareEventsQuery, GetCareEventsQueryVariables>;