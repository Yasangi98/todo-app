import React, {Component} from 'react';

class AddItem extends Component {
    render() {
        const{item,handleChange,handleSubmit,editItem}=this.props;

        return <div className="card card-body my-3 bg-dark  ">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text text-warning text-white bg-dark ">

                            <i className="fas fa-clipboard-list"></i>
                    </div>
                    </div>
                    <input type="text" className="form-control bg-transparent text-white" placeholder="Add item"
                           value={item}
                           onChange={handleChange}
                    />
                </div>
                <button type="submit" className={editItem ?
                    "btn btn-block btn-success mt-3 "
                    :"btn btn-block btn-warning mt-3 "
                } >
                    {editItem ? "edit item": "AddItem"}
                </button>

            </form>

        </div>;

    }
}

export default AddItem;
