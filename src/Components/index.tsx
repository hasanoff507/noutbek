import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Container } from "./styled";
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from "./Home";
import Selected from "./Selected";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import { AllCardType, getAllCard, getSelectCard } from "../Api/Crud";


type Props = {

};

const Components: React.FC<Props> = ({ }: Props) => {
    const { id }: any = useParams()

    const [simpledata, setSimpledata] = useState<AllCardType[]>([])
    const [value, setValue] = useState<any>()
    

    useEffect(() => {
      const fetchData = async () => {
        const response = await getAllCard(value);
        setSimpledata(response);
      };
  
      fetchData();
    }, [value]);
    

  
    return (
        <Container>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home simpledata={simpledata}/>}/>
                    <Route path="/selected/:id" element={<Selected  simpledata={simpledata}/>} />
                    <Route path="/contactUs" element={<ContactUs/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </Container>
    );
};

export default Components;
