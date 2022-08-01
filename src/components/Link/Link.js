import React from "react"
import "./Link.css"
import DeleteIcon from '@mui/icons-material/Delete';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Link(props) {
    return (
        <div className="link">
            <span><LinkedInIcon sx={{ fontSize: 40 }}/></span>
            <span>LinkedIn {props.id.slice(0,5)}</span>
            {props.removeLink ? <span onClick={() => props.removeLink(props.id)}><DeleteIcon /></span> : <span style={{"width": "20px"}}></span>}
        </div>
    )
}
