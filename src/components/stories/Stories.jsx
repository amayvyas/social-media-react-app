import "./stories.scss";
import car from "../../assets/car.jpg";

const Stories = () => {
  // temporary data 
  const stories = [
    {
      id: 1,
      name: "USER 1",
      img: car,
    },
    {
      id: 2,
      name: "USER 2",
      img: car,
    },
    {
      id: 3,
      name: "USER 3",
      img: car,
    },
    {
      id: 4,
      name: "USER 4",
      img: car,
    },
  ];

  return (
    <div className="stories">
      
      {stories.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
