import React, { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      newitem:"",
      list:[]
    }
  }

//ADD IETM FUNCTION
  addItem(){
//create item with unique Id
    const newitem={
      id: 1+ Math.random(),
      value:this.state.newitem.slice()
    };
//copy of current list of items 
    const list=[...this.state.list];

// add new item to list
    list.push(newitem);

//update state with new list and put new item to null
this.setState({
  list,
  newitem:""

});
  }

// UPDATE INPUT FUNCTION
updateInput(key,value){
  this.setState({
    [key]:value  

  });
}

//DELETE IEM FUNCTION

deleteItem(id){
  const list=[...this.state.list]
  const updatedlist=list.filter(item=>item.id!==id);
  this.setState({
    list:updatedlist
  });

}



  render() {
  return (
 <div className="App">
<div> 
  Add an Item...
  <br/>
  <input
         type="text" 
         placeholder="Enter your todo here..."  
         value={this.state.newitem}
         onChange={e=>this.updateInput("newitem", e.target.value)} 
  />
  <br/>
  <br/>
  <button onClick={()=> this.addItem()}>Add</button><br/><br/>
 
  <ul>
    {this.state.list.map(item=>{
      return(
        <li key={item.id}>
          {item.value}
<button onClick={()=> this.deleteItem(item.id)}> X </button>
        </li>
      )
    })}
  </ul>
    
  
</div>




 </div>
  );
}
}


export default App;
