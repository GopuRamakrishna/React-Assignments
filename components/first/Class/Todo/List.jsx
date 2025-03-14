
function List(props) {
  return (
    <div> 
      <h2 className="display-6 text-warning">List of Task</h2>
     {
      props.tasks.map((ele,idx)=>
  <p className="lead" key={idx} >{ele}</p>
      )
    }
    </div>
  )
}

export default List