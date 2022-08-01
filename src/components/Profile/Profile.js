import React from "react" 
import Links from "../Link/Link"
import { Link } from "react-router-dom";
import ProfileContent from "./ProfileContent/ProfileContent"


export default function Profile() {

    const [elements, setElements] = React.useState([])

    React.useEffect(() => {
        setElements(() => JSON.parse(localStorage.getItem('userData')))
    }, [])

    console.log(elements)

    const elems = elements.map((elem, idx) => {
        if(elem.type === "link"){
            return <Links key={idx} id={elem.id} num={elem.order} />
        }
        else if(elem === "Basic"){
            return <div key={idx}>Basic</div>
        }
        else{
            return <div key={idx}>None</div>
        }
    })

    return (
      <main style={{ padding: "1rem 0" }}>
        <ProfileContent />
        <br/>
        {elems}
        <br/>
        <Link to="/">Go Home</Link>
      </main>
    );
  }