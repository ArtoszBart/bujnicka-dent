import React from 'react'
import { Link } from 'react-router-dom';

const SingleOffer = ({ image, title, link, children }) => {
    return (
        <div className="offers-single">
            <Link to={link}><img src={image} alt="" /></Link>

            <h3>{title}</h3>
            <p>
                {children}
            </p>
            <Link to={link} className="button">Zobacz więcej</Link>
        </div>
    )
}

export default SingleOffer