import React, { useState } from "react";

function User( props ) {
    console.log('PhoneInfo');
    const {onRemove, onUpdate } = props;
    const [disabled, setDisabled] = useState(true);
    const [info, setInfo] = useState(props.data);

    const handlerDelete = () =>{
        onRemove(info.id);
    }

    const handlerChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]:e.target.value
        });

    }

    const handlerUpdate = () =>{
        onUpdate(info);
        setDisabled(true);
    }
    const handlerToggle = () => {
        setDisabled(false);
    }

    const styleButton = {
        display:'inline-block',
        
    };
    const styleWrap = {
        padding:'10px',
        borderBottom:'1px solid #333'
    };
    return(<>
        <div style={styleWrap}>
            <div style={styleButton}>
                id : <input type="text" name="id" value={info.id||0} disabled={disabled} onChange={handlerChange}/>&nbsp;&nbsp;
                name : <input type="text" name="name" value={info.name||''} disabled={disabled} onChange={handlerChange}/>&nbsp;&nbsp;
                phone : <input type="text" name="phone" value={info.phone||''} disabled={disabled} onChange={handlerChange} />&nbsp;&nbsp;
            </div>
            <div style={styleButton}>
                <button onClick={handlerDelete}>삭제</button>&nbsp;&nbsp;
                <button onClick={handlerToggle}>수정</button>&nbsp;&nbsp;
                <button onClick={handlerUpdate}>적용</button>
            </div>
        </div>
    </>);
}

export default User
