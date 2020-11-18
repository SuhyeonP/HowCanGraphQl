import React from "react"
import {gql} from "apollo-boost"
import {Query} from "@apollo/client/react/components";

import './album.css'
import PagingTable from "./pagingTable";
import PgButton from "./pgbutton";

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
                            <div className="img-zone">
                                <img src="https://i.stack.imgur.com/DAwB5.png" id="selectImg"/>
                            </div>
                            <div className="paging-table">
                                <table>
                                    <thead>
                                    <tr>
                                        <td>Num</td>
                                        <td>Title</td>
                                        <td>When</td>
                                        <td>Part</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.albums.map(({id}) => {
                                        return <PagingTable id={id}/>
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="page-button">
                                <ul>
                                    {data.albums.map(({id}) => {
                                        return <PgButton id={id}/>
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