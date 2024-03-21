import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    { rowNumber: 1, rowDescription: 'Feed Puppy', rowAssigned: 'John' },
    { rowNumber: 2, rowDescription: 'Clean the house', rowAssigned: 'Jane' },
    { rowNumber: 3, rowDescription: 'Buy groceries', rowAssigned: 'Mike' },
    { rowNumber: 4, rowDescription: 'Cell Phone', rowAssigned: 'Jay' }
  ];

  return (
    <div className='mt-5 container'>

      <div className="card">

        <div className="card-header">
          Your Todo's
        </div>

        <div className="card-body">

          <TodoTable todos={todos} />

        </div>
      </div>
    </div>
  );
}

export default App;
