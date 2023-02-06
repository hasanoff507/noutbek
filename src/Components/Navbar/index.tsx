import React, { useState } from "react";
import { Link } from "react-router-dom";
import noutbek from '../../assets/img/noutbek.png'
import { Button, Input, Select } from "antd";
import LanguageIcon from '@mui/icons-material/Language';
import { SectionNavbar,Logo,SelectOption,Option,ButtonContact } from "./styled";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
type Props = {};


const Navbar: React.FC<Props> = ({ }: Props) => {

    return (
        <SectionNavbar >
            <Link to="/">
                <Logo  src={noutbek} alt="react" />
            </Link>
            <SectionNavbar >
                <Input.Group style={{background:'#F1F1F1;'}} compact>
                    <Input
                        style={{ width: "calc(590px - 200px)",height:'56px', borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px' ,background:'#F1F1F1'}}
                    />
                    <Button type="default" style={{height:'56px', fontSize:'24px', borderTopRightRadius:'20px', borderBottomRightRadius:'20px', fontWeight:'400', lineHeight:'36px', background:'#F1F1F1'}} >Search</Button>
                </Input.Group>
                <SelectOption >
                    <Option value="UZ">UZ</Option>
                    <Option value="RU">RU</Option>
                </SelectOption>
                <Link style={{textDecoration:'none'}} to="/contactUs">
                    <ButtonContact><InfoOutlinedIcon/>Biz bilan bog’lanish</ButtonContact>
                </Link>
            </SectionNavbar>
        </SectionNavbar>
    );
};

export default Navbar;
