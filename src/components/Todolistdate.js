import React from 'react';
import '../App.css'
import {AgGridReact} from'ag-grid-react';
import'ag-grid-community/dist/styles/ag-grid.css';
import'ag-grid-community/dist/styles/ag-theme-material.css';
import { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function Todolistdate() {

    
  const [todo, setTodo] = useState({
      description:'',
      date:'',
      priority:''
  });
  
  const [todos, setTodos] = useState([]);

  const gridRef = useRef();
  
  const inputChanged = (event) => {
      setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
      setTodos([todo, ...todos]);
      setTodo({description:'', date:'', priority:''});
  }

  const deleteTodo = () => {
    if(gridRef.current.getSelectedNodes().length > 0){
    setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
  } else {
      alert('Select Row First');
  }

}
  const columns = [
    { headerName: "Description", field:"description", sortable:true, filter:true, floatingFilter:true},
    { headerName: "Date", field:"date", sortable:true, filter:true, floatingFilter:true},
    { headerName: "Priority", field:"priority", sortable:true, filter:true,
    cellStyle: params=> params.value===   "High"? {color: 'red'} : {color:'black'}, floatingFilter:true}

  ]

  const handleDateChange = (date) =>{
    setTodo({...todo, date: date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear() })
  }

    return(
        <div>
            <div>
              <form>
            <TextField style={{margin:5}} label="Description" name="description" value={todo.description} onChange={inputChanged}/>
            
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker style={{margin:5}} format="dd.MM.yyyy" label="Date" name="date" value={todo.date} onChange={handleDateChange}/>
            </MuiPickersUtilsProvider>
            
            <TextField style={{margin:5}} label="Priority" name="priority" value={todo.priority} onChange={inputChanged}/>
            
            <Button style={{margin:5}} variant="contained" color="primary" onClick={addTodo}>Add</Button>
            <Button style={{margin:5}} variant="contained" color="secondary" onClick={deleteTodo}>Delete</Button>
            </form>
            </div>
            <div className="ag-theme-material" style={{height:'700px', width:'60%', margin:'auto'}}>
            <AgGridReact
            rowSelection="single"
            ref={gridRef}
            onGridReady={ params => gridRef.current = params.api}
            columnDefs={columns}
            rowData={todos}
            animateRows='true'>
            </AgGridReact> 
            </div>
        </div>
    );


}
export default Todolistdate;
