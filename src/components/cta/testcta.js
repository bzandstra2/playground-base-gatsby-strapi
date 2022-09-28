import React from 'react'

export default function Testcta(props) {
    const title = props.title
    const description = props.description

  return (
    <div>
        <h1>{title ? title : "hello World"}</h1>
        <p>{description ? description : "Description"}</p>
        {/* <pre>
            { JSON.stringify(props, null, 2) }
        </pre> */}
    </div>
  )
  
}
