//SGN
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const preDefData = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },
  ];
  
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
      if(currentIndex == 0 ){
        setCurrentIndex(preDefData.length - 1);
      }else {
        setCurrentIndex((prevIndex) => (prevIndex-1));
      }        
  }

  const handleNext = () => {
    if(currentIndex === preDefData.length - 1){
      setCurrentIndex(0);
    }else{
      setCurrentIndex((curr) => curr + 1);
    }
  }

  const handleRandom = () => {
      const randIndx = Math.floor(Math.random() * preDefData.length);
      setCurrentIndex(randIndx);

  }

    // Destructring object and creating variables with propery name 
  const { id, name, job, image, text} = preDefData[currentIndex];

  return (
    <div className="container">
      <h1 id="review-heading">Our Reviews</h1>
      <div className="review">
        <img className="person-img" src={image} alt={name} />
        <h2 id={`author-${id}`} className="author">{name}</h2>
        <h4 className="job">{job}</h4>
        <p className="info">{text}</p>
      </div>
      <div className="buttons">
        <button className="prev-btn" onClick={handlePrev}>Prev</button>
        <button className="next-btn" onClick = {handleNext} >Next</button>
        <button className="random-btn" onClick={handleRandom}>surprise me</button>
      </div>
    </div>
  );
};

export default App;