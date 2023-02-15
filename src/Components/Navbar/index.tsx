import React, { useEffect, useState } from "react";
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
import { DataType, getAllCategory } from "../../Api/Crud";
type Props = {};

const Navbar: React.FC<Props> = ({ }: Props) => {
    const navigate = useNavigate()

    const [alignment, setAlignment] = React.useState<string | null>('left');

    const [filteredData, setFilteredData] = useState<DataType[]>([]);
    const [simpledata, setSimpledata] = useState<DataType[]>([])
    const [values, setValues] = useState<any>()



    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllCategory(values);
            const filteredData = response.filter((item: { categoryName: string; }) => item.categoryName !== 'Dizaynerlar' && item.categoryName !== 'O’yin' && item.categoryName !== 'Dasturlash');
            setSimpledata(response);
        };
        fetchData();
    }, [values]);

    useEffect(() => {
        // eslint-disable-next-line array-callback-return
        const filtered = simpledata.filter(category => {
            switch (category.categoryID) {
                case 14:
                    return category
                case 16:
                    return category
                case 17:
                    return category
                default:
                    break;
            }
        })
        console.log(filtered);
        
        
        setFilteredData(filtered);
    }, [simpledata]);


    function handleContact() {
        navigate('/contactUs')
    }
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const handleChangeCategory = (value: any,) => {
        console.log(value)
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
                        <LanguageIcon style={{ position: 'absolute', zIndex: '999', top: '50%', transform: 'translateY(-50%)', paddingLeft: '7px', }} />
                        <Select

                            defaultValue="UZ"
                            style={{ width: "100px" }}
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '30px' }}>
                <CategorySection>

                    <div className="selectCategory" style={{ position: 'relative' }}>
                        <MenuIcon sx={{ position: 'absolute', zIndex: '999', top: '50%', transform: 'translateY(-50%)', paddingLeft: '7px', }} />

                        <Select
                            defaultValue="Kategoriyalar"
                            style={{ width: "100%" }}
                            onChange={handleChangeCategory}>
                            {
                                simpledata.map((item) => {
                                    return (
                                        <Select.Option value={item.categoryName} key={item.categoryID}>{item.categoryName}</Select.Option>
                                )
                                })
                            }
                        </Select>
                    </div>
                </CategorySection>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '30px' }}>
                    {
                        filteredData.map((item) => {
                            return (
                                <ToggleButtonGroup
                                    value={alignment}
                                    exclusive
                                    key={item.categoryID}
                                    onChange={handleAlignment}
                                    aria-label="text alignment"
                                >
                                    <ToggleButton value={item.categoryID} aria-label="left aligned" >
                                        {item.categoryName}
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            )
                        })
                    }
                </div>
            </div>
           
        </Container>
    );
};

export default Navbar;
