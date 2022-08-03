import React from "react" 
import Links from "../../Link/Link"
import ProfileContent from "../ProfileContent/ProfileContent"
import StoreDropdown from '../../StoreDropdown/StoreDropdown'
import Collapse from '@mui/material/Collapse';
import { TransitionGroup } from 'react-transition-group';




export default function ProfilePreview(props) {

    const elems = props.elements.map((elem, idx) => {
        if(elem.type === "link"){
            return <Collapse key={idx}>
                      <Links key={idx} id={elem.id} removeLink={props.removeLink} num={elem.order} />
                   </Collapse>
        }
        else if(elem === "Basic"){
            return <div key={idx}>Basic</div>
        }
        else if(elem.type === "store"){
          return <Collapse key={idx}>
                    <StoreDropdown key={idx} id={elem.id} num={elem.order} />
                 </Collapse>
        }
        else{
            return <div key={idx}>None</div>
        }
    })

    return (
      <main style={{ padding: "1rem 0" }}>
        <ProfileContent />
        <br/>
        <TransitionGroup>
          {elems}
        </TransitionGroup>
      </main>
    );
  }