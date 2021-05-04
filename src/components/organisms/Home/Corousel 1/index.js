import React from 'react'
import './style.css'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import Carousel from 'react-elastic-carousel';
import { useState } from 'react';
import Item from './Item'

function Index() {

    const [state, setState] = useState({
        items: [
            {id: 1, url: './asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png'},
            {id: 2, url: './asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png'},
            {id: 3, url: './asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png'},
            {id: 4, url: './asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png'},
            {id: 5, url: './asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png'}
          ]
    })
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow:3 },
      ];
    const handleBack = () => {
        const target = document.getElementsByClassName('homeCorousel1BodyItem')
        let i;
        for (i = 0; i < target.length; i++) {

        }
    }
    return (
        // <div className="homeCorouseContainer">
        // <div className='homeCorousel1'>
        //     <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        //         <div class="carousel-indicators">
        //             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        //             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //         </div>
        //         <div class="carousel-inner">
        //             <div class="carousel-item active homeCorousel1Active">
        //                 <div className="corouselItem">
        //                     <img src="./asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png" class="d-block w-60" alt="..." />
        //                     <div class="carousel-caption d-none d-md-block">
        //                         <h5>First slide label</h5>
        //                         <p>Some representative placeholder content for the first slide.</p>
        //                     </div>
        //                 </div>
        //                 <div className="corouselItem">
        //                     <img src="./asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" class="d-block w-60" alt="..." />
        //                     <div class="carousel-caption d-none d-md-block">
        //                         <h5>Second slide label</h5>
        //                         <p>Some representative placeholder content for the second slide.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="carousel-item active">
        //                 <img src="./asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" class="d-block w-60" alt="..." />
        //                 <div class="carousel-caption d-none d-md-block">
        //                     <h5>Second slide label</h5>
        //                     <p>Some representative placeholder content for the second slide.</p>
        //                 </div>
        //             </div>
        //             <div class="carousel-item">
        //                 <img src="./asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" class="d-block w-60" alt="..." />
        //                 <div class="carousel-caption d-none d-md-block">
        //                     <h5>Third slide label</h5>
        //                     <p>Some representative placeholder content for the third slide.</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        //             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span class="visually-hidden">Previous</span>
        //         </button>
        //         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        //             <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span class="visually-hidden">Next</span>
        //         </button>
        //     </div>
        // </div>
        // </div>
        // <div>
        //     <div>
        //         <div className="HomeCorousel1">
        //             <div className="homeCorousel1Body">
        //                 <div className='homeCorouselIcoChev'>
        //                     <div className='homeIconChev'>
        //                         <FaChevronCircleLeft style={{ fontSize: '28px' }} onClick={() => handleBack()} />
        //                     </div>
        //                     <div className='homeIconChev'>
        //                         <FaChevronCircleRight style={{ fontSize: '28px' }} />
        //                     </div>
        //                 </div>
        //                 <div className="homeCorousel1BodyItem" id='cor1'>
        //                     <p>Trends in 2020</p>
        //                     <img src="./asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt="" />
        //                 </div>
        //                 <div className="homeCorousel1BodyItem" id='cor2'>
        //                     <p>Black edition</p>
        //                     <img src="./asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt="" />
        //                 </div>
        //                 <div className="homeCorousel1BodyItem" id='cor3'>
        //                     <p>Trends in 2020</p>
        //                     <img src="./asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt="" />
        //                 </div>
        //                 <div className="homeCorousel1BodyItem" id='cor4'>
        //                     <p>Black edition</p>
        //                     <img src="./asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt="" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='homeCorouselOne'>
            <Carousel breakPoints={breakPoints}>
                <div>
                    <img src="./asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt=""/>
                </div>
                <div>
                    <img src="./asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt=""/>
                </div>
                <div>
                    <img src="./asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt=""/>
                </div>
                <div>
                    <img src="./asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt=""/>
                </div>
                <div>
                    <img src="./asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt=""/>
                </div>
            </Carousel>
        </div>
    )
}

export default Index
