import Cards from "./Cards"
import React, {useEffect, useState} from 'react'
import celebr from '../../helpers/usuarios.js'
const ListCards = () => {
    //console.log(celebr[0].name.title)
    return (
        <div>        
            <div className="container">
                <div className="row">
 
                {celebr.map(user => (
                    <div className="col-sm-6 col-md-3 col-lg-3" key = {user.login.uuid}>
                        {console.log(user)}
                        <Cards user={user}/>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    )
}

export default ListCards

