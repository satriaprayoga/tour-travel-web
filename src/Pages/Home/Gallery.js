import React from 'react';
import { Container, InputGroup, Button, Col, Row, Card, Image} from 'react-bootstrap';
import styled from 'styled-components';
import satu from '../assets/1.jpeg';
import dua from '../assets/2.jpeg';
import tiga from '../assets/3.jpeg';
import empat from '../assets/4.jpeg';
import lima from '../assets/5.jpeg';
import enam from '../assets/6.jpeg';
import tujuh from '../assets/7.jpeg';
import delapan from '../assets/8.jpeg';
import mount1 from '../assets/mountain1.png';
import mount2 from '../assets/mountain2.png';
import text from '../assets/text.png';
import mount from '../assets/bg.jpg';


const Styles = styled.div`
.popdes {
    font-size: 30px;
    margin: auto;
    width: 50%;
    text-align: center;
}

hr.garis{
    border-top: 2px solid #cb2027;
    border-bottom: 2px solid #cb2027;
    height: 0px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100px;
    text-align: center;
}

.main{
}

.main .gallery{
    height: 620px;
    width: auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr; /*i write auto four time because we want four rows*/
    grid-auto-rows: auto;
    grid-gap: 1em;
    grid-template-areas:
    'img1 img2 img3 img3'
    'img1 img4 img5 img6'
    'img8 img8 img7 img6';
}
.main .gallery .img{
    overflow: hidden;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.9 );
	border-radius: 2px;
}

.text a{
    text-decoration: none;
    color: #ffffff; 
}

.text h3{
    position: absolute;
    text-decoration: none;
    color: #ffffff;
    margin-left: 0.5em;
    transform: translate(0%,-250%);
}

.text p{
    text-decoration: none;
    color: #ffffff;
    margin-left: 1rem;
    transform: translate(0%,-200%);
}

.main .gallery .img:first-child{
    grid-area: img1;
}
.main .gallery .img:nth-child(2){
	grid-area: img2;
}
.main .gallery .img:nth-child(3){
	grid-area: img3;
}
.main .gallery .img:nth-child(4){
	grid-area: img4;
}
.main .gallery .img:nth-child(5){
	grid-area: img5;
}
.main .gallery .img:nth-child(6){
    grid-area: img6;
}
.main .gallery .img:nth-child(7){
	grid-area: img7;
}
.main .gallery .img:nth-child(8){
	grid-area: img8;
}

.main .gallery .img img{
	height: 100%;
	width: 100%;
	object-fit: cover;
	filter: brightness(1) grayscale(0);
	border-radius: 4px;
    transition: 0.3s ease-in-out;
}

.main .gallery .img:hover img{
    filter: brightness(0.5) grayscale(100);
    -webkit-transform: scale(1.15);
    -moz-transform: scale(1.15);
    -o-transform: scale(1.15);
    transform: scale(1.15);
}

@media only screen and (max-width: 900px){
	.main .gallery{
        min-height: 50rem;
		height: 50rem;
		display: grid;
        grid-template-columns: auto auto auto;
        grid-template-areas:
    'img1 img1 img2 img2'
    'img1 img1 img3 img3'
    'img4 img4 img5 img5'
    'img6 img7 img7 img7'
    'img8 img8 img8 img8';
	}
}

@media only screen and (max-width: 600px){
	.main .gallery{
		display: block;
	}
	.main .gallery .img{
		display: block;
		min-height: 20rem;
		height: 20rem;
        margin:2% 0;
        grid-template-areas:
    'img1 img1 img1 img1'
    'img2 img2 img2 img2'
    'img3 img3 img3 img3'
    'img4 img4 img4 img4'
    'img5 img5 img5 img5'
    'img6 img6 img6 img6'
    'img7 img7 img7 img7'
    'img8 img8 img8 img8';
	}
	.main .gallery .img img{
		display: block;
		filter: brightness(1) grayscale(0);
	}
}

.popular-explore{
    margin-top: 5px;
    text-align: right;
    padding-right: 50px;
}

@media only screen and (max-width: 600px){
	.popular-explore{
        margin-top: 1850px;
    }
}
.popular-explore a,p{
    font-size: 18px;
    text-decoration: none;
    color: #000000;
}

.container{
    position: relative;
    width: auto;
    display: flex;
    flex-wrap: wrap;
}
.container .box{
    position: relative;
    width: 260px;
    height: 270px;
    overflow: hidden;
    transition: 0.5s;
    margin: auto;
    box-shadow: 0 5px 10px rgba(0,0,0,.5);
}
.container .box:hover{
    z-index: 1;
    transform: scale(1.25);
    box-shadow: 0 25px 40px rgba(0,0,0,.5);
}
.container .box .imgBx{
    position: absolute;
    top: 0;
    left: 0;
    width : 100%;
    height: 100%;
}
.container .box .imgBx:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(180deg,#00ffd0,#000);
    mix-blend-mode: multiply;
    opacity: 0;
    transition: 0.5s;
}
.container .box:hover .imgBx:before{
    opacity: 1;
}
.container .box .imgBx img{
    position: absolute;
    top: 0;
    left: 0;
    width : 100%;
    height: 100%;
    object-fit: cover;
}
.container .box .content{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    padding: 20px;
    align-item: flex-end;
}
.container .box .content h3{
    color: #fff;
    transition: 0.5s;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 20px;
    transform: translateY(200px);
}
.container .box:hover .content h3{
    transform: translateY(0);
    transition-delay: 0.3s;
}
.container .box .content p{
    color: #fff;
    transform: translateY(300px);
    transition: 0.5s;
    font-size: 14px;
}
.container .box:hover .content p{
    transform: translateY(0);
    transition-delay: 0.4s;
}

@media only screen and (max-width: 1200px){
	.container .box{
        width: 220px;
        height: 260px;
    }
}
@media only screen and (max-width: 1000px){
	.container .box{
        width: 165px;
        height: 260px;
    }
}
@media only screen and (max-width: 900px){
	.container .box{
        width: 400px;
        height: 270px;
        margin-bottom: 20px;
    }
}
@media only screen and (max-width: 600px){
	.container .box{
        width: 400px;
    }
}

.zoom{
    top: 3em;
    width: 100%;
    height: 900px;
    position: relative;
    overflow: hidden;
    background: url(${mount});
    background-size: cover;
}
.zoom:before{
    content:'';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    z-index: 1000;
    background: linear-gradient(transparent, #fff);
}
.zoom #layer1{
    position: absolute;
    left: 40%;
    width: 100%;
    transform: translateX(-50%);
    z-index: 10;
}
.zoom #layer2{
    position: absolute;
    right: 0;
    width: 100%;
    z-index: 9;
}
.zoom #text{
    position: absolute;
    right: 0;
    width: 100%;
    transform: translateY(50%);
}
.konten{
    margin-top: 2em;
    box-sizing: border-box;
}
.konten h1{
    margin: 0;
    padding: 0;
    font-size: 5em;
}
.konten p{
    font-size: 1.2em;
}




`;

