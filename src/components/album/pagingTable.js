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
                    const showImage=()=>{
                        const id=document.getElementById('selectImg')
                        id.src=''
                        {data.albums.map(({img})=>(
                            id.src=img
                        ))}
                    }
                    const eraseImage=()=>{
                        const id=document.getElementById('selectImg')
                        id.src='https://i.stack.imgur.com/DAwB5.png'
                    }
                    return(
                        <>
                            <tr>
                                <td>{id}</td>
                                {data.albums.map(({part,title,when})=>{
                                    return(
                                        <>
                                            <td onMouseOver={showImage} onMouseLeave={eraseImage}>{title}</td>
                                            <td>{when}</td>
                                            <td>{part}</td>
                                        </>
                                    )
                                })}
                            </tr>
                        </>
                    )
                }}
            </Query>


        </>
    )
}
export default PagingTable;