import React from "react";



function carousel(){
    return(

        
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.pinimg.com/originals/52/8c/42/528c427608b37def4e01254cf7ded77f.jpg" class="d-block w-100 h-50" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="https://i.pinimg.com/originals/52/8c/42/528c427608b37def4e01254cf7ded77f.jpg" class="d-block w-100 h-50" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="https://i.pinimg.com/originals/52/8c/42/528c427608b37def4e01254cf7ded77f.jpg " class="d-block w-100 h-50" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    )
}

export default carousel;