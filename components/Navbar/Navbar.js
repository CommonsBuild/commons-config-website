import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import Link from 'next/link'

class Navbar extends Component {
    state = { clicked : false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <style jsx>{`
                .NavbarItems {
                    background: black;
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 0.8rem;
                    color: white;
                }

                .fa-react {
                    margin-left: 0.2rem;
                    font-size: 1.6rem;
                }
                .nav-menu {
                    display: grid;
                    grid-template-columns: repeat(4, auto);
                    grid-gap: 30px;
                    list-style: none;
                    text-align: center;
                    width: 70vw;
                    height: 80px
                    justify-content: end;
                }
                .nav-links {
                    font-size: 1rem;
                    width: 200px;
                }
                .nav-subtitle {
                    font-size: 1rem;
                }
                `}</style>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link href={item.url}>
                                    <a className={item.cName} >
                                        <h1>{item.level}. {item.title}</h1>
                                    </a>
                                </Link>
                            </li>
                        )
                    }
                    )}
                </ul>
            </nav>
        )
    }
}

export default Navbar