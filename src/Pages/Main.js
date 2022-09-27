import React ,{useState,useEffect} from 'react'
import {Navbar, Header,RoadMap,Welcome,Carousel,Faq, Team,Footer,WhiteList,JoinCommunity, Mint} from '../Components/index'
import '../Components/Header/Stars.css'
import { motion } from 'framer-motion'
import Loader from './Loader'



function Main() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(
        ()=>{
            setTimeout(()=>{
                setIsLoading(false);
            }, 5000)
        },[]
    )
    return (
        isLoading? <Loader/> :
        
        <motion.div
        id='main-container'
        initial ={{opacity:0}}
        animate= {{opacity:1, transition :{delay: 0.1,duration:1.3}}}
        exit={{ opacity:0 ,transition :{delay: 0.1,duration:0.2}}}
        >
            <div id="stars"></div>
            <div id="stars2"></div>
            <Navbar show/>
            <Header/>
            <Welcome/>
            <Carousel/>
            <WhiteList/>
            <RoadMap/>
            <Mint/>
            <Faq/>
            <Team/>
            <JoinCommunity/>
            <Footer/>
        </motion.div>
    )
}

export default Main
