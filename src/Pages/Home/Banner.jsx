const Banner = () => {

    return (
        <div>
            <div className="carousel h-[300px] md:h-[400px] lg:h-[600px] w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Gvhm3Pz/In-Shot-20231106-181642272.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a> 
                  <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide2" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/7WkQBD5/Screenshot-2023-11-06-012603.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a> 
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/R0Rq716/Screenshot-2023-11-06-013158.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a> 
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div> 
            </div>
        </div>
    );
};

export default Banner;