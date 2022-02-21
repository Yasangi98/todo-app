import React, {Component} from 'react';
import TodoItem from "./TodoItem";


class Todolist extends Component {
    render() {
        const {items,deleteItem,editItem}=this.props;
        return (
            <ul className="list-group my-5  ">
                <h3 className="text-uppercase text-center bg-warning  ">to-do-list</h3>
                {
                    items.map(item =>{
                        return(
                            <TodoItem
                                key={item.id}
                                title={item.title}
                                deleteItem={()=> deleteItem(item.id)}
                                editItem={()=>editItem(item.id)}
                            />
                        )
                    })
                }





            </ul>
        );
    }
}

export default Todolist;