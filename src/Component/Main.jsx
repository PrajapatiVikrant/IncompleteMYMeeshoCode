import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeProductlist } from "../State/Slice/Product";
import './Main.css';
function Main() {
    const dispatch = useDispatch();
    function selecttype(type) {
    document.getElementById(type).click();   
    }
    return (
        <main>
            <div className="section1">
                <div className="section1-text">

                    Lowest Prices <br />
                    Best Quality Shopping
                    <div className="section1-flex">
                        <div className="section1-item"><i className="fa-solid fa-truck"></i> <div>Free <br /> Delivery</div> <div className="section1-seperate">|</div>  </div>

                        <div className="section1-item"><i className="fa-solid fa-cash-register"></i><div>Cash on <br /> Delivery</div> <div className="section1-seperate">|</div></div>

                        <div className="section1-item">Easy <br /> Returns</div>
                    </div>
                    <a href="https://play.google.com/store/search?q=meesho+app&c=apps">
                        <button className="dowload">
                            <i className="fa-brands fa-google-play"></i>
                            <div className="download-text">  Download the Meesho App</div>

                        </button>
                    </a>

                </div>
                <img className="section1-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhW0g4L-CgUNv1DFmuH_XbxNpy7FrhUEJcw&usqp=CAU" alt="image" />


            </div>
            <div className="topcategory">
                <div className="topcategoryhctn">
                    <div>________________</div>
                    <div className="topcategoryheading">Top Categories to choose from</div>
                    <div>________________</div>
                </div>
                <center>
                    <div className="fashioncategory">
                        <div className="containonef">

                            <a href="#filterlist"><div className="womenfashion" onClick={() => selecttype('check3')}>
                                <h1 className="womenheading">Women's store</h1>
                                <div className="womenftype">
                                    <img src="https://images.pexels.com/photos/14950358/pexels-photo-14950358.jpeg?auto=compress&cs=tinysrgb&w=600" alt="cloth" className="typeimage" />
                                    <div className="texttype">Clothing</div>
                                </div>
                                <div className="womenftype">
                                    <img src="https://images.pexels.com/photos/15432811/pexels-photo-15432811/free-photo-of-woman-hand-holding-bag.jpeg?auto=compress&cs=tinysrgb&w=600" alt="hand bag" className="typeimage" />
                                    <div className="texttype">Hand bags</div>
                                </div>
                                <div className="womenftype">
                                    <img src="https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=600" alt="jewellary" className="typeimage" />
                                    <div className="texttype">Jewellery</div>
                                </div>
                                <div className="womenftype">
                                    <img src="https://media.istockphoto.com/id/502866962/photo/colorful-makeup-palette.jpg?b=1&s=612x612&w=0&k=20&c=DYoNtFqoOh99UlvxauIdcB32_VYly2aNaGDVW9HMxVo=" alt="beauty" className="typeimage" />
                                    <div className="texttype">Beauty</div>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="containtwof">
                            <div className="fasionheading">Be fashion forward</div>
                            <a href="#filterlist">
                                <div className="fashionmen" onClick={() => selecttype('check1')}>
                                    <h1 className="womenheading">Men's store</h1>
                                    <div className="womenftype">
                                        <img src="https://images.meesho.com/images/products/45021891/8zkb7_400.webp" alt="cloth" className="typeimageSmall" />
                                        <div className="texttype">Vest</div>
                                    </div>
                                    <div className="womenftype">
                                        <img src="https://images.meesho.com/images/products/188395672/olf0j_400.webp" alt="hand bag" className="typeimageSmall" />
                                        <div className="texttype"> necktshirt</div>
                                    </div>
                                    <div className="womenftype">
                                        <img src="https://images.meesho.com/images/products/328835287/ajjic_400.webp" alt="jewellary" className="typeimageSmall" />
                                        <div className="texttype">tshirt</div>
                                    </div>
                                    <div className="womenftype">
                                        <img src="https://images.meesho.com/images/products/142538545/vyxx8_400.webp" alt="beauty" className="typeimageSmall" />
                                        <div className="texttype">vest</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#filterlist">
                                <div className="fashionkids" onClick={() => selecttype('check2')}>
                                    <h1 className="womenheading">Kid's store</h1>
                                    <div className="womenftype">
                                        <img src="https://images.meesho.com/images/products/206038785/pcdc6_400.webp" alt="cloth" className="typeimageSmall" />
                                        <div className="texttype">T-shirt</div>
                                    </div>
                                    <div className="womenftype">
                                        <img src="https://images.meesho.com/images/products/70528753/kpvtg_400.webp" alt="hand bag" className="typeimageSmall" />
                                        <div className="texttype">Capris</div>
                                    </div>
                                    <div className="womenftype">
                                        <img src="https://images.meesho.com/images/products/333426676/mbxnq_400.webp" alt="jewellary" className="typeimageSmall" />
                                        <div className="texttype">Kurti skirt</div>
                                    </div>
                                    <div className="womenftype">
                                        <img src="https://images.meesho.com/images/products/307643997/spyrn_400.webp" alt="beauty" className="typeimageSmall" />
                                        <div className="texttype">TRACK PANT</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="essential">
                        <div className="essentialText">
                            <div className="essentialHeading"><h1>Essential</h1> <button className="essentialbtn">View All</button> </div>

                        </div>
                        <div className="essentioalImage">
                            <div className="essentialImageitem">
                                <div className="eimage">
                                    <img src="https://images.pexels.com/photos/3767442/pexels-photo-3767442.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="eimg" />
                                    <img src="https://images.pexels.com/photos/1775114/pexels-photo-1775114.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="eimg" />
                                </div>
                                <div className="eimgbtn">
                                    Home decor
                                </div>
                            </div>
                            <div className="essentialImageitem">
                                <div className="eimage">
                                    <img src="https://images.pexels.com/photos/7125662/pexels-photo-7125662.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="eimg" />
                                    <img src="https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="eimg" />
                                </div>
                                <div className="eimgbtn">
                                    Kitchen Appliances
                                </div>
                            </div>
                            <div className="essentialImageitem">
                                <div className="eimage">
                                    <img src="https://images.pexels.com/photos/3786155/pexels-photo-3786155.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="eimg" />
                                    <img src="https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="eimg" />
                                </div>
                                <div className="eimgbtn">
                                    Health Care
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </main>
    )
}
export default Main;




