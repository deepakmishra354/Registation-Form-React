import React, { useMemo, useState } from 'react'

function Memo() {
   const [add,setadd]=useState(0);
   const [sub,setsub]=useState(100);
  const multiplication =useMemo( function multi(){
   console.log("Use Memo use baby");
   return add*10;
  },[add])

  return (
    <>
    <h2> This is use Memo Hook use ok </h2> <br />
     {multiplication} <br />

     <button onClick={()=>setadd(add+1)} > Addition</button>
     <span> {add}</span> <br />
     <button onClick={()=>setsub(sub-1)}>Substration</button>
    <span>{sub}</span>

      </>
  )
}

export default Memo