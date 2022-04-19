import React from 'react';
import { ReactComponent as Circle } from '../images/circle.svg';
import { ReactComponent as Tri } from '../images/triangle.svg';
import { ReactComponent as Flower } from '../images/flower.svg';
import { ReactComponent as Gum } from '../images/gumdrop.svg';
import { ReactComponent as Title } from '../images/title.svg';
import '../index.css';

// const Home = () => {
// 	return (
// 	<div className="flex-container">
// 		<div className="flex-items1"><Circle /> <Tri /> <Flower /> <Gum /></div>
// 		<div className="flex-items2"><Title /></div>
// 		<div className="flex-items3"> <p> Blooming soon in Spring 2022 </p> </div>
// 	</div>
// 	);
// };

// export default Home;
function Home(props) {
  return (
    <div className="container">
      <div className="doodles">
         <Circle /> <Tri /> <Flower /> <Gum />
      </div>

      <div className="title">
        <Title className="responsive" />
      </div>

      <div className="subtitle">
        <p>Blooming soon in Spring 2022</p>
      </div>

    </div>
  );
}
 
export default Home;

