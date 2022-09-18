import React from "react";
import hanger from '../../assets/hanger.svg'
import cinema from '../../assets/cinema.svg'      
import concert from '../../assets/concert.svg'      
import fitness from '../../assets/fitness.svg'
import pets from '../../assets/pets.svg'
import restaurent from '../../assets/restaurent.svg'
import travelEquipment from '../../assets/travelEquipment.svg'
import barley from '../../assets/barley.svg'
import powerStation from '../../assets/powerStation.svg'
import babyCare from '../../assets/babyCare.svg'
import toy from '../../assets/toy.svg'



import shipWheel from '../../assets/shipWheel.svg'

const filterOptions = [
    {
        name: "Clothing & Shoes",
        icon: hanger
    },
    {
        name: "Entertainment",
        icon: cinema
    },
    {
        name: "Music",
        icon: concert
    },
    {
        name: "Sports & Lifestyles",
        icon: fitness
    },
    {
        name: "Pets",
        icon: pets
    },
    {
        name: "Kitchen Accessories",
        icon: restaurent
    },
    {
        name: "Travel Equipment",
        icon: travelEquipment
    },
    {
        name: "Growing & Garden",
        icon: barley
    },
    {
        name: "Electrical Tools",
        icon: powerStation
    },
    {
        name: "Mother Care",
        icon: babyCare
    },
    {
        name: "Toys & Entertainment",
        icon: toy
    },
    {
        name: "Vintage",
        icon: shipWheel
    },
]


const FilterBar = () => {

    return (
        <ul>{
            filterOptions.map((option)=> <li><img src={option.icon} alt=""/><br /><span>{option.name}</span></li>)
            
            }</ul>
    )



    
}

export default FilterBar;