import {useEffect, useState} from 'react';


function CardBackDetails(prop){
    const [details, setDetails] = useState(prop);

    useEffect(() => {
        setDetails(details);
    }, [details]
    );

    return (
        <div className='cardBackDetails-wrap'>
            <img src={details.location.state.image} alt=''/>
            <div className='right-container'>
                <h2 className='title'>{details.location.state.title}</h2>
                <div>
                    <strong>Description</strong>
                    <p>{details.location.state.description}</p>
                </div>
                <div>
                    <strong>How to obtain it?</strong>
                    <p>{details.location.state.howToGet}</p>
                </div>
            </div>
        </div>
    );
}

export default CardBackDetails; 