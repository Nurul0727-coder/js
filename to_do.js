const status = "TODO" || "DONE";
const todos = [];

//Todo add
function addOne(newTodo) {
  todos.push(newTodo);
}

//status oorchloh: func
function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
}

//ner oorchloh
function editName(index, name) {
  let item = todos[index];
  item.name = name;
}

//todo delete ono item
function deleteOne(index) {
  let arr = [];
  for (let i = 0; i < todos.lenght; i++) {
    if (i !== index) {
      arr.push(todos[i]);
    }
  }
  todos = arr;
}

// running application
addOne({ name: "hool hiih", status: "TODO" });
addOne({ name: "JS sudlah", status: "TODO" });
addOne({ name: "daalgwraa hiih", status: "TODO" });
addOne({ name: "nuuree ugaah", status: "TODO" });
editStatus(0, "DONE");
editName(2, "shopping hiih");
deleteOne(3);
console.log(todos);

// todo delete all
// function deleteAll() {
//   todos = [;]
// }

// count Done
// function countDone() {
//   let count = 0;
//   for (let i = 0; i < todos.lenght; i++) {
//     let item = todos[i];
//     if (item.status === "DONE");
//   }
// }
