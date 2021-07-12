import React from 'react'
import List from './List';
function Main() {
    return (
        <div className="Homepage">
            
            <List title="Featured Movies" url="movies" />          
            <List title="Featured Series" url="shows" />
            
        </div>
    )
}

export default Main
