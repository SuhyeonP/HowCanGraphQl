import React from "react"
import { gql } from "apollo-boost"
import{Query} from "@apollo/client/react/components";
import './member.css'

const GET_MEMBER=gql`
    query{
        members{
            name
            birth
            part
            src
        }
    }
`
const Seven=()=>{

    return (
        <>

            <Query query={GET_MEMBER}>
                {({loading,error,data})=>{
                    if(loading)return <p>BackServer is Off</p>
                    if (error) return <p>Error!</p>
                    return (
                        <ul className="member">
                            {data.members.map(({ name ,part,birth,src}) => (
                                <>
                                  <li className="member-list">
                                      <img src={"http://api.honeyhyoni.shop/"+src} className="se-img"/>
                                      <p>{name}</p>
                                      <p>{birth}</p>
                                      <p>{part}</p>
                                  </li>
                                </>
                            ))}
                        </ul>
                    )
                }}
            </Query>
        </>
    )
}

export default Seven;