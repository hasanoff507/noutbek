import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Container } from "./styled";
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from "./Home";
import Selected from "./Selected";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import { AllCardType, getAllCard, getAllCategory, getSelectCard } from "../Api/Crud";
import { useQuery } from "react-query";


type Props = {

};

const Components: React.FC<Props> = ({ }: Props) => {

    const {isError,isLoading}= useQuery('data' , getAllCategory,)

    const [dataHome, setData] = useState<AllCardType[]>([])


    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllCard();
            setData(response);
        };
        fetchData();
        
    }, []);

    if (isLoading) {
        return (
          <div>
            {isLoading && <div>Loading ...</div>}
          </div>
        )
      }else if(isError){
        return(
          <div>
            {isError && <div>Error</div>}
          </div>
        )
      }
    return (
        <Container>
            <BrowserRouter>
                <Navbar setData={setData} />
                <Routes>
                    <Route path="/" element={<Home simpledata={dataHome} />} />
                    <Route path="/selected/:id" element={<Selected />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </Container>
    );
};

export default Components;
