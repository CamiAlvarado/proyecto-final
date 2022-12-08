import React from 'react';
import './styles.css';
import One from '../../Components/Img/the-phantom-menace.jfif';
import Two from '../../Components/Img/attack-of-the-clones.jfif';
import Three from '../../Components/Img/revenge-of-the-sith.jfif';
import Four from '../../Components/Img/a-new-hope.jfif';
import Five from '../../Components/Img/the-empire-strikes-back.jfif';
import Six from '../../Components/Img/return-of-the-jedi.jfif';
import Seven from '../../Components/Img/the-force-awakens.jfif';
import Eight from '../../Components/Img/Rogue-1.jpg';
import Nine from '../../Components/Img/the-last-jedi.jfif';
import Ten from '../../Components/Img/solo.jfif';
import Eleven from '../../Components/Img/the-rise-of-the-skywalker.jfif';

function Movies() {

    const moviesArray = [
        {
            name: "THE PHANTOM MENACE",
            img: One,
            description:
                "After a millennia, an ancient evil returns seeking revenge. Meanwhile, Jedi Knight Qui-Gon Jinn discovers Anakin Skywalker: a young slave boy unusually strong with the Force.",
        },
        {
            name: "ATTACK OF THE CLONES",
            img: Two,
            description:
                "Following an assassination attempt on Senator Padmé Amidala, Jedi Knights Anakin Skywalker and Obi-Wan Kenobi investigate a mysterious plot that could change the galaxy forever.",
        },
        {
            name: "REVENGE OF THE SITH",
            img: Three,
            description:
                "The evil Darth Sidious enacts his final plan for unlimited power and the heroic Jedi Anakin Skywalker must choose a side.",
        },
        {
            name: "A NEW HOPE",
            img: Four,
            description:
                "With the planet-destroying power of the Death Star, the Empire looks to cement its grip on the galaxy. Meanwhile, farm boy Luke Skywalker rises to face his destiny.",
        },
        {
            name: "THE EMPIRE STRIKES BACK",
            img: Five,
            description:
                "While the Death Star has been destroyed, the battle between the Empire and the Rebel Alliance rages on...and the evil Darth Vader continues his relentless search for Luke Skywalker.",
        },
        {
            name: "RETURN OF THE JEDI",
            img: Six,
            description:
                "Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion once and for all with a second dreaded Death Star.",
        },
        {
            name: "THE FORCE AWAKENS",
            img: Seven,
            description:
                "Thirty years after the Battle of Endor, a new threat has risen in the form of the First Order and the villainous Kylo Ren. Meanwhile, Rey, a young scavenger, discovers powers that will change her life -- and possibly save the galaxy.",
        },
        {
            name: "ROGUE ONE",
            img: Eight,
            description:
                "From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure. In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire’s ultimate weapon of destruction. This key event in the Star Wars timeline brings together ordinary people who choose to do extraordinary things, and in doing so, become part of something greater than themselves.",
        },
        {
            name: "THE LAST JEDI",
            img: Nine,
            description:
                "Rey has found the legendary Luke Skywalker, hoping to be trained in the ways of the Force. Meanwhile, the First Order seeks to destroy the remnants of the Resistance and rule the galaxy unopposed.",
        },
        {
            name: "SOLO: A STAR WARS STORY",
            img: Ten,
            description:
                "Board the Millennium Falcon and journey to a galaxy far, far away in Solo: A Star Wars Story, an all-new adventure with the most beloved scoundrel in the galaxy. Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian, in a journey that will set the course of one of the Star Wars saga’s most unlikely heroes.",
        },
        {
            name: "THE RISE OF THE SKYWALKER",
            img: Eleven,
            description: "A powerful enemy returns and Rey must face her destiny.",
        },
    ];

    return (
        <div className='moviesContainer'>
            {moviesArray.map((item, index) => (
                <div className='movieCard' key={index}>
                    <p className='movieName'> {item.name}</p>
                    <div className='movieImgContainer'>
                        <img className='movieImg' src={item.img} alt={item.name} />
                    </div>
                    <div className='movieDescriptionContainer'>
                        <p className='movieDescription'>{item.description}</p>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Movies