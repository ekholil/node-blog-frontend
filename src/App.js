import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import AddBlog from './components/AddBlog/AddBlog';
import EditBlog from './components/EditBlog/EditBlog';
import Header from './components/Header';
import Home from './components/Home';
import Manage from './components/Manage/Manage';
import SingleBlog from './components/SingleBlog/SingleBlog';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/singleblog/:id">
            <SingleBlog />
          </Route>
         <Route path="/addblog">
           <AddBlog></AddBlog>
         </Route>
         <Route path="/manage">
            <Manage></Manage>
         </Route>
         <Route path="/editblog/:id">
           <EditBlog></EditBlog>
         </Route>
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
