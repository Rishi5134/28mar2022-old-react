import React from 'react'

const Carasoul = () => {
  return (
      <>
      <div className="d-flex flex-column w-100 carosoul_height carosoul_settings">
              

                <div id="carouselExampleCaptions" className="carousel slide w-auto mt-3" data-bs-ride="carousel">
                    <div className="carousel-indicators ">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner my-4 ">
                        <div className="carousel-item carousel-item2 active">
                            <div className='img_carosol d-block'>

                            </div>
                            <div className="carousel-caption carousel-caption2 d-md-block">
                                <h2>3G Power</h2>
                                <p>3 Times more powerful than ProMax</p>
                            </div>
                        </div>
                        <div className="carousel-item carousel-item2 ">
                            <div className='img_carosol d-block'>
                           </div>
                            <div className="carousel-caption carousel-caption2 d-md-block">
                                <h2>Prof. Dr. Jiten Bhatt</h2>
                                <p>Visited Giza complex in the east side of the pyramid measuring the energy.</p>
                            </div>
                        </div>
                        <div className="carousel-item  carousel-item2">
                            <div className='img_carosol d-block'>

                           </div>
                            <div className="carousel-caption carousel-caption2 d-md-block">
                                <h2>Prof. Dr. Jiten Bhatt</h2>
                                <p>Have Recorded accurate angle reading at the Great Pyramid in Egypt.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </div>

      </>
  )
}

export default Carasoul