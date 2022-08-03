import React from 'react'
import './StoreDropdown.css'
import StoreIcon from '@mui/icons-material/Store'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export default function StoreDropdown(props) {
    
    const [toggle, setToggle] = React.useState(false)
    // const [dropdownClass, setDropdownClass] = React.useState('dropdown-content')

    function toggleDropdown(){
        setToggle((prevToggle)=>!prevToggle)
    }
    
    // let divClass = 'dropdown-content'

    return (
        <div>
            <div className='store-dropdown' style={{'borderRadius': toggle && "10px 10px 0 0"}} onClick={toggleDropdown}>
                <span><StoreIcon sx={{ fontSize: 40 }}/></span>
                <span>Your Store</span>
                <span><ArrowDropDownIcon /></span>
            </div>
            
            {
                <div className='dropdown-content' style={{height: toggle && "100px"}}>{toggle ? 'Test String' : ''}</div>
            }
        </div>
    )
}
