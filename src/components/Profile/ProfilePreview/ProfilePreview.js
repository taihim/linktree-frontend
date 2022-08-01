import React from "react" 
import Links from "../../Link/Link"
import ProfileContent from "../ProfileContent/ProfileContent"

export default function ProfilePreview(props) {

    console.log(props)
    const elems = props.elements.map((elem, idx) => {
        if(elem.type === "link"){
            return <Links key={idx} id={elem.id} removeLink={props.removeLink} num={elem.order} />
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
      </main>
    );
  }