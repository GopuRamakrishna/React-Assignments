
function Count(props) {
  return (
    <div> <h2 className="display-6 text-warning">Count List</h2>
    <p className="lead">{props.tasks.length}</p>
</div>
  )
}

export default Count