import React, { useEffect, useState } from "react";
import Card from "./Card"
import axios from "axios"

const Cards = () => {
    const [models, setModels] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setModels(res.data)
        })
    }, [])

    return (
        <>
            <div className="container-md container-lg p-5 d-flex flex-row mb-3">
                {
                    models.map((model, index) => (
                        <Card items={model} key={index} />
                    ))
                }
            </div>
        </>
    )
}
export default Cards