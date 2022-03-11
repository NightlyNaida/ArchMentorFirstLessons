import React from 'react';

let emojies = {
  oil: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/oil-drum_1f6e2-fe0f.png',
  lights: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/police-car-light_1f6a8.png',
  firecar: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/fire-engine_1f692.png',
  bed: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/bed_1f6cf-fe0f.png',
}


function FunctionalComponent(props) {
    const [activeList,changeList] = React.useState(0);
    
    let refsToggle = [React.useRef(),React.useRef(),React.useRef(),React.useRef()]
    let refsSlides = [React.useRef(),React.useRef(),React.useRef(),React.useRef()]
    let refSlidesContainer = React.useRef();

    React.useEffect(()=>{
      refsToggle[activeList].current.classList.add('toggler_item_active');
      refsSlides[activeList].current.classList.add('slide_active');
      refSlidesContainer.current.style.transform = `translate(-${390*activeList}px,0)`
    },[activeList])

    function togglerClick(e){
      let listNumber = parseInt(e.currentTarget.getAttribute('listnumber'));
      refsToggle[activeList].current.classList.remove("toggler_item_active");
      refsSlides[activeList].current.classList.remove('slide_active');
      changeList(listNumber);
    }
      
    return (
    <>
      <div className="container">
        <div ref={refSlidesContainer} className="slides">
          <div ref={refsSlides[0]} className="slide">
            <div className="content_head">
              <img src={emojies.oil} alt="" className="emoji"/>
              <div className="caption_and_step">
                <p className="step">Шаг 1</p>
                <h1 className="caption">Проверь масло</h1>
              </div>
            </div>
            <p className="maintext">
            Полнотсью вытащи щуп, вставь его <br /> 
            обратно до упора, снова вытащи. <br /> 
            След от масла долже достигать засечки
            </p>
          </div>
          <div ref={refsSlides[1]} className="slide">
            <div className="content_head">
              <img src={emojies.lights} alt="" className="emoji"/>
              <div className="caption_and_step">
                <p className="step">Шаг 2</p>
                <h1 className="caption">Включи мигалку</h1>
              </div>
            </div>
            <p className="maintext">
            Над водительским козырьком <br /> 
            расположено устройстов для её<br /> 
            включения. Просто нажми.
            </p>
          </div>
          <div ref={refsSlides[2]} className="slide">
            <div className="content_head">
              <img src={emojies.firecar} alt="" className="emoji"/>
              <div className="caption_and_step">
                <p className="step">Шаг 3</p>
                <h1 className="caption">Быстро поезжай</h1>
              </div>
            </div>
            <p className="maintext">
            Технично перестраиваясь, игнорируя<br /> 
            сигналы светофоров, держи путь до места<br /> 
            проишествия.
            </p>
          </div>
          <div ref={refsSlides[3]} className="slide">
            <div className="content_head">
              <img src={emojies.bed} alt="" className="emoji"/>
              <div className="caption_and_step">
                <p className="step">Шаг 4</p>
                <h1 className="caption">Не забудь поспать</h1>
              </div>
            </div>
            <p className="maintext">
            В конце рабочего дня обязательно поспи.<br /> 
            Здоровый сон - залог успешной и<br /> 
            обеспеченной жизни.
            </p>
          </div>
        </div>
        <div className="toggler">
          <div ref={refsToggle[0]} listnumber="0" onClick={togglerClick} className="toggler_item toggler_item_active"></div>
          <div ref={refsToggle[1]} listnumber="1" onClick={togglerClick} className="toggler_item"></div>
          <div ref={refsToggle[2]} listnumber="2" onClick={togglerClick} className="toggler_item"></div>
          <div ref={refsToggle[3]} listnumber="3" onClick={togglerClick} className="toggler_item"></div>
        </div>
      </div>
      <div className="background"></div>
    </>    
    );
}



export default FunctionalComponent;
