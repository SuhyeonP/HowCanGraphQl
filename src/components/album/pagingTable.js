import React from "react"
import { gql } from "apollo-boost"
import{Query} from "@apollo/client/react/components";

const PagingTable=({id})=>{
    const rid=Number(id)
    const GET_SINGLE=gql`
        query{
            albums(id:${rid}){
                part
                title
                when
                id
                img
                link
            }
        }
    `
    return (
        <>
            <Query query={GET_SINGLE}>
                {({loading,error,data})=>{
                    if(loading)return <p>BackServer is Off</p>
                    if (error) return <p>Error!</p>

                    return(
                        <>
                            {data.albums.map(({part,title,when,img})=>{
                                return(
                                    <>
                                        <li className="album-item">
                                            <img src={img} className="album-img"/>
                                            <p className="album-title">{title}</p>
                                            <p>{when}</p>
                                            <p>{part}</p>
                                        </li>
                                    </>
                                )
                            })}
                        </>
                    )
                }}
            </Query>


        </>
    )
}
export default PagingTable;