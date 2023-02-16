import React, { useState, useEffect } from "react";
import { Card } from 'antd';
import { Container } from "./styled";
import cardImg from '../../assets/img/cardImg.png'
import { getAllCard, AllCardType } from "../../Api/Crud/index";
import { useQuery } from "react-query/types/react";
import { Link } from "react-router-dom";
const { Meta } = Card;
type Props = {
  simpledata:AllCardType[]
};

const Home: React.FC<Props> = ({ simpledata }: Props) => {


  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px',flexWrap:'wrap' }}>
        {
          simpledata.map((item) => {
            return (
            <Link key={item.productID} to={`selected/${item.productID}`} style={{textDecoration:'none'}}>
              <Card
              key={item.productID}
                hoverable
                style={{ width: '360px', height: '486px', background: '#F1F1F1' }}
                cover={<img alt="example" src={cardImg} />}
              >
                <Meta title={item.productName} description={`Narxi: ${item.price}`} />
              </Card>
              </Link>
            )
          })
        }
      </div>
    </Container>
  );
};

export default Home;
