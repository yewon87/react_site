import React from "react";
import User from "./user";

function userList( props ){    
    const {list, onRemove, onUpdate} = props;
    const user = list.map(
        data => (
            <User 
                key={data.id}
                data={data}
                onRemove={onRemove}
                onUpdate={onUpdate}
            />
        )
    );
    
    return (<>
        {user}
    </>);
}

export default userList;