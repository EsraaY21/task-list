import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import db from './firebase';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from '@firebase/firestore';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return unsub;
  }, []);

  return (
    <div className="App">
      <div className="header text-center pt-4 mb-4">
        <h3>Todo List</h3>
        <CreateTask />
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
