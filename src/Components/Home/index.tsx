import React, { useState, useEffect } from "react";
import { Card } from 'antd';
import { Container } from "./styled";
import cardImg from '../../assets/img/cardImg.png'
// import { getAllData } from "../../Api/Crud/index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query/types/react";
import * as api from '../../Api/Crud' 
const { Meta } = Card;
type Props = {};


interface Data {
  productName: string,
  price: number,
  categoryId: number,
  addition: {
    manufacturer: string,
    compBrand: string,
    compModel: string,
    intended: string,
    protBrand: string,
    protModel: string,
    minFrequency: string,
    maxFrequency: string,
    numberCores: number,
    numberOfThreads: number,
    cache: string,
    grapihicIntegrated: string,
    passmarkScore: string,
    operativRam: number,
    generationRam: string,
    store: number,
    storeType: string,
    graphicBrand: string,
    graphicModel: string,
    graphicType: string,
    bitsCount: string,
    graphicCPUSize: string,
    integratedGraphics: string,
    audio: string
  },
  characteristic: {
    protsessor: string,
    operativMemory: string,
    memory: string,
    vedioCard: string,
    display: string,
    myProperty: string,
    addition: string
  },
  images: [
    string
  ]
}



const Home: React.FC<Props> = ({ }: Props) => {
  const [simpledata, setSimpledata] = useState<Data[]>([]);


  // const { data } =useQuery('allData', api.getAllData())

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await ( getAllData() as Promise<Data[]>);
  //     setSimpledata(   response);
  //   };
  //   fetchData();
  // }, []);



  return (
    <Container>
      <Card
        hoverable
        style={{ width: '361px', height: '486px', background: '#F1F1F1' }}
        cover={<img alt="example" src={cardImg} />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </Container>
  );
};

export default Home;
