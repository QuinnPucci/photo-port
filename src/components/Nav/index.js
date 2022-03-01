import React from 'react'

const categories = [
    {
        name: "commerical",
        description: "Photos of grocery stores, food trucks, and other commercial projects"
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies"},
    {
        name: "landscape",
        desription: "Fields, farmhouses, waterfalls, and the beauty of nature"
    }
    
]

const Nav = () => {
    return (
        <header>
            <h2>
                <a href= "/" >
                    <span role='img' aria-label="camera"> 📸 </span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">  
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span> Contact </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav