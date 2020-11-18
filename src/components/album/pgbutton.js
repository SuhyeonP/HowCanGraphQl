import React, {useCallback,useEffect,useState} from 'react'

const PgButton=({id})=>{
    // const pageArr=[]
    // const [total, setTotal] = useState(3)
    // const [currentI, setCurrentI] = useState(0)
    // const [currentPage, setCurrentPage] = useState(1)
    // const [goF, setGoF] = useState(false)
    // const [goB, setGoB] = useState(true)
    // const [after, setAfter] = useState(0)

    // for(let i=current;i<=numb;i++){
    //     pageArr.push(i)
    // }

    // const goToP = (num) => {
    //     if (num === total) {
    //         setGoB(false)
    //         setGoF(true)
    //         return (
    //             setCurrentPage(num),
    //                 setCurrentI(num - 1)
    //         )
    //     }
    //     if (num === 1) {//첨으로 가는건 잘됨
    //         setGoB(true)
    //         return (
    //             setCurrentPage(1),
    //                 setCurrentI(0)
    //         )
    //     } else {
    //         setGoF(true)
    //         return (
    //             setCurrentPage(num),
    //                 setCurrentI(num - 1)
    //         )
    //     }
    // }

    return (
        <>
            {/*{goF ? <li onClick={() => goToP(1)}>◁</li> : null}*/}
            {/*{pageArr.map((ele)=>{*/}
            {/*    if(ele===current){*/}
            {/*        return <li key={ele.id} className="now-btn">{ele}</li>*/}
            {/*    }else{*/}
            {/*        return <li key={ele.id}  onClick={()=>goToP(ele)} >{ele}</li>*/}
            {/*    }*/}
            {/*})}*/}
            {/*{goB ? <li onClick={() => goToP(total)}>▷</li> : null}*/}

        </>
    )



}

export default PgButton;
