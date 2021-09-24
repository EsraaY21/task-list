import TaskList from './components/TaskList';
import CreateTaskModal from './components/CreateTaskModal';
import db from './firebase';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from '@firebase/firestore';

function App() {
  const [tasks, setTasks] = useState([]);
  console.log('rendered app');

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
        <CreateTaskModal />
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
