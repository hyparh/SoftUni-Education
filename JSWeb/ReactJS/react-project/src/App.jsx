function App() {
  return (
    <>
      <section id="home" className="welcome-hero">
        {/* top-area Start */}
        <div className="top-area">
          <div className="header-area">
            {/* Start Navigation */}
            <nav
              className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
              data-minus-value-desktop={70}
              data-minus-value-mobile={55}
              data-speed={1000}
            >
              <div className="container">
                {/* Start Header Navigation */}
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i className="fa fa-bars" />
                  </button>
                  <a className="navbar-brand" href="index.html">
                    carvilla
                    <span />
                  </a>
                </div>
                {/*/.navbar-header*/}
                {/* End Header Navigation */}
                {/* Collect the nav links, forms, and other content for toggling */}
                <div
                  className="collapse navbar-collapse menu-ui-design"
                  id="navbar-menu"
                >
                  <ul
                    className="nav navbar-nav navbar-right"
                    data-in="fadeInDown"
                    data-out="fadeOutUp"
                  >
                    <li className=" scroll active">
                      <a href="#home">home</a>
                    </li>
                    <li className="scroll">
                      <a href="#service">service</a>
                    </li>
                    <li className="scroll">
                      <a href="#featured-cars">featured cars</a>
                    </li>
                    <li className="scroll">
                      <a href="#new-cars">new cars</a>
                    </li>
                    <li className="scroll">
                      <a href="#brand">brands</a>
                    </li>
                    <li className="scroll">
                      <a href="#contact">contact</a>
                    </li>
                  </ul>
                  {/*/.nav */}
                </div>
                {/* /.navbar-collapse */}
              </div>
              {/*/.container*/}
            </nav>
            {/*/nav*/}
            {/* End Navigation */}
          </div>
          {/*/.header-area*/}
          <div className="clearfix" />
        </div>
        {/* /.top-area*/}
        {/* top-area End */}
        <div className="container">
          <div className="welcome-hero-txt">
            <h2>get your desired car in resonable price</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="welcome-btn" onclick="window.location.href='#'">
              contact us
            </button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="model-search-content">
                <div className="row">
                  <div className="col-md-offset-1 col-md-2 col-sm-12">
                    <div className="single-model-search">
                      <h2>select year</h2>
                      <div className="model-select-icon">
                        <select className="form-control">
                          <option value="default">year</option>
                          {/* /.option*/}
                          <option value={2018}>2018</option>
                          {/* /.option*/}
                          <option value={2017}>2017</option>
                          {/* /.option*/}
                          <option value={2016}>2016</option>
                          {/* /.option*/}
                        </select>
                        {/* /.select*/}
                      </div>
                      {/* /.model-select-icon */}
                    </div>
                    <div className="single-model-search">
                      <h2>body style</h2>
                      <div className="model-select-icon">
                        <select className="form-control">
                          <option value="default">style</option>
                          {/* /.option*/}
                          <option value="sedan">sedan</option>
                          {/* /.option*/}
                          <option value="van">van</option>
                          {/* /.option*/}
                          <option value="roadster">roadster</option>
                          {/* /.option*/}
                        </select>
                        {/* /.select*/}
                      </div>
                      {/* /.model-select-icon */}
                    </div>
                  </div>
                  <div className="col-md-offset-1 col-md-2 col-sm-12">
                    <div className="single-model-search">
                      <h2>select make</h2>
                      <div className="model-select-icon">
                        <select className="form-control">
                          <option value="default">make</option>
                          {/* /.option*/}
                          <option value="toyota">toyota</option>
                          {/* /.option*/}
                          <option value="holden">holden</option>
                          {/* /.option*/}
                          <option value="maecedes-benz">maecedes-benz.</option>
                          {/* /.option*/}
                        </select>
                        {/* /.select*/}
                      </div>
                      {/* /.model-select-icon */}
                    </div>
                    <div className="single-model-search">
                      <h2>car condition</h2>
                      <div className="model-select-icon">
                        <select className="form-control">
                          <option value="default">condition</option>
                          {/* /.option*/}
                          <option value="something">something</option>
                          {/* /.option*/}
                          <option value="something">something</option>
                          {/* /.option*/}
                          <option value="something">something</option>
                          {/* /.option*/}
                        </select>
                        {/* /.select*/}
                      </div>
                      {/* /.model-select-icon */}
                    </div>
                  </div>
                  <div className="col-md-offset-1 col-md-2 col-sm-12">
                    <div className="single-model-search">
                      <h2>select model</h2>
                      <div className="model-select-icon">
                        <select className="form-control">
                          <option value="default">model</option>
                          {/* /.option*/}
                          <option value="kia-rio">kia-rio</option>
                          {/* /.option*/}
                          <option value="mitsubishi">mitsubishi</option>
                          {/* /.option*/}
                          <option value="ford">ford</option>
                          {/* /.option*/}
                        </select>
                        {/* /.select*/}
                      </div>
                      {/* /.model-select-icon */}
                    </div>
                    <div className="single-model-search">
                      <h2>select price</h2>
                      <div className="model-select-icon">
                        <select className="form-control">
                          <option value="default">price</option>
                          {/* /.option*/}
                          <option value="$0.00">$0.00</option>
                          {/* /.option*/}
                          <option value="$0.00">$0.00</option>
                          {/* /.option*/}
                          <option value="$0.00">$0.00</option>
                          {/* /.option*/}
                        </select>
                        {/* /.select*/}
                      </div>
                      {/* /.model-select-icon */}
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-12">
                    <div className="single-model-search text-center">
                      <button
                        className="welcome-btn model-search-btn"
                        onclick="window.location.href='#'"
                      >
                        search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/.welcome-hero*/}
      {/*welcome-hero end */}
      {/*service start */}
      <section id="service" className="service">
        <div className="container">
          <div className="service-content">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="single-service-item">
                  <div className="single-service-icon">
                    <i className="flaticon-car" />
                  </div>
                  <h2>
                    <a href="#">
                      largest dealership <span> of</span> car
                    </a>
                  </h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut den fugit sed quia.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-service-item">
                  <div className="single-service-icon">
                    <i className="flaticon-car-repair" />
                  </div>
                  <h2>
                    <a href="#">unlimited repair warrenty</a>
                  </h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut den fugit sed quia.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-service-item">
                  <div className="single-service-icon">
                    <i className="flaticon-car-1" />
                  </div>
                  <h2>
                    <a href="#">insurence support</a>
                  </h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut den fugit sed quia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/.container*/}
      </section>
      {/*/.service*/}
      {/*service end*/}
      {/*new-cars start */}
      <section id="new-cars" className="new-cars">
        <div className="container">
          <div className="section-header">
            <p>
              checkout <span>the</span> latest cars
            </p>
            <h2>newest cars</h2>
          </div>
          {/*/.section-header*/}
          <div className="new-cars-content">
            <div className="owl-carousel owl-theme" id="new-cars-carousel">
              <div className="new-cars-item">
                <div className="single-new-cars-item">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <div className="new-cars-img">
                        <img
                          src="images/new-cars-model/ncm1.png"
                          alt="img"
                        />
                      </div>
                      {/*/.new-cars-img*/}
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="new-cars-txt">
                        <h2>
                          <a href="#">
                            chevrolet camaro <span> za100</span>
                          </a>
                        </h2>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                        <p className="new-cars-para2">
                          Sed ut pers unde omnis iste natus error sit voluptatem
                          accusantium doloremque laudantium.
                        </p>
                        <button
                          className="welcome-btn new-cars-btn"
                          onclick="window.location.href='#'"
                        >
                          view details
                        </button>
                      </div>
                      {/*/.new-cars-txt*/}
                    </div>
                    {/*/.col*/}
                  </div>
                  {/*/.row*/}
                </div>
                {/*/.single-new-cars-item*/}
              </div>
              {/*/.new-cars-item*/}
              <div className="new-cars-item">
                <div className="single-new-cars-item">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <div className="new-cars-img">
                        <img
                          src="images/new-cars-model/ncm2.png"
                          alt="img"
                        />
                      </div>
                      {/*/.new-cars-img*/}
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="new-cars-txt">
                        <h2>
                          <a href="#">BMW series-3 wagon</a>
                        </h2>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                        <p className="new-cars-para2">
                          Sed ut pers unde omnis iste natus error sit voluptatem
                          accusantium doloremque laudantium.
                        </p>
                        <button
                          className="welcome-btn new-cars-btn"
                          onclick="window.location.href='#'"
                        >
                          view details
                        </button>
                      </div>
                      {/*/.new-cars-txt*/}
                    </div>
                    {/*/.col*/}
                  </div>
                  {/*/.row*/}
                </div>
                {/*/.single-new-cars-item*/}
              </div>
              {/*/.new-cars-item*/}
              <div className="new-cars-item">
                <div className="single-new-cars-item">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <div className="new-cars-img">
                        <img
                          src="images/new-cars-model/ncm3.png"
                          alt="img"
                        />
                      </div>
                      {/*/.new-cars-img*/}
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="new-cars-txt">
                        <h2>
                          <a href="#">ferrari 488 superfast</a>
                        </h2>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                        <p className="new-cars-para2">
                          Sed ut pers unde omnis iste natus error sit voluptatem
                          accusantium doloremque laudantium.
                        </p>
                        <button
                          className="welcome-btn new-cars-btn"
                          onclick="window.location.href='#'"
                        >
                          view details
                        </button>
                      </div>
                      {/*/.new-cars-txt*/}
                    </div>
                    {/*/.col*/}
                  </div>
                  {/*/.row*/}
                </div>
                {/*/.single-new-cars-item*/}
              </div>
              {/*/.new-cars-item*/}
            </div>
            {/*/#new-cars-carousel*/}
          </div>
          {/*/.new-cars-content*/}
        </div>
        {/*/.container*/}
      </section>
      {/*/.new-cars*/}
      {/*new-cars end */}
      {/*featured-cars start */}
      <section id="featured-cars" className="featured-cars">
        <div className="container">
          <div className="section-header">
            <p>
              checkout <span>the</span> featured cars
            </p>
            <h2>featured cars</h2>
          </div>
          {/*/.section-header*/}
          <div className="featured-cars-content">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-featured-cars">
                  <div className="featured-img-box">
                    <div className="featured-cars-img">
                      <img
                        src="images/featured-cars/fc1.png"
                        alt="cars"
                      />
                    </div>
                    <div className="featured-model-info">
                      <p>
                        model: 2017
                        <span className="featured-mi-span"> 3100 mi</span>
                        <span className="featured-hp-span"> 240HP</span>
                        automatic
                      </p>
                    </div>
                  </div>
                  <div className="featured-cars-txt">
                    <h2>
                      <a href="#">BMW 6-series gran coupe</a>
                    </h2>
                    <h3>$89,395</h3>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-featured-cars">
                  <div className="featured-img-box">
                    <div className="featured-cars-img">
                      <img
                        src="images/featured-cars/fc2.png"
                        alt="cars"
                      />
                    </div>
                    <div className="featured-model-info">
                      <p>
                        model: 2017
                        <span className="featured-mi-span"> 3100 mi</span>
                        <span className="featured-hp-span"> 240HP</span>
                        automatic
                      </p>
                    </div>
                  </div>
                  <div className="featured-cars-txt">
                    <h2>
                      <a href="#">
                        chevrolet camaro <span>wmv20</span>
                      </a>
                    </h2>
                    <h3>$66,575</h3>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-featured-cars">
                  <div className="featured-img-box">
                    <div className="featured-cars-img">
                      <img
                        src="images/featured-cars/fc3.png"
                        alt="cars"
                      />
                    </div>
                    <div className="featured-model-info">
                      <p>
                        model: 2017
                        <span className="featured-mi-span"> 3100 mi</span>
                        <span className="featured-hp-span"> 240HP</span>
                        automatic
                      </p>
                    </div>
                  </div>
                  <div className="featured-cars-txt">
                    <h2>
                      <a href="#">
                        lamborghini <span>v520</span>
                      </a>
                    </h2>
                    <h3>$125,250</h3>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-featured-cars">
                  <div className="featured-img-box">
                    <div className="featured-cars-img">
                      <img
                        src="images/featured-cars/fc4.png"
                        alt="cars"
                      />
                    </div>
                    <div className="featured-model-info">
                      <p>
                        model: 2017
                        <span className="featured-mi-span"> 3100 mi</span>
                        <span className="featured-hp-span"> 240HP</span>
                        automatic
                      </p>
                    </div>
                  </div>
                  <div className="featured-cars-txt">
                    <h2>
                      <a href="#">
                        audi <span> a3</span> sedan
                      </a>
                    </h2>
                    <h3>$95,500</h3>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-featured-cars">
                  <div className="featured-img-box">
                    <div className="featured-cars-img">
                      <img
                        src="images/featured-cars/fc4.png"
                        alt="cars"
                      />
                    </div>
                    <div className="featured-model-info">
                      <p>
                        model: 2017
                        <span className="featured-mi-span"> 3100 mi</span>
                        <span className="featured-hp-span"> 240HP</span>
                        automatic
                      </p>
                    </div>
                  </div>
                  <div className="featured-cars-txt">
                    <h2>
                      <a href="#">
                        infiniti <span>z5</span>
                      </a>
                    </h2>
                    <h3>$36,850</h3>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-featured-cars">
                  <div className="featured-img-box">
                    <div className="featured-cars-img">
                      <img
                        src="images/featured-cars/fc5.png"
                        alt="cars"
                      />
                    </div>
                    <div className="featured-model-info">
                      <p>
                        model: 2017
                        <span className="featured-mi-span"> 3100 mi</span>
                        <span className="featured-hp-span"> 240HP</span>
                        automatic
                      </p>
                    </div>
                  </div>
                  <div className="featured-cars-txt">
                    <h2>
                      <a href="#">
                        porsche <span>718</span> cayman
                      </a>
                    </h2>
                    <h3>$48,500</h3>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-featured-cars">
                  <div className="featured-img-box">
                    <div className="featured-cars-img">
                      <img
                        src="images/featured-cars/fc7.png"
                        alt="cars"
                      />
                    </div>
                    <div className="featured-model-info">
                      <p>
                        model: 2017
                        <span className="featured-mi-span"> 3100 mi</span>
                        <span className="featured-hp-span"> 240HP</span>
                        automatic
                      </p>
                    </div>
                  </div>
                  <div className="featured-cars-txt">
                    <h2>
                      <a href="#">
                        <span>bmw 8-</span>series coupe
                      </a>
                    </h2>
                    <h3>$56,000</h3>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-featured-cars">
                  <div className="featured-img-box">
                    <div className="featured-cars-img">
                      <img
                        src="images/featured-cars/fc8.png"
                        alt="cars"
                      />
                    </div>
                    <div className="featured-model-info">
                      <p>
                        model: 2017
                        <span className="featured-mi-span"> 3100 mi</span>
                        <span className="featured-hp-span"> 240HP</span>
                        automatic
                      </p>
                    </div>
                  </div>
                  <div className="featured-cars-txt">
                    <h2>
                      <a href="#">
                        BMW <span> x</span>series-6
                      </a>
                    </h2>
                    <h3>$75,800</h3>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/.container*/}
      </section>
      {/*/.featured-cars*/}
      {/*featured-cars end */}
      {/* clients-say strat */}
      <section id="clients-say" className="clients-say">
        <div className="container">
          <div className="section-header">
            <h2>what our clients say</h2>
          </div>
          {/*/.section-header*/}
          <div className="row">
            <div className="owl-carousel testimonial-carousel">
              <div className="col-sm-3 col-xs-12">
                <div className="single-testimonial-box">
                  <div className="testimonial-description">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img
                          src="images/clients/c1.png"
                          alt="image of clients person"
                        />
                      </div>
                      {/*/.testimonial-img*/}
                    </div>
                    {/*/.testimonial-info*/}
                    <div className="testimonial-comment">
                      <p>
                        Sed ut pers unde omnis iste natus error sit voluptatem
                        accusantium dolor laudan rem aperiam, eaque ipsa quae ab
                        illo inventore verit.
                      </p>
                    </div>
                    {/*/.testimonial-comment*/}
                    <div className="testimonial-person">
                      <h2>
                        <a href="#">tomas lili</a>
                      </h2>
                      <h4>new york</h4>
                    </div>
                    {/*/.testimonial-person*/}
                  </div>
                  {/*/.testimonial-description*/}
                </div>
                {/*/.single-testimonial-box*/}
              </div>
              {/*/.col*/}
              <div className="col-sm-3 col-xs-12">
                <div className="single-testimonial-box">
                  <div className="testimonial-description">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img
                          src="images/clients/c2.png"
                          alt="image of clients person"
                        />
                      </div>
                      {/*/.testimonial-img*/}
                    </div>
                    {/*/.testimonial-info*/}
                    <div className="testimonial-comment">
                      <p>
                        Sed ut pers unde omnis iste natus error sit voluptatem
                        accusantium dolor laudan rem aperiam, eaque ipsa quae ab
                        illo inventore verit.
                      </p>
                    </div>
                    {/*/.testimonial-comment*/}
                    <div className="testimonial-person">
                      <h2>
                        <a href="#">romi rain</a>
                      </h2>
                      <h4>london</h4>
                    </div>
                    {/*/.testimonial-person*/}
                  </div>
                  {/*/.testimonial-description*/}
                </div>
                {/*/.single-testimonial-box*/}
              </div>
              {/*/.col*/}
              <div className="col-sm-3 col-xs-12">
                <div className="single-testimonial-box">
                  <div className="testimonial-description">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img
                          src="images/clients/c3.png"
                          alt="image of clients person"
                        />
                      </div>
                      {/*/.testimonial-img*/}
                    </div>
                    {/*/.testimonial-info*/}
                    <div className="testimonial-comment">
                      <p>
                        Sed ut pers unde omnis iste natus error sit voluptatem
                        accusantium dolor laudan rem aperiam, eaque ipsa quae ab
                        illo inventore verit.
                      </p>
                    </div>
                    {/*/.testimonial-comment*/}
                    <div className="testimonial-person">
                      <h2>
                        <a href="#">john doe</a>
                      </h2>
                      <h4>washington</h4>
                    </div>
                    {/*/.testimonial-person*/}
                  </div>
                  {/*/.testimonial-description*/}
                </div>
                {/*/.single-testimonial-box*/}
              </div>
              {/*/.col*/}
            </div>
            {/*/.testimonial-carousel*/}
          </div>
          {/*/.row*/}
        </div>
        {/*/.container*/}
      </section>
      {/*/.clients-say*/}
      {/* clients-say end */}
      {/*brand strat */}
      <section id="brand" className="brand">
        <div className="container">
          <div className="brand-area">
            <div className="owl-carousel owl-theme brand-item">
              <div className="item">
                <a href="#">
                  <img src="images/brand/br1.png" alt="brand-image" />
                </a>
              </div>
              {/*/.item*/}
              <div className="item">
                <a href="#">
                  <img src="images/brand/br2.png" alt="brand-image" />
                </a>
              </div>
              {/*/.item*/}
              <div className="item">
                <a href="#">
                  <img src="images/brand/br3.png" alt="brand-image" />
                </a>
              </div>
              {/*/.item*/}
              <div className="item">
                <a href="#">
                  <img src="images/brand/br4.png" alt="brand-image" />
                </a>
              </div>
              {/*/.item*/}
              <div className="item">
                <a href="#">
                  <img src="images/brand/br5.png" alt="brand-image" />
                </a>
              </div>
              {/*/.item*/}
              <div className="item">
                <a href="#">
                  <img src="images/brand/br6.png" alt="brand-image" />
                </a>
              </div>
              {/*/.item*/}
            </div>
            {/*/.owl-carousel*/}
          </div>
          {/*/.clients-area*/}
        </div>
        {/*/.container*/}
      </section>
      {/*/brand*/}
      {/*brand end */}
      {/*blog start */}
      <section id="blog" className="blog" />
      {/*/.blog*/}
      {/*blog end */}
      {/*contact start*/}
      <footer id="contact" className="contact">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">carvilla</a>
                  </div>
                  <p>
                    Ased do eiusm tempor incidi ut labore et dolore magnaian
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <div className="footer-contact">
                    <p>info@themesine.com</p>
                    <p>+1 (885) 2563154554</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="single-footer-widget">
                  <h2>about devloon</h2>
                  <ul>
                    <li>
                      <a href="#">about us</a>
                    </li>
                    <li>
                      <a href="#">career</a>
                    </li>
                    <li>
                      <a href="#">
                        terms <span> of service</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">privacy policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="single-footer-widget">
                  <h2>top brands</h2>
                  <div className="row">
                    <div className="col-md-7 col-xs-6">
                      <ul>
                        <li>
                          <a href="#">BMW</a>
                        </li>
                        <li>
                          <a href="#">lamborghini</a>
                        </li>
                        <li>
                          <a href="#">camaro</a>
                        </li>
                        <li>
                          <a href="#">audi</a>
                        </li>
                        <li>
                          <a href="#">infiniti</a>
                        </li>
                        <li>
                          <a href="#">nissan</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-5 col-xs-6">
                      <ul>
                        <li>
                          <a href="#">ferrari</a>
                        </li>
                        <li>
                          <a href="#">porsche</a>
                        </li>
                        <li>
                          <a href="#">land rover</a>
                        </li>
                        <li>
                          <a href="#">aston martin</a>
                        </li>
                        <li>
                          <a href="#">mersedes</a>
                        </li>
                        <li>
                          <a href="#">opel</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-offset-1 col-md-3 col-sm-6">
                <div className="single-footer-widget">
                  <h2>news letter</h2>
                  <div className="footer-newsletter">
                    <p>Subscribe to get latest news update and informations</p>
                  </div>
                  <div className="hm-foot-email">
                    <div className="foot-email-box">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Add Email"
                      />
                    </div>
                    {/*/.foot-email-box*/}
                    <div className="foot-email-subscribe">
                      <span>
                        <i className="fa fa-arrow-right" />
                      </span>
                    </div>
                    {/*/.foot-email-icon*/}
                  </div>
                  {/*/.hm-foot-email*/}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="row">
              <div className="col-sm-6">
                <p>
                  © copyright.designed and developed by{" "}
                  <a href="https://www.themesine.com/">themesine</a>.
                </p>
                {/*/p*/}
              </div>
              <div className="col-sm-6">
                <div className="footer-social">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest-p" />
                  </a>
                  <a href="#">
                    <i className="fa fa-behance" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*/.footer-copyright*/}
        </div>
        {/*/.container*/}
        <div id="scroll-Top">
          <div className="return-to-top">
            <i
              className="fa fa-angle-up "
              id="scroll-top"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Back to Top"
              aria-hidden="true"
            />
          </div>
        </div>
        {/*/.scroll-Top*/}
      </footer>
      {/*/.contact*/}
    </>
  );
}

export default App;