export const Gallery = () => (
<Styles>
<div>
<p className="popdes">Most Popular Destinations</p>
<hr className="garis" />
</div>
<div class="main">
		<div class="gallery">
			<div class="img">
				<img src={satu} alt=" "/>
                <div class="text">
                <a href="/"><h3>AAAAAAAAAAAA</h3>
                <p>XXXXXXXXXXXXXXXXXXXX</p></a>
			</div>
			</div>
			<div class="img">
				<img src={dua} />
                <div class="text">
                <a href="/"><h3>AAAAAAAAAAAA</h3>
                <p>XXXXXXXXXXXXXXXXXXXX</p></a>
			</div>
			</div>
			<div class="img">
				<img src={tiga} />
                <div class="text">
                <a href="/"><h3>AAAAAAAAAAAA</h3>
                <p>XXXXXXXXXXXXXXXXXXXX</p></a>
			</div>
			</div>
			<div class="img">
				<img src={empat} />
                <div class="text">
                <a href="/"><h3>AAAAAAAAAAAA</h3>
                <p>XXXXXXXXXXXXXXXXXXXX</p></a>
			</div>
			</div>
            <div class="img">
				<img src={lima} />
                <div class="text">
                <a href="/"><h3>AAAAAAAAAAAA</h3>
                <p>XXXXXXXXXXXXXXXXXXXX</p></a>
			</div>
			</div>
            <div class="img">
				<img src={enam} />
                <div class="text">
                <a href="/"><h3>AAAAAAAAAAAA</h3>
                <p>XXXXXXXXXXXXXXXXXXXX</p></a>
			</div>
			</div>
            <div class="img">
				<img src={tujuh} />
                <div class="text">
                <a href="/"><h3>AAAAAAAAAAAA</h3>
                <p>XXXXXXXXXXXXXXXXXXXX</p></a>
			</div>
			</div>
            <div class="img">
				<img src={delapan} />
                <div class="text">
                <a href="/"><h3>AAAAAAAAAAAA</h3>
                <p>XXXXXXXXXXXXXXXXXXXX</p></a>
			</div>
			</div>
		</div>
</div>
<div className="popular-explore">
    <a href="/"><p>Explore Destinations >></p></a></div>

<div>
<p className="popdes">Popular Landmarks</p>
<hr className="garis" />
</div>
<div class="container">
    <div class="box">
        <div class="imgBx">
            <img src={satu} />
        </div>
        <div class="content">
            <div>
                <h3>Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>   
    <div class="box">
        <div class="imgBx">
            <img src={dua} data-text="Code"/>
        </div>
        <div class="content">
            <div>
                <h3>Code</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
    <div class="box">
        <div class="imgBx">
            <img src={tiga} data-text="launch"/>
        </div>
        <div class="content">
            <div>
                <h3>Launch</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
    <div class="box">
        <div class="imgBx">
            <img src={empat} data-text="Earn"/>
        </div>
        <div class="content">
            <div>
                <h3>Earn</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>   
</div>
<section class="zoom">
    <img src={mount1} id="layer1" />
    <img src={mount2} id="layer2" />
    <img src={text} id="text" />
</section>
<section class="konten">
<h1>Make Your Trip Easier</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</section>

</Styles>
)