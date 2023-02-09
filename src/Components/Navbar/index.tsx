import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonCategory } from "../../Api/SimpleApi";
import noutbek from '../../assets/img/noutbek.png'
import { Button, Input, Select } from "antd";
import LanguageIcon from '@mui/icons-material/Language';
import { SectionNavbar, Logo, SelectOption, Option, ButtonContact, CategorySection, SectionNavbars, Container } from "./styled";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuIcon from '@mui/icons-material/Menu';
type Props = {};

const selectedButtonStyle = {
    backgroundColor: 'blue',
    color: 'white'
};

const Navbar: React.FC<Props> = ({ }: Props) => {
    const navigate = useNavigate()

    const [selectedId, setSelectedId] = useState<boolean | number>(true);
    const [alignment, setAlignment] = React.useState<string | null>('left');

    console.log(selectedId);

    const handleClick = (id: number | boolean | ((prevState: number | boolean) => number | boolean)) => {
        setSelectedId(id);
    };
    function handleContact() {
        navigate('/contactUs')
    }
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };


    const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string | null,
    ) => {
      setAlignment(newAlignment);
    };
    return (
        <Container>
            <SectionNavbar >
                <Link to="/">
                    <Logo src={noutbek} alt="react" />
                </Link>
                <SectionNavbars >
                    <Input.Group compact>
                        <Input
                            style={{ width: "calc(590px - 200px)", height: '50px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', background: '#F1F1F1' }}
                        />
                        <Button type="default" style={{ height: '50px', fontSize: '24px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', fontWeight: '400', lineHeight: '36px', background: '#F1F1F1' }} >Search</Button>
                    </Input.Group>
                    <div className="selectLanguage" style={{ position: 'relative' }}>
                        <LanguageIcon style={{ position: 'absolute', zIndex: '999', top: '50%', transform: 'translateY(-50%)', paddingLeft:'7px',  }} />
                        <Select

                            defaultValue="UZ"
                            style={{ width: "100px" ,background:'#F1F1F1;' }}
                            onChange={handleChange}
                            options={[
                                { value: 'UZ', label: 'UZ' },
                                { value: 'RU', label: 'RU' },
                            ]}
                        />
                    </div>
                    <ButtonContact onClick={handleContact}><InfoOutlinedIcon />Biz bilan bog’lanish</ButtonContact>
                </SectionNavbars>

            </SectionNavbar>

            <CategorySection>
                <div className="selectCategory" style={{position:'relative'}}>
<MenuIcon sx={{position: 'absolute', zIndex: '999', top: '50%', transform: 'translateY(-50%)', paddingLeft:'7px',  }}/>
                <Select
                    defaultValue="Kategoriyalar"
                    style={{ width: "100%" }}
                    onChange={handleChange}
                    options={[
                        { value: 'Kategoriyalar', label: 'Kategoriyalar' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                    ]}
                />
                </div>
                {
                    ButtonCategory.map((item) => {
                        return (
                            <ToggleButtonGroup
                            value={alignment}
                            exclusive
                            key={item.id}
                            onChange={handleAlignment}
                            aria-label="text alignment"
                          >
                            <ToggleButton  value={item.id} aria-label="left aligned">
                              {item.name}
                            </ToggleButton>
                          </ToggleButtonGroup>
                        )
                    })
                }
            </CategorySection>
        </Container>
    );
};

export default Navbar;
