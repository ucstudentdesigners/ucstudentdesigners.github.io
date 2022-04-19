import React from "react";
import './App.css';
import Home from './pages';
import Intentions from './pages/intentions';
import StartingPoint from './pages/startingpoint';
import Opportunities from './pages/opportunities';
import NorthStars from './pages/northstars';
import { ReactComponent as Circle } from './images/circle.svg';
import { ReactComponent as Tri } from './images/triangle.svg';
import { ReactComponent as Flower } from './images/flower.svg';
import { ReactComponent as Gum } from './images/gumdrop.svg';
import { ReactComponent as Title } from './images/title.svg';
 
function App(props) {
  return (
    // <BrowserRouter>
    //   <div className="App">
  
    //     // Set up the Router
        // <Route exact path="/" component={Home} />
        <Home />
    //     <Route path="/intentions" component={Intentions} />
    //     <Route path="/startingpoint" component={StartingPoint} />
  
    //     <div className="navigation">
    //       <img src={logo} className="logo-image" alt="Logo Image" />
    //       <div className="navigation-sub">
                                          
    //         // Set up the Links
    //         <Link to="/" className="item">Projects</Link>
    //         <Link to="/articles" className="item">Articles</Link>
    //         <Link to="/about" className="item">About</Link>
  
    //       </div>
    //     </div>
    //   </div>
    // </BrowserRouter>
    // <div className="container">
    //   <div className="doodles">
    //      <Circle /> <Tri /> <Flower /> <Gum />
    //   </div>

    //   <div className="title">
    //     <Title />
    //   </div>

    //   <div className="subtitle">
    //     <p>Blooming soon in Spring 2022</p>
    //   </div>

    // </div>
  );
}
 
export default App;
// import React, { Component } from 'react';
// import './App.css';
// import Navbar from './components/Chapters';
// import { BrowserRouter as Router, Routes, Route}
//   from 'react-router-dom';
// import Home from './pages';
// import Intentions from './pages/intentions';
// import StartingPoint from './pages/startingpoint';
// import Opportunities from './pages/opportunities';
// import NorthStars from './pages/northstars';
// // import { ReactComponent as Circle } from './images/circle.svg';
// // import { ReactComponent as Tri } from './images/triangle.svg';
// // import { ReactComponent as Flower } from './images/flower.svg';
// // import { ReactComponent as Gum } from './images/gumdrop.svg';
// // import { ReactComponent as Title } from './images/title.svg';

// // class App extends Component {
// //   render() {
// //     return (
// //       <div class="flex-container" 
// //         style={{
// //           justifyContent: 'center',
// //           alignContent: 'center',
// //         }}
// //       >
// //         <div class="flex-items"
// //         style={{
// //           flexGrow: 1,
// //           flexShrink: 1,
// //         }}
// //         >
// //         <Circle /> <Tri /> <Flower /> <Gum /></div>
// //         <div class="flex-items" style={{
// //           flexGrow: 1,
// //           flexShrink: 1,
// //         }}
// //         >
// //         <Title /></div>
// //         <div class="flex-items" style={{
// //           flexGrow: 1,
// //           flexShrink: 1,
// //         }}
// //         > 
// //         <p> Blooming soon in Spring 2022 </p> </div>
// //       </div>
// //       // <Home />
// //     );
// //   }
// // }
// function App() {
// return (
//   <Home />
//   // <Router>
//   // <Navbar />
//   // <Routes>
//   //   <Route exact path='/' exact element={<Home />} />
//   //   <Route path='/intentions' element={<Intentions/>} />
//   //   <Route path='/northstars' element={<NorthStars/>} />
//   //   <Route path='/startingpoint' element={<StartingPoint/>} />
//   //   <Route path='/opportunities' element={<Opportunities/>} />
//   // </Routes>
//   // </Router>
// );
// }

// export default App;

