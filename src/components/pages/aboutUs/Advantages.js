import React from "react";
import { useSelector } from "react-redux";
import uniqid from 'uniqid';

const Advantages = () => {
    const advantagesList = useSelector( state => state.advantagesList );

    return (
        <>
            <ul className="advantag">
            {
                advantagesList.map(item => {
                    const { img, nameImg, title, text, width, height } = item;

                    return (
                        <li className="advantag__item" key={uniqid()}>
                            <div className="advantag__img">
                                <img src={require(`${img}`)} alt={nameImg}  width={width} height={height}/>
                            </div>
                            <div className="advantag__content">
                                <h3 className="advantag__title">{title}</h3>
                                <p className="advantag__text">{text}</p>
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        </>
    )
}

export default Advantages;
