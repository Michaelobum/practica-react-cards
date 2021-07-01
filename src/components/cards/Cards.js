import { Button } from 'bootstrap'
import React, {useEffect, useState} from 'react'
const Cards = ({user}) => {
    const {name,login,picture} = user
    const [megusta, setColor] = useState(true)
    const [meencanta, setColor1] = useState(true)
    console.log(user)
    return (
        <div className = "card" >
                <img src={picture.large} className="card-img-top" alt={login.username}/>
                    <div className="card-body">                        
                    <h5 className="card-title">{name.first}</h5>
                    <buttom
                         href="#" className={megusta ? "btn btn-primary": "btn btn-light" }
                        onClick={()=>setColor (!megusta)}>Me gusta</buttom>
                                            <buttom
                         href="#" className={meencanta ? "btn btn-danger": "btn btn-light" }
                        onClick={()=>setColor1 (!meencanta)}>Me encanta</buttom>
                    </div>
        </div>
    )
}

export default Cards


