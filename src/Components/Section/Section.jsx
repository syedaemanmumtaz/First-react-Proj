import React from 'react'
import img1 from './chef7.png';
import img2 from './chef6.png';
import img3 from './chef9.png';
function Section() {
  return (
    <>
        <hr class="featurette-divider"/>

<div class="row featurette">
  <div class="col-md-7 top">
    <h5 className='text-info'>head-chef</h5>
    <h1 class="featurette-heading">ERIC PEDRO<span class="text-muted fs-5">It’ll blow your mind.</span></h1>
    <p class="lead">Eric Pedro is a chef and restaurateur who has woeked in Some great placeholder content for the first featurette here. Imagine some exciting prose here. Newkoork city eric pedro is currently the haed chef and owner of Table 4.2, a modern American restaurant in miami</p>
  </div>
  <div class="col-md-5">
    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src={img2} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

  </div>
</div>

<hr className="featurette-divider"/>

<div className="row featurette">
  <div className="col-md-7 order-md-2 top">
  <h5 className='text-info'>Pastry-Chef</h5>
    <h1 className="featurette-heading">KATIE KMANDA <span className="text-muted fs-5">See for yourself.</span></h1>
    <p className="lead">katie kmanda is a pastry chef is a culinary professional who works in a kitchen and makes various kinds of baked goods, including candies, chocolates, cakes, cookies, cupcakes, pies and bread. Pastry chefs usually earn their titles after working as regular cooks or bakers at restaurants or hotels.ome actual real-world content in place.</p>
  </div>
  <div className="col-md-5 order-md-1">
    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src={img1} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

  </div>
</div>

<hr className="featurette-divider"/>

<div className="row featurette">
  <div className="col-md-7 top">
  <h5 className='text-info'>Sushi-Chef</h5>
    <h1 className="featurette-heading">ANTHONY JOHN <span className="text-muted fs-5">Checkmate.</span></h1>
    <p className="lead text-center">Anthony john is a sushi chef Sushi chefs are highly skilled and their work is considered an art form. They also observe traditional Japanese sushi-making standards. 
    In Japan, an exceptional sushi chef is called an itamae, which literally translates to "in front of the board". It takes years of training and apprenticeship to become an itamae. what this would look like with some actual content. Your content.</p>
  </div>
  <div className="col-md-5">
    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={img3} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

  </div>
</div>

<hr className="featurette-divider"/>

    </>

  )
}

export default Section