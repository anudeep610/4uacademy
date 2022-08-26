import React from 'react'
import Hero from "./Hero";
import Faq from "./Faq";
import Community from './Community';
import Reviews from "./Reviews";

export default function Home() {
    return (
    <>
        <Hero/>
        <Reviews/>
        <Community/>
        <Faq/>
    </>
    )
}
