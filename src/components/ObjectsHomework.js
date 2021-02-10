import React, {useState,useEffect} from 'react'
import axios from 'axios'

const ObjectsHomework = () => {

const[dogs,setDogs]=useState([])

    useEffect( () => {
        const fetchApi = async () => {
            const res = await axios.get('https://api.thedogapi.com/breeds')
            const dogs = res.data;
            setDogs(dogs)
            console.log(dogs)
        }
        fetchApi();
    },[])

    // var person = {
    //     country: 'Trinidad',
    //     ethnicity: 'west-Indian',
    //     pet: 'dog',
    //     music: 'rock',
    //     sex: "male"
    // }

    // const entries = Object.entries(person)
    // console.log(entries)
   
    // for (const entry of entries) {
    //     console.log(entry)
    // }

    // var car = {
    //     brand: "tesla",
    //     year: "2019",
    //     color: "black",
    //     milleage: "142355 miles",
    //     insurance: "yes"
    // }

    // var animal = {
    //     kind: "dog",
    //     breed: "husky",
    //     sex: "female",
    //     color: "white and black", 
    //     size: "medium"
    // }

    

//     //Dot notation
//     console.log(person.country)
//     console.log(person.ethnicity)
//     console.log(person.sex)
// //bracket notation
//     console.log(car['brand'])
//     console.log(car['year'])
//     console.log(car['color'])
//     console.log(car['milleage'])



    return(
        <div>
          Hello dogs
          {
              dogs.map( dog => (
                 <p> {dog.breed}</p>
              ))
          }
          
        </div>
    )
}

export default ObjectsHomework;
