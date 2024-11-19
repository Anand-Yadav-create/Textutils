import React from 'react'

export default function Alert(props) {

    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }

    
  return (

    <div style={{height:'50px'}}>
      {
    props.alert&&<div>

            <div className="alert alert-success d-flex align-items-center" role="alert">
            
            <div>
                {capitalize(props.alert.ty)+" "}
               { props.alert.msg}
            </div>
            </div>
      
    </div>
}

    </div>
  )
}
