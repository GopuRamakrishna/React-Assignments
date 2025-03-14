import './Tree.css'
import Protre from '../Protre'
import Nav from '../Nav'
import Footer from '../Footer'
function Three(){
    const people = [
        {
          id: 1,
          name: "Alice Johnson",
          profession: "Software Engineer",
          image: "https://example.com/images/alice-johnson.jpg"
        },
        {
          id: 2,
          name: "Bob Smith",
          profession: "Graphic Designer",
          image: "https://example.com/images/bob-smith.jpg"
        },
        {
          id: 3,
          name: "Charlie Brown",
          profession: "Product Manager",
          image: "https://example.com/images/charlie-brown.jpg"
        },
        {
          id: 4,
          name: "Dana White",
          profession: "Data Scientist",
          image: "https://example.com/images/dana-white.jpg"
        },
        {
            id: 5,
            name: "Jhonn Wick",
            profession: "Software Engineer",
            image: "https://example.com/images/alice-johnson.jpg"
          },
          {
            id: 6,
            name: "Steve Smith",
            profession: "Graphic Designer",
            image: "https://example.com/images/bob-smith.jpg"
          },
          {
            id: 7,
            name: "Charlie Curran",
            profession: "Product Manager",
            image: "https://example.com/images/charlie-brown.jpg"
          },
          {
            id: 8,
            name: "Daniel White",
            profession: "Data Scientist",
            image: "https://example.com/images/dana-white.jpg"
          }
      ];
      
    return (
        <>
        <div className="navbar navbar-expand-lg bg-body-tertiary navi ">
           <Nav/>
        </div>
        <div className='second'>
           {
            people.map((ele)=>(
                <Protre p={ele}/>
            ))
           }
        </div>
      <div className="foot">
        <Footer/>
      </div>
        </>

    );
}
export default Three