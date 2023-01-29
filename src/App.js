import'./App.css';
import image from './todo.jpg';
import imageTwo from './zastavka.jpg';
import { MyTodoList } from './MyTodoList';
function App () {
    return( <div className='App'>
      <div className='container'>
      <img src={ image }width="250px" alt="todo" />
      </div>
      <div className='container'>
      <h1> Todo List </h1>
    </div>
    
      
      <MyTodoList />
      <div className='container'>
      <img src={ imageTwo } width="200px" alt="zast" />
      </div>
    <div>
    </div>
   
    
    </div>
    
    )
}
export default App;
