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
        {name: One},
        {name: Two}
            // Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven
        ]
    const moviesStarWars  = moviesArray.map((movie) => {
        return movie.name;
    }
    )
    console.log(Movies)






    return (
        <div className='Movies'>
            <div className='One'>
                <p>THE PHANTOM MENACE</p>
                <div className='movies__container--img'>
                    <img src={One} alt="The-Phantom-Menace" />
                </div>
                <div className='information__container'>
                    <p>
                        After a millennia, an ancient evil returns seeking revenge. Meanwhile, Jedi Knight Qui-Gon Jinn discovers Anakin Skywalker: a young slave boy unusually strong with the Force.
                    </p>
                </div>
            </div>

            <div className='Two'>
                <p>ATTACK OF THE CLONES</p>
                <div className='movies__container--img'>
                    <img src={Two} alt="Attack-of-the-clones" />
                </div>
                <div className='information__container'>
                    <p>
                        Following an assassination attempt on Senator Padmé Amidala, Jedi Knights Anakin Skywalker and Obi-Wan Kenobi investigate a mysterious plot that could change the galaxy forever.
                    </p>
                </div>
            </div>

            <div className='Three'>
                <p>REVENGE OF THE SITH</p>
                <div className='movies__container--img'>
                    <img src={Three} alt="Revenge-of-the-sith" />
                </div>
                <div className='information__container'>
                    <p>
                        The evil Darth Sidious enacts his final plan for unlimited power and the heroic Jedi Anakin Skywalker must choose a side.
                    </p>
                </div>
            </div>

            <div className='Four'>
                <p>A NEW HOPE</p>
                <div className='movies__container--img'>
                    <img src={Four} alt="a-new-hope" />
                </div>
                <div className='information__container'>
                    <p>
                        With the planet-destroying power of the Death Star, the Empire looks to cement its grip on the galaxy. Meanwhile, farm boy Luke Skywalker rises to face his destiny.
                    </p>
                </div>
            </div>

            <div className='Five'>
                <p>THE EMPIRE STRIKES BACK</p>
                <div className='movies__container--img'>
                    <img src={Five} alt="The-empire-strikes-back" />
                </div>
                <div className='information__container'>
                    <p>
                        While the Death Star has been destroyed, the battle between the Empire and the Rebel Alliance rages on...and the evil Darth Vader continues his relentless search for Luke Skywalker.
                    </p>
                </div>
            </div>

            <div className='Six'>
                <p>RETURN OF THE JEDI</p>
                <div className='movies__container--img'>
                    <img src={Six} alt="Return-of-the-jedi" />
                </div>
                <div className='information__container'>
                    <p>
                        Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion once and for all with a second dreaded Death Star.
                    </p>
                </div>
            </div>

            <div className='Seven'>
                <p>THE FORCE AWAKENS</p>
                <div className='movies__container--img'>
                    <img src={Seven} alt="The-force-awakens" />
                </div>
                <div className='information__container'>
                    <p>
                        Thirty years after the Battle of Endor, a new threat has risen in the form of the First Order and the villainous Kylo Ren. Meanwhile, Rey, a young scavenger, discovers powers that will change her life -- and possibly save the galaxy.
                    </p>
                </div>
            </div>

            <div className='Eight'>
                <p>ROGUE ONE</p>
                <div className='movies__container--img'>
                    <img src={Eight} alt="Rogue-one" />
                </div>
                <div className='information__container'>
                    <p>
                        From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure. In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire’s ultimate weapon of destruction. This key event in the Star Wars timeline brings together ordinary people who choose to do extraordinary things, and in doing so, become part of something greater than themselves.
                    </p>
                </div>
            </div>

            <div className='Nine'>
                <p>THE LAST JEDI</p>
                <div className='movies__container--img'>
                    <img src={Nine} alt="The-last-jedi" />
                </div>
                <div className='information__container'>
                    <p>
                        Rey has found the legendary Luke Skywalker, hoping to be trained in the ways of the Force. Meanwhile, the First Order seeks to destroy the remnants of the Resistance and rule the galaxy unopposed.
                    </p>
                </div>
            </div>

            <div className='Ten'>
                <p>SOLO: A STAR WARS STORY</p>
                <div className='movies__container--img'>
                    <img src={Ten} alt="Solo" />
                </div>
                <div className='information__container'>
                    <p>
                        Board the Millennium Falcon and journey to a galaxy far, far away in Solo: A Star Wars Story, an all-new adventure with the most beloved scoundrel in the galaxy. Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian, in a journey that will set the course of one of the Star Wars saga’s most unlikely heroes.
                    </p>
                </div>
            </div>

            <div className='Eleven'>
                <p>THE RISE OF THE SKYWALKER</p>
                <div className='movies__container--img'>
                    <img src={Eleven} alt="The-rise-of-the-skywalker" />
                </div>
                <div className='information__container'>
                    <p>
                        A powerful enemy returns and Rey must face her destiny.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Movies