
import { useEffect, useState } from 'react';

function Header(props) {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="banner" id={props.id} style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
            <div className="banner-title">
                <h1><i>{props.text}</i>{props.text2}</h1>
            </div>
            {props.children}
        </div>
    )
}

export default Header