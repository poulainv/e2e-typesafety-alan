import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from '@apollo/client'
import { GetCareEventsQuery } from './generated/graphql'
import { CareEventList } from './CareEventList'

export default () => {
    return (
        <div className="w-full relative h-screen flex flex-col font-body bg-grey-100 p-8">
            <h1 className="text-2xl font-extrabold text-grey-900 border-b-4 border-blue-300 mb-10">
                Mes soins
            </h1>
            <CareEventList />
        </div>
    )
}
