import React, {Component} from 'react';

class TodoItem extends Component {
    render() {

        const {title,deleteItem,editItem }=this.props;
        return (
           <li className="list-group-item text-capitalize d-flex justify-content-between my-2 bg-dark text-white">
             <h6>{title}</h6>
               <div className="todo -icon">
                   <span className="mx-2 text-success" onClick={editItem}>
                    <i className="fas fa-pen"/>
                   </span>
                   <span className="mx-2 text-danger"onClick={deleteItem}>
                        <i className="fas fa-trash"/>
                   </span>
                   <span className="mx-2 text-primary">
                        <i className="fas fa-check"></i>
                   </span>

               </div>
           </li>
        );
    }
}

export default TodoItem;