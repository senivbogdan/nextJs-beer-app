import React from 'react';


const Modals = ({modalActive, setModalActive, selectedObj}) => {
    selectedObj.isChecked = false
    return (
        <div className={modalActive ? "isModal active" : "isModal"} onClick={() => setModalActive(false)}>
            <div className={modalActive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                    <p> More infomation about {selectedObj.name}</p>
                    <p>Tagline: {selectedObj.tagName}</p>
                    <p ><img className={"picture"} src={`${selectedObj["image_url"]}`} alt=""/></p>
                    <p>ABV: {selectedObj.abv}</p>
                    <p>Some information about beer {selectedObj.description}</p>
                    <p>Date of first brewed: {selectedObj["first_brewed"]}</p>
                    <p>Some brewers tips: {selectedObj["brewers_tips"]}</p>
            </div>
        </div>
    );
};

export default Modals;