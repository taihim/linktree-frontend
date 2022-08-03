import React from "react"
import "./DraggableList.css"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DeleteIcon from '@mui/icons-material/Delete';


export default function DraggableList(props){

    const handleChange = props.handleChange;
    const order = props.data;

    function onDragEnd(result) {        
        const {destination, source, draggableId} = result

        if(destination.index === source.index) {
            return;
        }

        const newArr = Array.from(order)
        newArr.splice(source.index, 1)
        newArr.splice(destination.index, 0, {type: order[source.index].type, id: draggableId, order: destination.index })

        newArr.map((elem, idx) => {
            return elem.order = newArr.length - idx;
        })

        handleChange(() => newArr)
    }

    function Li(props) {
        return (
            <Draggable draggableId={props.id} index={props.index}>
                {(provided) => {
                    return (
                        <div ref={provided.innerRef} {...provided.draggableProps} className='li-container'>
                            <div className='drag-icon' {...provided.dragHandleProps} ><DragIndicatorIcon sx={{"fontSize": "19px"}}/></div>
                            <div className='draggables'>Li {props.id.slice(0,5)}</div>
                            <div onClick={() => props.removeNode(props.id)}> <DeleteIcon sx={{"margin-right": "15px"}}/> </div>
                        </div>
                        
                    )
                }}
            </Draggable>
        )
    }

    const TaskList = React.forwardRef((props, ref) => {
            return <div {...props } className="draggable-list" ref={ref}></div>
    })

    const arr = order.map((elem, idx) => {
        return <Li key={elem.id} id={elem.id} index={idx} object={elem} removeNode={props.removeNode}/>
    })

    return(
        <DragDropContext onDragEnd={onDragEnd}>        
            <Droppable droppableId="1">
                {(provided) => {
                    return <TaskList {...provided.droppableProps} ref={provided.innerRef}>
                        {arr}
                        {provided.placeholder}                
                    </TaskList>
                }}
            </Droppable>
        </DragDropContext>

    )
}