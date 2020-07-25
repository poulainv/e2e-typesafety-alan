import React from 'react'
import gql from 'graphql-tag'
import { useGetWorldsQuery } from './generated/graphql'

gql`
    query getWorlds {
        worlds {
            id
            name
        }
    }
`

export default () => {
    const { data, loading } = useGetWorldsQuery({ variables: {} })
    if (!data || loading) return <div> Loading ... </div>
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center font-body bg-grey-100">
            <div className="text-6xl font-black">
                <div className="text-grey-900">Nous sommes Alan,</div>
                <div className="text-alan-green">
                    l'assurance santé qui fait simple.
                </div>
            </div>
            <div className="ml-4 space-y-3 w-full max-w-xl rounded-lg bg-white p-4">
                <div className="flex space-x-2">
                    <div className="rounded overflow-hidden w-12 h-12 flex-shrink-0">
                        <img src="https://ca.slack-edge.com/T053BSKET-UTADDH24C-a0bdb6906fc8-48" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-baseline space-x-2">
                            <div className="text-grey-900 font-medium">
                                Vincent D
                            </div>
                            <div className="text-grey-500"> • </div>
                            <div className="text-grey-500 text-sm">
                                Engineering
                            </div>
                        </div>
                        <div className="flex items-baseline space-x-2">
                            <div className="bg-alan-yellow text-sm text-grey-800 px-1 font-medium">
                                @crew-member-success
                            </div>
                            <div className="bg-alan-yellow text-sm text-grey-800 px-1 font-medium">
                                @content_crew
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="mt-4 flex flex-row space-x-8 items-center">
                        <div className="flex-shrink-0">☀️</div>
                        <ul className="flex flex-col space-y-px list-disc">
                            <li className="text-grey-800 font-light text-sm">
                                Very happy to have organized my first Care team
                                event, and that the team liked it 😊
                            </li>
                            <li className="text-grey-800 font-light text-sm">
                                The Care AHA went well 🎉
                            </li>
                            <li className="text-grey-800 font-light text-sm">
                                I’m on holidays at the end of the week and I’m
                                happy cause I need it 😅
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-row space-x-8 items-center">
                        <div className="flex-shrink-0">🔥</div>
                        <ul className="flex flex-col space-y-px list-disc">
                            <li className="text-grey-800 font-light text-sm">
                                Tough nights with Winston at the moment, but
                                managing well thanks to Portugese sun
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-px bg-grey-200 w-full my-4"></div>
                <div className="space-y-6 mt-2">
                    <div className="mt-4 flex flex-row space-x-8 items-center">
                        <div>🎯</div>
                        <div className="space-y-3">
                            <div className="font-medium text-alan-indigo">
                                Last week objectives
                            </div>
                            <ul className="text-grey-800 font-light text-sm list-disc">
                                <li> Ramp up on HTML PDFs creation </li>
                                <li>
                                    General Conditions: design document V0 and
                                    prepare back and forth on content design -
                                    Drive{' '}
                                </li>
                                <li>
                                    Particular Conditions: designed document V0
                                    - Drive{' '}
                                </li>
                                <li>
                                    SEPA mandate: designed document V0 - Drive
                                </li>
                                <li>
                                    Insurance Card: update card design following
                                    card number change (23 numbers instead of
                                    10) - Issue{' '}
                                </li>
                                <li> Write 2 months self-review</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-row space-x-8 items-center">
                        <div>🚀</div>
                        <div className="space-y-3">
                            <div className="font-medium text-alan-indigo">
                                Next week objectives
                            </div>
                            <ul className="text-grey-800 font-light text-sm">
                                <li>
                                    🇹🇩 Find a Doctor: challenge scope. Can we do
                                    something more minimal?
                                </li>
                                <li>
                                    🇹🇩 Documents: implement highlights and
                                    comments on all documents - Drive
                                </li>
                                <li>
                                    🇧🇪 Documents: implement V0 structure while
                                    waiting for final docs - Trello Card
                                </li>
                                <li>
                                    🇹🇩 Mobile App: design home screen - Trello
                                    Card
                                </li>
                                <li>
                                    🇫🇷 Coverage: frame how to display a simple
                                    presentation of our coverage - Trello Card
                                </li>
                                <li>
                                    (If time allows) Health partner: give a hand
                                    to @julien.chenat
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
