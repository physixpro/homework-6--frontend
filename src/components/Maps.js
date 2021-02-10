import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Maps = () => {

    const[maps,setMaps]=useState([])

    useEffect( () => {
        const fetchMaps = async() => {
            const res = await axios.get('')
        }
    })
    return(
        <div>

        </div>
    )
}

export default Maps;