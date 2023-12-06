import './App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      My ToDo Application
      
      <Counter />{/* the devault value is 1 */}
      <Counter by={2}/>
      <Counter by={3}/>
    </div>
  );
}

export default App;
