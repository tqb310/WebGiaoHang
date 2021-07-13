import React, {useState} from 'react'
import Chiphi from './chiphi'
import Navbar from '../homepage/Navbar';
import Sidebar from '../homepage/Sidebar';
import Footer from '../homepage/Footer/Footer';

const BuucucPage = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Chiphi/>
            <Footer/>
        </>
    )
}
export default BuucucPage;