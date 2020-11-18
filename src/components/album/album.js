import React from "react"
import {gql} from "apollo-boost"
import {Query} from "@apollo/client/react/components";

import './album.css'
import PagingTable from "./pagingTable";

const GET_ALBUM = gql`
    query{
        albums{
            id
        }
    }
`

const Album = () => {
    return (
        <>
            <Query query={GET_ALBUM}>
                {({loading, error, data}) => {
                    if (loading) return <p>BackServer is Off</p>
                    if (error) return <p>Error!</p>
                    return (
                        <>
                            <div className="album-sec">
                                <ul className="album-list">
                                    {data.albums.map(({id}) => {
                                        return <PagingTable id={id}/>
                                    })}
                                </ul>
                            </div>

                        </>
                    )
                }}
            </Query>
        </>
    )
}
export default Album;