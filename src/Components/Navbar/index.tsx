import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import noutbek from '../../assets/img/noutbek.png'
import { Button, Input, Select } from "antd";
import LanguageIcon from '@mui/icons-material/Language';
import { SectionNavbar, Logo, ButtonContact, CategorySection, SectionNavbars, Container } from "./styled";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { AllCardType, DataType, getAllCategory, getFilterCategory } from "../../Api/Crud";


interface Props {
    setData: Dispatch<SetStateAction<AllCardType[]>>
    setDefaultData:Dispatch<SetStateAction<AllCardType[]>>
    dataHome: AllCardType[]
    defaultData:AllCardType[]
};

const Navbar: React.FC<Props> = ({ setData, dataHome,defaultData,setDefaultData }: Props) => {




    const navigate = useNavigate()
    const [alignment, setAlignment] = React.useState<string | null>('');

    const [filteredData, setFilteredData] = useState<DataType[]>([]);
    const [simpledata, setSimpledata] = useState<DataType[]>([])
    const [filterOption, setFilterOption] = useState<DataType[]>([])






    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllCategory();
            setSimpledata(response);
            const filtered = response.filter((item: { categoryName: string; }) => item.categoryName !== "Dizaynerlar" && item.categoryName !== "O’yin" && item.categoryName !== "Dasturlash");
            setFilterOption(filtered);

        };
        fetchData();
    }, []);


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
        setFilteredData(filtered);
    }, [simpledata]);


    function handleContact() {
        navigate('/contactUs')
    }
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const handleChangeCategory = async (value: any,) => {
        console.log(value)
        const selectCategorys = await getFilterCategory(value);
        setData(selectCategorys);

    };

    const inputChange = (e: any) => {
        e.preventDefault()
        const inputValue = e.target.value
        const filterValue = dataHome.filter((item) => item.productName.toLowerCase().includes(inputValue.toLowerCase()));
        console.log(filterValue, 'sadghjg');
        setData(filterValue)
        // console.log(inputValue);
    }

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null,) => {
        setAlignment(newAlignment);
      
    };

    const handleClick = async (e: any) => {
        const id = e.target.value;
        const response = await getFilterCategory(id);
        // setData(response);
        if (response) {
            setData(response)
        } else if(response)  {
            setDefaultData(response)
        }
        // if(response){
        //     setData(response)
        // }else if(response){
        //     setData(defaultData)
        //     console.log(response,'jythfhhgfhgf');
        // }
        // setFilterCategory(response);
        
    };
    
    console.log(dataHome, 'sasa');

    return (
        <Container>
            <SectionNavbar >
                <Link to="/">
                    <Logo src={noutbek} alt="react" />
                </Link>
                <SectionNavbars >
                    <Input.Group compact>
                        <Input onChange={inputChange}
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
                            onChange={handleChangeCategory}
                        // value={selectValue}
                        >
                                        {/* <Select.Option >Barchasi</Select.Option> */}
                            {
                                filterOption.map((item) => {
                                    return (
                                        <Select.Option value={item.categoryID} key={item.categoryID}>{item.categoryName}</Select.Option>
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
                                    <ToggleButton onClick={handleClick} value={item.categoryID}  >
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
