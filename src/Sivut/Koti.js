import React, { useEffect, useState } from 'react'
import reactlogo from '../images/reactlogo.png';
import '../index.css';

function useScrollToNextSection(thresholdShow, thresholdHide) {
  const [isAnimatedVisible, setIsAnimatedVisible] = useState(false);
  const [isAnimatedInvisible, setIsAnimatedInvisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
  
      if (scrollY >= thresholdShow && !isAnimatedInvisible) {
        setIsAnimatedInvisible(true);
        setIsAnimatedVisible(false);
       }

      else if (scrollY <= thresholdHide && isAnimatedInvisible) {
        setIsAnimatedVisible(true);
        setIsAnimatedInvisible(false);  
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
 
    };
  }, [isAnimatedVisible, isAnimatedInvisible, thresholdHide, thresholdShow]);

  return { isAnimatedVisible, isAnimatedInvisible };
}

function Koti() {
    const [isClicked, setIsClicked] = useState(false);
    const [reverseClick, setReverseClick] = useState(false);
    const thresholdHide = 300;
    const thresholdShow = 400;
    const {isAnimatedInvisible:isAnimated1Invisible, isAnimatedVisible: isAnimated1Visible } = useScrollToNextSection(thresholdShow, thresholdHide);


    const handleClick = () => {
        setIsClicked(true);
    };
   
    const handleReverseClick = () => {
        setReverseClick(true);
    };

    useEffect(() => {
        if(reverseClick && isClicked){
            setTimeout(() =>{
                setIsClicked(false)
                setReverseClick(false)
            },1000)     
        }
    },[isClicked, reverseClick])

    return (
        <div id='koti'>
            <div id="ekaosio">
                <p id="teksti1" onClick={handleClick} className={`${isClicked ? 'slide' : ''} ${reverseClick ? 'slideback' : ''}`}>
                    Hei!<br />
                    Nimeni on Arttu Lankinen ja olen 21-vuotias tietotekniikka
                    insinöri opiskelija Kuopiosta.<br/> Harrastuksiini 
                    kuuluu salilla käyminen, tietokoneet ja koodaus.<br/> 
                    <span>NEXT/CLICK</span>
                </p>
                <p id='teksti2' style={{ opacity: 0}} onClick={handleReverseClick} className={`${isClicked ? 'slide2' : ''} ${reverseClick ? 'slideback2' : ''}`}>
                    Oikealla yläkulmassa voit navigoida yhteydenotto <br/> sivulle tai minun CV:seen!<br/>
                    Alhaalla on kerrottu lisää sivusta <br/>
                    <span>GO BACK</span>
                </p>
            </div>
            <div class="curve">
                <div class="curves">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div id='tokaosio'>
                <p id='teksti3' style={{opacity:0}}  className={`${isAnimated1Invisible ? 'fadein' : ''} ${isAnimated1Visible ? 'fadeout' : ''}`}>Tämä sivu on toteutettu käyttäen Reactia, <img id='reactlogo' src={reactlogo} alt='logo'/><br/>
                    Sivun tarkoituksena on antaa ymmärrystä koodaus taidoistani 
                    ja kertoa Työnantajille itestäni.</p>             
            </div>
        </div>
    );
}

export { Koti }