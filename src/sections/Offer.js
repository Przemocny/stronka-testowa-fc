import React from 'react';
import './Offer.css'

const offerData1 = {
    name:'Usługa 1',
    isNew:true
}

const offerData2 = {
    name:'Usługa 2',
    isNew:false
}

const offerData3 = {
    name:'Usługa 3',
    isNew:false
}

const offerData4 = {
    name:'Usługa 4',
    isNew:false
}

const offerData5 = {
    name:'Usługa 5',
    isNew:false
}

const offerData6 = {
    name:'Usługa 6',
    isNew:false
}

const offers = [offerData1,offerData2,offerData3,offerData4,
    offerData5,offerData6]


const SingleOffer = ({name, isNew})=>{
    return (
        <div className="col l4 m6 s12 offer-item">
            <div className="offer-item-inner valign-wrapper">
                <div>
                    <h4>{name}</h4>
                    {isNew && <h6>NOWOŚĆ</h6>}
                    {isNew ? <h6>NOWOŚĆ</h6> : <h6>NIE NOWOŚĆ</h6>}
                </div>
            </div>
        </div>)
}


const Offer = ()=>{
    return (
        <div className="offer">
            <div className="container">
                <h1>Czym zajmuje się nasza firma?</h1>

                <div className="row">
                    {offers.map((offer, index)=>{
                        return (<SingleOffer {...offer}
                            key={index}/>)
                    })}
                </div>
                


            </div>
        </div>
        
        )
}

export default Offer