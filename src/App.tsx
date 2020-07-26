import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useGetWorldsQuery } from './generated/graphql'
import { EmojiConvertor } from 'emoji-js'

gql`
    query getWorlds {
        worlds {
            id
            name
        }
    }
`

// var m = EmojiConvertor
const emoji = new EmojiConvertor()

export default () => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <div className="w-full relative h-screen flex justify-center items-center font-body bg-grey-100">
            <h1 className="text-3xl text-alan-blue font-black fixed right-0 top-0 mr-4">
                HPFO
            </h1>
            <div className="fixed inset-y-0 left-0 h-screen max-w-sm w-full px-4 py-6 flex flex-col">
                <div className="p-4 ml-4">
                    <div className="text-grey-900 my-2 uppercase font-medium">
                        Communities
                    </div>
                    <div className="flex flex-col space-y-1 ml-2 font-light text-grey-800">
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">🙏</span> Sales
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">👨‍💻</span> Engineering
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">🍩</span> Product
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">🏆</span> Growth
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">🎉</span>Ops
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">👩‍⚕️</span> Care
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">💁‍♂️</span> People
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">📒</span> Knowledge
                        </div>
                    </div>
                </div>
                <div className="p-4 ml-4">
                    <div className="text-grey-900 my-2 uppercase font-medium">
                        crew
                    </div>
                    <div className="flex flex-col space-y-1 ml-2 font-light text-grey-800">
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">🙏</span> Member Success
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">👨‍💻</span> Sales Insurance
                            Autonomy
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">🍩</span> Claim Management
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">🏆</span> Health Journal
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">🎉</span> Lead Generation
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">👩‍⚕️</span> Growth Product
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">💁‍♂️</span> International
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">📒</span> B2B
                        </div>
                    </div>
                </div>
                <div className="p-4 ml-4">
                    <div className="text-grey-900 my-2 uppercase font-medium">
                        people
                    </div>
                    <div className="flex flex-col space-y-1 ml-2 font-light text-grey-800">
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">🙏</span> Vincent Poulain
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">👨‍💻</span> Arthur Himmel
                        </div>
                        <div className="hover:text-alan-blue cursor-pointer hover:font-semibold transition-all duration-200">
                            <span className="mr-2">🍩</span> JCS
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-4 space-y-6 w-full max-w-xl rounded-lg bg-white p-5">
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
                <div className="space-y-4  pr-8">
                    <div className="mt-6 flex flex-row space-x-8  items-center">
                        <div className="flex-shrink-0 text-2xl">☀️</div>
                        <ul className="flex flex-col space-y-2">
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
                        <div className="flex-shrink-0 text-2xl">🔥</div>
                        <ul className="flex flex-col space-y-px text-orange-900 font-normal text-sm">
                            <li className="">
                                Tough nights with Winston at the moment, but
                                managing well thanks to Portugese sun
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-px bg-grey-200 w-full"></div>
                <div className="space-y-6 mt-2  pr-8">
                    <div className="flex flex-row space-x-4 items-center">
                        <div className="text-2xl">🎯</div>
                        <div className="space-y-3">
                            <div className="font-medium text-alan-indigo">
                                Last week objectives
                            </div>
                            <ul className="space-y-2 text-grey-800 font-light text-sm">
                                <li className="flex space-x-2">
                                    <img
                                        src="check.svg"
                                        className="mx-2 h-4 w-4"
                                    />
                                    Ramp up on HTML PDFs creation
                                </li>
                                <li className="flex">
                                    <img
                                        src="check.svg"
                                        className="mx-2 h-4 w-4"
                                    />
                                    General Conditions: design document V0 and
                                    prepare back and forth on content design -
                                    Drive{' '}
                                </li>
                                <li className="flex">
                                    <img
                                        src="check.svg"
                                        className="mx-2 h-4 w-4"
                                    />
                                    Particular Conditions: designed document V0
                                    - Drive{' '}
                                </li>
                                <li className="flex">
                                    <img
                                        src="check.svg"
                                        className="mx-2 h-4 w-4"
                                    />
                                    SEPA mandate: designed document V0 - Drive
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-row space-x-4 items-center">
                        <div className="text-2xl">🚀</div>
                        <div className="space-y-3">
                            <div className="font-medium text-alan-indigo">
                                Next week objectives
                            </div>
                            <ul className="space-y-2 text-grey-800 font-light text-sm">
                                <li className="flex">
                                    <img
                                        src="todo.svg"
                                        className="mx-2 h-4 w-4"
                                    />
                                    Find a Doctor: challenge scope. Can we do
                                    something more minimal?
                                </li>
                                <li className="flex">
                                    <img
                                        src="todo.svg"
                                        className="mx-2 h-4 w-4"
                                    />
                                    Documents: implement highlights and comments
                                    on all documents - Drive
                                </li>
                                <li className="flex">
                                    <img
                                        src="todo.svg"
                                        className="mx-2 h-4 w-4"
                                    />
                                    Documents: implement V0 structure while
                                    waiting for final docs - Trello Card
                                </li>
                                <li className="flex">
                                    <img
                                        src="todo.svg"
                                        className="mx-2 h-4 w-4"
                                    />
                                    Mobile App: design home screen - Trello Card
                                </li>
                                <li className="flex">
                                    <img
                                        src="todo.svg"
                                        className="mx-2 h-4 w-4"
                                    />
                                    Coverage: frame how to display a simple
                                    presentation of our coverage
                                </li>
                                <li className="flex">
                                    <img
                                        src="check.svg"
                                        className="mx-2 h-4 w-4"
                                    />
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
