import React from "react"
import "./PreviewDrawer.css"

import Drawer from '@mui/material/Drawer';
import CancelIcon from '@mui/icons-material/Cancel';
import { Global } from '@emotion/react';
import ProfilePreview from "../Profile/ProfilePreview/ProfilePreview";
import VisibilityIcon from '@mui/icons-material/Visibility';


export default function PreviewDrawer(props) {
    return (
        <>
            <div className='preview-icon' onClick={props.toggleDrawer('bottom', true)}>
                <VisibilityIcon fontSize="large" />
                <span>View preview</span>
            </div> 

            <div className="preview-drawer" key='bottom'>
                <Global
                    styles={{
                        '.MuiDrawer-root > .MuiPaper-root': {
                            "background-color": "#d4cfcb"
                        },
                    }}
                />
                
                <Drawer
                    sx={{height: '100%'}}
                    anchor='bottom'
                    open={props.state['bottom']}
                    onClose={props.toggleDrawer('bottom', false)}
                    >
                    <div className='right-panel-mobile'>
                        <div className='right-mobile'>
                            <ProfilePreview elements={props.userData} removeLink={props.removeLink}/>
                        </div>
                        <CancelIcon sx={{fontSize: 55, marginTop: 2}} onClick={props.toggleDrawer('bottom', false)}/>
                    </div>
                </Drawer>
            </div>
        </>
    )
}