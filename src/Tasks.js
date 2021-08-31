import React, { useState } from "react";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      name: "Task One",
      date: "September 24",
      notes: "get the laundry from the dryer and fold it",
    },
    {
      id: 2,
      name: "Task Two",
      date: "September 4",
      notes: "Feed the Cat",
    },
    {
      id: 3,
      name: "Task Three",
      date: "April 4",
      notes: "Buy an Apple gift card",
    },
  ];
  let count = tasks.length;
  

  const [people, setPeople] = useState(tasks);
  const [counter, setCounter] = useState(count);
  const removePeople = () => {
    setPeople([]);
    setCounter(0);
  };
  const removePerson = (identifier) => {
    const newList = people.filter((person)=> person.id !== identifier)
    setPeople(newList);
    setCounter(counter - 1);
  };


  return (
    <>
      <h1>There are {counter} tasks to complete. </h1>
      <section>
        {people.map((person) => {
          const { id, name, date, notes } = person;
          return (
            <div className='card' key={id}>
              <h2>Name: {name}</h2>
              <h3>Deadline: {date}</h3>
              <h4> Notes: {notes}</h4>
              <button type='button' onClick={() => removePerson(id)}>
                Remove Task
              </button>
            </div>
          );
        })}
      </section>

      <button type='button' onClick={removePeople}>
        Clear List
      </button>
    </>
  );
};

export default Tasks;
