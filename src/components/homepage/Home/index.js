import React, {useState} from 'react'
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { IntroSection } from '../IntroSection';

const Home = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <IntroSection />
        </>
    )
}
 export default Home;