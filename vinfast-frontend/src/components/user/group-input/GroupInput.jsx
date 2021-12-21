import React from 'react'

const GroupInput = props => {
    return (
        <div className="group__input">
            <label> 
                {props.label}
                <span>*</span>
            </label>
            <input onChange={props.handleChange} type="text"/>
        </div>
    )
}

export default GroupInput
