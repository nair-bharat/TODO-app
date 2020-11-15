import React from 'react'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import './Todo.css';

function Todo(props) {
    return (

        <List className = "todo__list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>

                    </Avatar>
                </ListItemAvatar>
                 <ListItemText primary="TODO" secondary = {props.text} />
            </ListItem>
        </List>

        
       /* <div>
            <li>{props.text}</li>
        </div>

        /}
        */
    )
}

export default Todo
