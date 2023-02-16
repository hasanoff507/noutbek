import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import cardmedia from '../../assets/img/cardImg.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Content, CategorySelect, CategorySelectTitle, CategorySelectPrice, Quantity } from "./styled";
import { getSelectCard, AllCardType, } from "../../Api/Crud/index";
import { useParams } from "react-router-dom";
import logo from '../../assets/img/logo.png'
import { Button } from "antd";
import Characteristic from "./Tabs/index";
type Props = {
    simpledata:AllCardType[]
};

const Selected: React.FC<Props> = ({ simpledata }: Props) => {

    // const { id }: any = useParams()

    const [counter, setCounter] = useState(0)

   
   

    return (
        <Container>
            <Content>
                <Carousel width={465}>
                    <div >
                        <img src={cardmedia} alt="" style={{ borderRadius: '15px' }} />
                    </div>
                    <div>
                        <img src={cardmedia} alt="" style={{ borderRadius: '15px' }} />
                    </div>
                </Carousel>

                {
                    simpledata.map((item) => {
                        return (
                            <CategorySelect key={item.productID}>
                                <CategorySelectTitle>{item.productName}</CategorySelectTitle>
                                <CategorySelectPrice>Narxi: {item.price} s'om</CategorySelectPrice>
                                <div style={{ width: '750px', height: '2px', background: '#D9D9D9', marginTop: '70px' }} ></div>
                                <div style={{ display: 'flex' }}>
                                    <div>
                                        <Quantity>Miqdori:</Quantity>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            background: '#F1F1F1',
                                            width: '180px',
                                            height: '40px',
                                            padding: '0 20px',
                                            borderRadius: '16px',
                                        }}>
                                            <button style={{
                                                border: 'none',
                                                width: '30px',
                                                height: '40px',
                                                fontFamily: 'Poppins',
                                                fontSize: '32px',
                                                textAlign: 'center'
                                            }}
                                                onClick={() => setCounter(counter - 1)}>
                                                -
                                            </button>
                                            <h4>{counter}</h4>
                                            <button style={{
                                                border: 'none',
                                                width: '30px',
                                                height: '40px',
                                                fontFamily: 'Poppins',
                                                fontSize: '32px',
                                            }}
                                                onClick={() => setCounter(counter + 1)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <p style={{ background: '#D9D9D9', width: '2px', height: '120px', marginLeft: '170px', }}></p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '30px', marginLeft: '40px' }}>
                                        <div>
                                            <img src={logo} alt="" />
                                        </div>
                                        <div>
                                            <h5>Ishlab chiqaruvchi: {item.addition.manufacturer}</h5>
                                            <h5>Modeli: {item.addition.compModel}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="shopping">
                                    <Button>Xarid qilish</Button>
                                </div>
                            </CategorySelect>
                        )
                    })
                }
            </Content>
           <Characteristic simpledata={simpledata}/>
        </Container>
    );
};

export default Selected;
