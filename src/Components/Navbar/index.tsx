import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonCategory } from "../../Api";
import noutbek from '../../assets/img/noutbek.png'
import { Button, Input, Select } from "antd";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { SectionNavbar, Logo, SelectOption, Option, ButtonContact, CategorySection, SelectCategory, Container } from "./styled";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
type Props = {};


const Navbar: React.FC<Props> = ({ }: Props) => {
    const [btnColor, setBtnColor] = useState("#F1F1F1");

    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <Container>
            <SectionNavbar >
                <Link to="/">
                    <Logo src={noutbek} alt="react" />
                </Link>
                <SectionNavbar >
                    <Input.Group style={{ background: '#F1F1F1;' }} compact>
                        <Input
                            style={{ width: "calc(590px - 200px)", height: '56px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', background: '#F1F1F1' }}
                        />
                        <Button type="default" style={{ height: '56px', fontSize: '24px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', fontWeight: '400', lineHeight: '36px', background: '#F1F1F1' }} >Search</Button>
                    </Input.Group>
                    <SelectOption >
                        <Option value="UZ">UZ</Option>
                        <Option value="RU">RU</Option>
                    </SelectOption>
                    <Link style={{ textDecoration: 'none' }} to="/contactUs">
                        <ButtonContact><InfoOutlinedIcon />Biz bilan bog’lanish</ButtonContact>
                    </Link>
                </SectionNavbar>

            </SectionNavbar>

            <CategorySection>
                <SelectCategory>
                    <Option value="kategoriyalar">
                        <span>Kategoriyalar</span>
                    </Option>
                </SelectCategory>
                {/* {
                    ButtonCategory.map((item) => {
                        return (
                            <ButtonCategorys  key={item.id}  onClick={() => {
                                btnColor === "#F1F1F1" ? setBtnColor("#9BE1FF") : setBtnColor("#F1F1F1");
                              }} style={{backgroundColor:btnColor}} value={item.name}>
                                {item.name}
                            </ButtonCategorys>
                        )
                    })
                } */}
                {
                    ButtonCategory.map((item) => {
                        return (
                            <Box sx={{border:'1px solid #F1F1F1', width:'100%',height:'56px', borderRadius:'16px', textAlign:'center'}}>
                                <Tabs
                                    value={value}
                                    key={item.id}
                                    onChange={handleChange}
                                    textColor="secondary"
                                    indicatorColor="secondary"
                                    aria-label="secondary tabs example"
                                >
                                    <Tab value={item.id} label={item.name} />
                                </Tabs>
                            </Box>
                        )
                    })
                }
            </CategorySection>
        </Container>
    );
};

export default Navbar;
