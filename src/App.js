import './App.css';
import Meta from './Meta'
import React, { useEffect, Component } from "react";
import $ from "jquery";
import heading from './heading.png';


export default class App extends Component {
  constructor() {
    super();
    this.setState = {
      objRotateX: 0,
      objRotateY: 0,
      objRotateZ: 0,
    }
    this.getRandom = this.getRandom.bind(this);
    this.newStar = this.newStar.bind(this);
    this.createStars = this.createStars.bind(this);

    // Cluster of spheres
    // this.draw = this.draw.bind(this);
  }
  getRandom() {
    return Math.random();
  }
  newStar() {
    var starDiv = document.createElement('div');
    starDiv.innerHTML = '<figure class="star"></figure>';
    return starDiv.firstChild;
  }
  createStars() {
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    var viewportSize = viewportWidth + viewportHeight;
    var starLimit = viewportSize * 0.12;

    for (var i = 0; i <= starLimit; i++) {
      var star = this.newStar();
      star.style.top = this.getRandom() * 100 + "%";
      star.style.left = this.getRandom() * 100 + "%";
      star.style.height = (this.getRandom() * 3) + "px";
      star.style.width = star.style.height;
      star.style.webkitAnimationDelay = this.getRandom() + "s";
      star.style.mozAnimationDelay = this.getRandom() + "s";
      star.style.webkitAnimationDuration = this.getRandom() + 1 + "s";
      star.style.mozAnimationDuration = this.getRandom() + 1 + "s";
      document.body.appendChild(star);
    };
  }
  // // Cluster of spheres
  // setup = (p5, parent) => {
  //   p5.createCanvas(700, 500).parent(parent);
  //   p5.background(0);

  //  }
  // draw = p5 => {
  //   this.setState({objRotateX: objRotateX - 0.1});
  //   this.setState({objRotateY: objRotateY - 0.1});
  //   this.setState({objRotateZ: objRotateZ - 0.1});
  //   p5.rotateX(radians(this.objRotateX));
  //   p5.rotateY(radians(this.objRotateY));
  //   p5.rotateZ(radians(this.objRotateZ));
  //   var groupRadius = (height/2) - (height/10);
  //   var sphereCount = 50;
  //   var sphereMaxR = 30;

  //   // big sphere
  //   //noFill(); // hmmm, seems like noFill has no effect on 3d yet
  //   //stroke(255); // hmmm, seems like stroke has no effect on 3d yet
  //   //basicMaterial(255,255,255);
  //   //sphere(groupRadius, 20);

  //   // smaller spheres
  //   p5.basicMaterial(200);

  //   for (var s=0; s < sphereCount; s++) {

  //     var noiseCoord = s;
  //     var rnd = lerp(-1,1,noise(noiseCoord));


  //     // translate
  //     p5.rotateY(PI*rnd);
  //     p5.rotateZ(PI*rnd);
  //     p5.translate(groupRadius,0,0); 

  //     p5.sphere(rnd * sphereMaxR, 40);

  //     //reset translation
  //     p5.translate(-groupRadius,0,0);  
  //     p5.rotateY(-(PI*rnd));
  //     p5.rotateZ(-(PI*rnd));

  // }


  // }


  render() {
    return (
      <div className="App">
        <Meta />
        {this.createStars()}
        <div class="moon"></div>
        <div class="custom-navbar">
          <div class="brand-logo">
            <img src={heading} width="350px" />
          </div>
          <div class="navbar-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#" class="btn-request">Schedule Tickets</a></li>
            </ul>
          </div>
          <div class="box_astronaut">
            <img class="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" />
          </div>
        </div>
        <div class="central-body">
          <img class="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="450px" />
          <a href="#" class="btn-go-home">GO HOME</a>
        </div>
      </div>
    );
  }
}
