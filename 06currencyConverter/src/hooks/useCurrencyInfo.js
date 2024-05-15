
//// we can use the inbuilt hooks in our custom hook 

import {useEffect, useState} from "react"


//// there is a regular fashion of adding use before any hook 
function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    //// we will call an api here . when there will occur any change in the dependencies then only we will call the api 
    // we will do the work using the useEffect inbuilt api 
    useEffect(() => {

        /// call the api by fetch 
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

        //// after calling the api convert the response in json using .json method
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;