import React from "react"
import "./Link.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Link(props) {
    return (
        <div className="link">
            <span><LinkedInIcon sx={{ fontSize: 40 }}/></span>
            <span>LinkedIn {props.id.slice(0,5)}</span>
            <span></span>
        </div>
    )
}
