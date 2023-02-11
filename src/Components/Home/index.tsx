import React, { useState, useEffect } from "react";
import { Card } from 'antd';
import { Container } from "./styled";
import cardImg from '../../assets/img/cardImg.png'
import { getAllCard, AllCardType } from "../../Api/Crud/index";
import { useQuery } from "react-query/types/react";
import { Link } from "react-router-dom";
const { Meta } = Card;
type Props = {};

const Home: React.FC<Props> = ({ }: Props) => {

  const [simpledata, setSimpledata] = useState<AllCardType[]>([])
  const [value, setValue] = useState<any>()
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllCard(value);
      setSimpledata(response);
    };

    fetchData();
  }, [value]);

  console.log(simpledata, 'askjdhkh')



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
