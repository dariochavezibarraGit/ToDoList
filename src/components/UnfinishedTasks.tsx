function UnfinishedTasks() {
  let unfinishedTasks: {
    id: number;
    name: string;
    description: string;
    dueDate: string;
    finished: boolean;
  }[] = [
    {
      id: 0,
      name: "Do the dishes",
      description: "Clean everything!",
      dueDate: "Now",
      finished: false,
    },
    {
      id: 1,
      name: "Feed the cat",
      description: "Tomomi loves happy tuna",
      dueDate: "Uuuh",
      finished: false,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column">
            <h2>Create a task</h2>
            <div className="card">
              <div className="card-body">
                To create a task, write the name, the description and the due
                date of said task.
              </div>
            </div>
            <div className="input-group">
              <span className="input-group-text">Name</span>
              <input className="form-control " type="text" placeholder="Task" />
              <span className="input-group-text">dd/mm/yy</span>
              <input className="form-control" type="text" placeholder="day" />
              <input className="form-control" type="text" placeholder="month" />
              <input className="form-control" type="text" placeholder="year" />
            </div>
            <textarea className="form-control" placeholder="Description" />
            <button className="btn btn-primary" type="button">
              Create Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnfinishedTasks;
