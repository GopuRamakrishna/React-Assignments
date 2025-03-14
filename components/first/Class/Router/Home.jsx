import React from 'react'
import { useContext } from 'react';
import { counterContextObj } from '../../../../Context/CounterContext';

function Home() {
  const {counter,setCounter}=useContext(counterContextObj);
  return (
    <div>
      <h1 className='mt-4'>Home</h1>
      <h4>counter:{counter}</h4>
      <button className="btn btn-outline-primary" onClick={()=>{setCounter(counter+1)}}>Increment</button>
      <p className='lead m-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et facilis eius. Nostrum sunt ea quisquam natus accusamus magnam dolorum quod dicta optio unde velit asperiores, at voluptas voluptate ratione debitis nobis eveniet quaerat eaque maiores distinctio dolorem ut, odit nisi. Optio fugiat adipisci qui! Quia similique eligendi corporis rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos laborum earum dolore ad nihil ipsam culpa laboriosam est, fugiat quia sint temporibus. Similique minus vitae rerum. Ut, velit error! At aliquid placeat laudantium maxime deleniti amet optio quod sit dolorem culpa eum eaque perferendis quasi molestiae quis quo, quas ab, tenetur vitae! At fuga, placeat ducimus aliquid deleniti atque tempore vero asperiores quibusdam minima voluptas laudantium cupiditate dolorum dolorem dolores consequatur! Dignissimos a fugit odit in ducimus magnam laborum ullam quis rerum cumque dicta esse, est veritatis libero alias possimus! Officia ea animi dignissimos! Possimus fuga incidunt officiis minus maiores. </p>
    </div>
  )
}

export default Home