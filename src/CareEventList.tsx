import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from '@apollo/client'
import { GetCareEventsQuery, useGetCareEventsQuery } from './generated/graphql'

// 1. Update the query
const CARE_EVENTS_QUERY = gql`
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
`

export const CareEventList = () => {
    // 2. Type that to make deam come true
    const { data } = useQuery<GetCareEventsQuery>(CARE_EVENTS_QUERY)

    // Bonus: Use generated hook
    // const { data } = useGetCareEventsQuery()

    if (data === undefined) return <div>Loading...</div>

    return (
        <div className="flex flex-col">
            {/* 3. Remove any */}
            {data.careEvents.map((careEvent) => (
                <div
                    key={careEvent.id}
                    className="flex flex-row justify-between items-center w-full mb-6"
                >
                    <div className="flex flex-row items-center space-x-3">
                        <div className="text-3xl">{careEvent.emoji}</div>
                        <div className="flex flex-col">
                            <div className="text-grey-800 font-light">
                                {careEvent.name}
                            </div>
                            <div className="text-alan-indigo">
                                vu par {careEvent.doctor.firstName}
                            </div>
                        </div>
                    </div>
                    <div className="font-medium text-lg text-gray-900">
                        {careEvent.price}
                    </div>
                </div>
            ))}
        </div>
    )
}
