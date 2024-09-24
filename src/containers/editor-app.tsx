import React, { useEffect } from 'react'
const EditorApp : React.FC = () =>{

    useEffect(() => {
        console.log("Hello")
    }, [])

    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}
export default EditorApp