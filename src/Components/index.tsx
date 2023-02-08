import React from "react";
import Navbar from "./Navbar";
import { Container } from "./styled";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Home";
import Selected from "./Selected";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Designer from "./Categoys/disigner";
import Games from "./Categoys/games";
import Programming from "./Categoys/programming";

type Props = {};

const Components: React.FC<Props> = ({ }: Props) => {


    return (
        <Container>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                    <Route path="/selected" element={<Selected />} />
                    <Route path="/designer" element={<Designer />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/programming" element={<Programming />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </Container>
    );
};

export default Components;
