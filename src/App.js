import React,{Component} from 'react';
import AddItem from "./component/AddItem";
import Todolist from "./component/Todolist";
import "bootstrap/dist/css/bootstrap.min.css";
import * as uuid from 'uuid';



import './App.css';

class  App extends Component{




    state={
        items:[],
        id:uuid.v4(),
        item:"",
        editItem:false
    }
    //Change state
    handleChange= val => {
        this.setState({
            item:val.target.value
        });
    };

    //Add new items
    handleSubmit = val =>{
        val.preventDefault();

       const newItem={
           id:this.state.id,
           title:this.state.item

       };
       console.log(newItem);
       const updateItems=[...this.state.items,newItem];
       this.setState(
           {
               items: updateItems,
               item: '',
               id: uuid.v4(),
               editItem:false


           });


    };

    //Deleting an Item
  deleteItem=(id)=>{
      const sortedItem=this.state.items.filter(item=>item.id !== id);
      this.setState({items:sortedItem});
  };

  //Edit Items
    editItem=id=>{
        const sortedItem=this.state.items.filter(item=>item.id !== id);
        this.setState({items:sortedItem});

        const selectedItem=this.state.items.find(item =>item.id ===id)
         console.log(selectedItem);

         this.setState({
            items:sortedItem,
            item:selectedItem.title,
            editItem:true,
            id:id
             }
      );

  };
    //ComplteItem
    //completingitem=id=>{



  render() {
    return (
        <div className="container ">
            <div className="row  ">
                <div className="col-10 mx-auto col-md-8 mt-4 bg-transparent " >
                    <h3 className="text-uppercase text-center bg-warning  " >Todo App</h3>

                    <AddItem
                        item={this.state.item}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        editItem={this.state.editItem}
                    />
                    <Todolist
                        items={this.state.items}
                        deleteItem={this.deleteItem}

                        editItem={this.editItem}
                    />

                </div>


            </div>



        </div>



    );
  }


}

export default App;
