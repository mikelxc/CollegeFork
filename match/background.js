var config = {
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#4F81BC","#C0504E","#9ABB58","#23BFAA","#8063A1","#4BACC5","#F79747","#7F6084","#77A034","#34558B","#E59566","#4F81BB"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 50,
      "color": "#555555",
      "opacity": 0.5,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.8,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 20,
        "size": 2,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 50
      },
      "push": {
        "particles_nb": 10,
        // "distance": 5
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
};

particlesJS('particles-js', config);

var button = document.getElementById('cb3');
button.addEventListener("change", function(){
  document.getElementById("shakyh2").classList.toggle("shake-slow");
  if(button.checked == false){
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window["pJSDom"] = [];

  }else{
    particlesJS('particles-js', config);

  }
})
