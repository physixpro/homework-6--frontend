import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Twitter (){

    useEffect(() => {
        const fetchTweets =  async() => {
            const res = await axios.get('http://localhost:3001/')
            const tweets = res.data;
            setTweets(tweets);
            console.log(res);
        };
        fetchTweets();
    },[])

const[tweets,setTweets]=useState([])

    return(
        <div>
<h1>Home Page</h1>

{
    tweets.map(tweet => (
        <ul>
            <li>{tweet.description}</li>
            <li>{tweet.user_id}</li>
        </ul>
    ))
}
        </div>
    )
}

export default Twitter;