import React, { useState, useEffect } from "react";
import { API } from "../../API/API";
import "./styles.css";

function Cards() {
    const [personajes, setPersonajes] = useState([]);

    let newArr = [];

    const nombres = [
        "Luke Skywalker",
        "Leia Organa",
        "C-3PO",
        "R2-D2",
        "Darth Vader",
        "Anakin Skywalker",
        "Chewbacca",
        "Han Solo",
        "Yoda",
        "Palpatine",
        "Boba Fett",
        "Padmé Amidala",
        "Jar Jar Binks",
        "Darth Maul",
        "Mace Windu",
        "Rey",
        "Finn",
        "Poe Dameron",
        "BB8",
        "Captain Phasma"
    ];

    const getData = async () => {
        const data = await API();

        for (let ele of nombres) {
            newArr.push(
                data.find((items) => items.name === nombres[nombres.indexOf(ele)])
            );
        }
        setPersonajes(newArr);
    };

    useEffect(() => {
        getData();

    }, []);

    console.log(personajes)


    return (
        <>
            <div className="mainContainer">
                {personajes.map((item) => (
                    <div className="cardContainer" key={personajes.indexOf(item)}>
                        <div className="imgContainer">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="infoContainer">
                            <p>{item.name}</p>
                            <p>{item.species}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Cards;