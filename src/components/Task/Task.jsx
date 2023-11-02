import React,{useState} from 'react'
import styles from './Task.module.css'


const Task = (props) =>{

    const [text, setText] = useState(props.data.description)
const [isEditing, setIsEditing] = useState(false)

const togleHandler = ()=>{
    setIsEditing(!isEditing)
}
const changeTextHandler = (event) =>{
    setText(event.target.value)
}

    return(

        <div className={`${styles.Task} row`}>
            <div className={`${styles.card} col s12 m6`}>
                <div className="card blue-grey darken-1">
                    <div className={`${styles.textArea} card-content white-text`}>
                        <span className="card-title">{props.data.title}</span>

                        {isEditing 
                        ?  (<div className={`${styles.cardContent} input-field col s12`}>
                                <textarea id="textarea1" className=" materialize-textarea" 
                                onChange={changeTextHandler}  onBlur={togleHandler} value={props.data.description} />
                            </div>)

                        :  (<div onClick={togleHandler} className={`${styles.cardContent} col s12`} >
                                {props.data.description}
                            </div>)}
                    </div>

                    <div className={`card-action`} >
                        {props.children}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Task