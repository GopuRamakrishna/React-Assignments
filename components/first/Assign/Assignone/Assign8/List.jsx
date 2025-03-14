import React from 'react'

function List(props) {
  return (
    <div>
        <h2 className='text-center text-warning mt-4'>User Table</h2>
        <table className="table table-bordered table-hover border-dark mx-auto w-50 text-center">
            <thead>
                <tr>
                    <th>UserName</th>
                    <th>E-mail</th>
                </tr>
            </thead>
            <tbody>

            {
            props.user.map((ele,idx)=> <tr key={idx} >
                <td >{ele.username}</td>
                <td>{ele.email}</td>
            </tr> )
        }

            </tbody>
        </table>
       
    </div>
  )
}

export default List