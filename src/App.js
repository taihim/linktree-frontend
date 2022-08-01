import React from "react"
import axios from "axios"
import { nanoid } from 'nanoid'
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';

import "./index.css"

import ProfilePreview from "./components/Profile/ProfilePreview/ProfilePreview";
import DraggableList from "./components/DraggableList/DraggableList";
import PreviewDrawer from "./components/PreviewDrawer/PreviewDrawer"


function App() {

  const [userData, setUserData] = React.useState([])
  const [state, setState] = React.useState({bottom: false});

  const didMount = React.useRef(false);
  const matches = useMediaQuery('(min-width:940px)');


  function addLink() {
    setUserData((prevData) => {
      return [{type: "link", id: nanoid(), order: prevData.length + 1 }, ...prevData]
    })
  }

  function removeLink(id) {
    const data = JSON.parse(localStorage.getItem('userData'))

    let newData = data.filter((elem) => elem.id !== id)

    newData.map((elem, idx) => {
      return elem.order = newData.length - idx;
    })
    
    setUserData(() => {
      return newData
    })
  }

  const toggleDrawer =
    (anchor, open) =>
    (event) => {
      if (event.type === 'keydown' && ((event).key === 'Tab' || (event).key === 'Shift')) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };


  React.useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData))

    if(didMount.current) {      
      async function updateData() {
        console.log("Updating data in db")
        const resp = await axios.post("http://localhost:3001/data/updateData", {"userData": userData})
        console.log(resp.data)
      }
      updateData()
    }
    else{
      didMount.current = true
    }
  }, [userData])

  React.useEffect(() => {
    async function getData() {
      console.log("Http request get data")
      const resp = await axios.get("http://localhost:3001/data/getData")
      localStorage.setItem("userData", JSON.stringify(resp.data.userData))
      console.log('API response', resp.data.userData)
    }
    getData().then(() => {
      console.log("localstorage", localStorage.getItem("userData"))
      setUserData(() => {
        return JSON.parse(localStorage.getItem("userData"))
      })
    })
  }, [])

  return (
    <div className="App">
        <div className='ui-builder'>
          <div className='left'>
            <div className='add-section'>
              <input value="Add New Link" type="button" onClick={addLink} className='add-link btn'/>
              <input value="Remove Link" type="button" onClick={removeLink} className='remove-link btn'/>
            </div>
            <br/>
            <div className='config-section'>              
              <DraggableList data={userData} handleChange={setUserData} />
            </div>
          </div>

          { matches &&
            <div className='right-cont'>
              <div className='right-panel'>
                <Link to="/profile">Go to profile</Link>

                <div className='right'>
                  <ProfilePreview elements={userData} removeLink={removeLink}/>
                </div>
              </div>
            </div>
          }   
        </div>

        { !matches && <PreviewDrawer 
                        userData={userData} 
                        removeLink={removeLink} 
                        toggleDrawer={toggleDrawer} 
                        state={state}/>}
    </div>
  );
}

export default App;
