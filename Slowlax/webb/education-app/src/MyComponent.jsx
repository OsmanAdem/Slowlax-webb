import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost/backend/api.php')
      .then((response) => response.json())
      .then((data) => {
        setTasks(data.tasks);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;



