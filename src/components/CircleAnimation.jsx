// import all the variables
import React, { useEffect, useState } from 'react'

// import css file
import './CircleAnimation.css'

const CircleAnimation = () => {
    const [value, setValue] = useState({
        title: "INHALE",
        time: 3
    })
    useEffect(() => {
        let id = setTimeout(() => {
            setValue({
                title: "HOLD",
                time: 2
            })
        }, 5000)

        let send = setTimeout(() => {
            setValue({
                title: "EXHALE",
                time: 2
            })
        }, 8000)

        return (() => {
            clearTimeout(id)
            clearTimeout(send)
        })
    }, [])
    return (
        <div class="container">
            <div className='text'>
                <h3>{value.title}</h3>
                <p> {value.time}SECONDS</p>
            </div>
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
        </div>
    )
}

export default CircleAnimation