import React from 'react';
import img1 from './menu5.png';
import img2 from './fast.png';
import img3 from './dinnner.png';
function Card() {
  return (
    <>
    
    <div class="row my-5">
      <div class="col-lg-4">
        <img className="bd-placeholder-img rounded-circle" width={140} height={140} src={img2} role="img" aria-label="Placeholder: 140x140" ></img>
        <h2>Break-Fast </h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">Blog details &raquo;</a></p>
      </div>
      <div class="col-lg-4">
        
        <img class="bd-placeholder-img rounded-circle" width={140} height={140} src={img1} role="img" aria-label="Placeholder: 140x140"  ></img>

        <h2>Launch</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a className="btn btn-secondary" href="#">Blog details &raquo;</a></p>
      </div>
      <div class="col-lg-4">
        <img className="bd-placeholder-img rounded-circle" width={140} height={140} src={img3} role="img" aria-label="Placeholder: 140x140"  ></img>

        <h2>Dinner</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a class="btn btn-secondary" href="#">Blog details &raquo;</a></p>
      </div>
    </div>
    </>
  )
}

export default Card