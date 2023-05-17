import React from 'react'
import logoo from "../assets/img/logo (1).png"
const Footer = () => {
  return (
    <>


    <div className="footer ">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3 g-5 ">
                    <div className="photo  ">
                        <img className='mt-3 ' width={70} src={logoo} alt="" />
                    </div>

                    <div className="writing d-flex  my-5 justify-content">
                    <i className=" fa-brands fa-instagram"></i>
                    <i class=" ms-2 fa-brands fa-facebook"></i>
                    <i class=" ms-2 fa-brands fa-wpressr"></i>
                    <i class=" ms-2 fa-solid fa-envelope"></i>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="header mt-5">
                        <h4 style={{ color: "red" }}>Categories</h4>
                    </div>
                    <div className="first d-flex mt-3">
                        {/* <img width={50} src={bir} alt="" /> */}

                        <div className="tag">
                           <h6>Watches</h6>
                           <h6>Watch Accessories</h6>
                        </div>

                    </div>

                    <div className="second d-flex mt-3">
                        {/* <img width={50} src={iki} alt="" /> */}

                        <div className="write">
                          <h6>Clocks</h6>
                          <h6>Jewellery</h6>
                        </div>
                    </div>

                    <div className="third d-flex mt-3">
                        {/* <img width={50} src={uc} alt="" /> */}

                        <div className="read">
                            <h6 >Jules Audemars</h6>
                          
                        </div>
                    </div>

                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="baslig mt-5">
                        <h4 style={{ color: "red" }} >Services</h4>
                    </div>
                    <div className="birinci d-flex ">
                        {/* <img width={50} src={bir} alt="" /> */}

                        <div className="yazi">
                            <h6  >Patrimony Ultra Calibre 1742</h6>
                            <h5  >$8,400.00</h5>
                        </div>
                    </div>

                    <div className="ikinci d-flex mt-3">
                        {/* <img width={50} src={bir} alt="" /> */}

                        <div className="komp">
                            <h6  >Patrimony Ultra Calibre 1742</h6>
                            <h5  >$8,400.00</h5>
                        </div>
                    </div>



                    <div className="ucuncu d-flex mt-3">
                        {/* <img width={50} src={bir} alt="" /> */}
                        <div className="tel">
                            <h6  >Patrimony Ultra Calibre 1742</h6>
                            <h5  >$8,400.00</h5>
                        </div>
                    </div>

                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="end mt-5">
                        <h4 >LATEST NEWS</h4>


                    </div>

                    <div className="ptag">
                        <p >Oh, Princess Leia, are you all right?
                            Your time is limited…
                            Tour of Envato’s Melbourne Headquarters
                            TemashDesign Portfolio</p>
                    </div>

                    <div className="endtag">
                        <h4 >NEWSLETTER</h4>
                    </div>

                  <form className='mt-3' >
                    <input style={{color:"orange"}} placeholder='Enter your email' type="text" />
                    <button  >Subscribe</button>
                  </form>

                </div>

            </div>
        </div>




    </div>




</>
  )
}

export default Footer