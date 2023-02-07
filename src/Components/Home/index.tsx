import React from "react";

import { Card } from 'antd';
import { Container } from "@mui/material";
import cardImg from '../../assets/img/cardImg.png'


const { Meta } = Card;
type Props = {};

const Home: React.FC<Props> = ({ }: Props) => {


    return (
        <Container>
            <Card
                hoverable
                style={{ width: '361px', height:'486px', background: '#F1F1F1' }}
                cover={<img  alt="example" src={cardImg} />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </Container>
    );
};

export default Home;
