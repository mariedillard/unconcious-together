import React from 'react';
import Timer from './Timer';

var masterUserList = [
    {
        name: 'Tom'
    },
    {
        name: 'Dick'
    },
    {
        name: 'Larry'
    }
];

function UserList(){
    return(
        <div>
            <hr/>
            {masterUserList.map((user, index) =>
                <Timer names={user.names}
                    key={index} />
            )}
        </div>
    );
}


export default UserList;