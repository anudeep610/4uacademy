import React from 'react'
import Hero from "./Hero";
import Faq from "./Faq";
import Community from './Community';
import Reviews from "./Reviews";
import Courses from './Courses';

export default function Home() {
    return (
    <>
        <Hero/>
        <Courses/>
        <Reviews/>
        <Community/>
        <Faq/>
    </>
    )
}
