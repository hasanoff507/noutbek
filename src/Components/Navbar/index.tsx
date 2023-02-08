import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonCategory } from "../../Api/SimpleApi";
import noutbek from '../../assets/img/noutbek.png'
import { Button, Input, Select } from "antd";
import HomeIcon from '@mui/icons-material/Home';
import { SectionNavbar, Logo, SelectOption, Option, ButtonContact, CategorySection, SelectCategory, Container } from "./styled";
// import Tabs from './Tabs'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { TabPanel } from "@mui/lab";
type Props = {};

const selectedButtonStyle = {
    backgroundColor: 'blue',
    color: 'white'
  };
  
const Navbar: React.FC<Props> = ({ }: Props) => {
    const [selectedId, setSelectedId] = useState<boolean | number>(true);

    console.log(selectedId);

    const handleClick = (id: number | boolean | ((prevState: number | boolean) => number | boolean)) => {
        setSelectedId(id);
      };
    return (
        <Container>
            <SectionNavbar >
                <Link to="/">
                    <Logo src={noutbek} alt="react" />
                </Link>
                <SectionNavbar >
                    <Input.Group compact>
                        <Input
                            style={{ width: "calc(590px - 200px)", height: '50px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', background: '#F1F1F1' }}
                        />
                        <Button type="default" style={{ height: '50px', fontSize: '24px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', fontWeight: '400', lineHeight: '36px', background: '#F1F1F1' }} >Search</Button>
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
                        Kategoriyalar
                    </Option>
                </SelectCategory>
                <Link to='/' style={{ width: '30%', background: "#F1F1F1", borderRadius: '16px', textAlign: 'center', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'black', fontSize: '24px', }}>
                    <HomeIcon />
                </Link>
                {
                    ButtonCategory.map((item) => {
                        return (
                            <Link className={ item.id === selectedId ? 'blackbackgraund':'whitebackground'} style={{
                                width: '100%',
                                // background: "rgb(241, 241, 241)",
                                // backgroundColor: item.id === selectedId ? "black" : '#F1F1F1',
                                borderRadius: '16px',
                                textAlign: 'center',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                color: 'black',
                                fontSize: '24px',
                            }}
                                onClick={() => handleClick(item.id)}
                                to={item.path} key={item.id} >

                                    
                                {item.name}
                            </Link>
                        )
                    })
                }
            </CategorySection>
        </Container>
    );
};

export default Navbar;
