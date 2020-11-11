import React from 'react';
import Todolistdate from './components/Todolistdate';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {

  return (
    <div className ="App">
     <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Todolistdate
        </Typography>
      </Toolbar>
    </AppBar>
    <Todolistdate/>
</div>
  );
}

export default App;
