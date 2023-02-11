import React from "react";
import Navbar from "./Navbar";
import { Container } from "./styled";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Home";
import Selected from "./Selected";
import ContactUs from "./ContactUs";
import Footer from "./Footer";


type Props = {};

const Components: React.FC<Props> = ({ }: Props) => {


    return (
        <Container>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                    <Route path="/selected/:id" element={<Selected />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </Container>
    );
};

export default Components;
