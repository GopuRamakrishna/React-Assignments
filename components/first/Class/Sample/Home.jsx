import React from 'react'
import { useContext } from 'react'
import { counterContextObj } from './Context'
function Home() {
  const {counter,setCounter}=useContext(counterContextObj);
  return (
    <div>
        <h2 className='text-center mt-3 text-warning'>Home</h2>
        <h3>Counter:{counter}</h3>
        <button className='btn-primary' onClick={()=>{setCounter(counter+1)}}></button>
        <p className='lead m-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat architecto vel ut voluptatem in, distinctio alias autem ullam animi laudantium? Iste sequi maxime pariatur vitae eos hic modi maiores delectus obcaecati repudiandae, alias saepe perspiciatis esse adipisci nostrum aut vel officiis provident debitis aspernatur sint. Libero quidem veniam optio fugit.</p>
    <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima natus, aliquam libero enim expedita eaque fugiat, asperiores voluptate qui praesentium ea dicta, ducimus dignissimos. Excepturi at natus ipsam ducimus aliquid laboriosam porro. Ad nihil amet repellat. Velit veritatis porro, atque, repellat placeat est debitis, deserunt ducimus impedit pariatur assumenda mollitia commodi. Esse eaque necessitatibus recusandae voluptatem, quod hic voluptates dicta vero inventore laboriosam debitis exercitationem perspiciatis voluptatum, maxime non rerum amet explicabo iusto! Tempora optio deleniti, maiores consectetur ea aliquam explicabo natus similique nesciunt repudiandae alias cum quidem perferendis recusandae vitae distinctio ipsa quia a neque beatae animi labore quibusdam.</p>
    </div>
  )
}

export default Home