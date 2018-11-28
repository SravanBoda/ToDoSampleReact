
var TasksData = [];
for (let index = 1; index < 1000; index++) {
  const task =   {
    key: index,
	beatId: index,
    beatName: "beat " + index,
	beatDescription: 'Sample description'+ index
  };
  TasksData.push(task);
}


export default TasksData;