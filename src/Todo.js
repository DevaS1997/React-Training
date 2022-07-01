import React, { useState } from 'react'

const Todo = () => {

  const [inputText, setinputText] = useState("")
  const [todo, settodo] = useState([])

  const handleInputText = (e) => {
    setinputText({ inputText: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputText", inputText)
    settodo([...todo, { text: inputText, completed: false, id: Math.random() * 1000 }])
    console.log("todo", todo)
    document.getElementsByTagName("form")[0].reset();

  }
  const handleCompleted = (e)=>{
    console.log(e.target.id)
    todo.filter((todo)=>{if(e.target.id == todo.id){return todo}}).map((val)=>{settodo([...todo,{text:val.text,completed:true,id:val.id}])})
    console.log(todo.filter((todo)=>{if(e.target.id == todo.id){return todo}}).map((val)=>{return val.completed}))
  }

  const handleDelete = (e)=>{
    alert(todo.map((val)=>{return val}).filter((data)=>{ if(data.id !== e.target.dataset.id){
      return data.id
    }}).map((val)=>{return val.id}))
    // settodo(todo.map((val)=>{return val.id !== e.target.dataset.id}))
  }

  return (
    <>
      <div className='container mt-5'>
        <div className="d-flex justify-content-center h-100">
          <div className="col-lg-6 align-self-center text-start">
            <div className="row">
              <div className="col-lg-8 ">
                <form action="" method="post" onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control"
                      onChange={handleInputText}
                      placeholder="Add to-do....." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <button className="input-group-text bg-primary text-white fs-5" id="basic-addon2"><i className='bi bi-plus'></i></button>
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
                <select className="form-select" aria-label="Default select example">
                  <option defaultValue>--Select Option-- </option>
                  <option defaultValue="all">All</option>
                  <option defaultValue="completed">Completed</option>
                  <option defaultValue="incompleted">In-Completed</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <ul className="list-group list-group-flush">
                {todo.map((todo)=>{
                return (<li className="list-group-item border-0" key={todo.id}>
                  <div className='row align-items-stratch'>
                    <div className="col-9 p-0">
                      <div className="card py-0 rounded-0">
                        <div className="card-body py-1">
                          <p className='mb-0'>{todo.text.inputText}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 p-0">
                      <button data-status={todo.completed} id={todo.id} onClick={handleCompleted} className='btn btn-success py-1 rounded-0'><i className='bi bi-check'></i></button>
                      <button data-status={todo.completed} data-id={todo.id} onClick={handleDelete} className='btn btn-danger py-1 rounded-0'><i className='bi bi-trash'></i></button>
                    </div>
                  </div>
                </li>)
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo