import React, { useState } from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Container } from "./styled";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import { FaFacebookF } from 'react-icons/fa'
import InstagramIcon from '@mui/icons-material/Instagram';
type Props = {};

const Footer: React.FC<Props> = ({ }: Props) => {


    return (
        <div style={{
            background: '#F1F1F1',
        }}>
            <Container>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <LocalPhoneIcon sx={{ width: '35px', height: '35px' }} />
                        <span style={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '30px',
                            lineHeight: '45px',
                            color: '#000000',
                        }}>
                            +998 91 683 20 03
                        </span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: '#000000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>

                            <YouTubeIcon sx={{ color: 'white' }} />
                        </div>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: '#000000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>

                            <TelegramIcon sx={{ color: 'white' }} />
                        </div>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: '#000000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>

                            <FaFacebookF style={{ color: 'white' }} />
                        </div>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: '#000000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>

                            <InstagramIcon sx={{ color: 'white' }} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
