import React from "react";
import { AllCardType } from "../../../../Api/Crud";


type Props = {
    simpledata: AllCardType[]
};

const AdditionalInformation: React.FC<Props> = ({ simpledata }: Props) => {


    return (
        <div>
            {simpledata.map((item) => {
                return (
                    <div key={item.productID}>
                        <ul style={{ display: 'flex', alignItems: 'center' }}>
                            <li style={{ width: '300px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px', }}>Model haqida ma'lumot</li>
                            <li style={{ width: '1000px', listStyle: 'none', height: '2px', background: '#D9D9D9' }}></li>
                        </ul>
                        <div style={{
                            display: 'flex',
                            gap: '150px',
                            alignItems: 'center'
                        }}>
                            <ul style={{ display: 'flex', width: '270px', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li>Ishlab chiqaruvchi</li>
                                <li>Noutbuk brendi</li>
                                <li>Model</li>
                                <li>Turi</li>
                            </ul>

                            <ul key={item.additionId} style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li style={{ listStyle: 'none' }}>{item.addition.manufacturer}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.compBrand}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.compModel}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.intended}</li>
                            </ul>
                        </div>
                        <ul style={{ display: 'flex', alignItems: 'center' }}>
                            <li style={{ width: '90px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px', }}>Displey</li>
                            <li style={{ width: '1032px', height: '2px', background: '#D9D9D9', listStyle: 'none' }}></li>
                        </ul>
                        <div style={{
                            display: 'flex',
                            gap: '150px',
                            alignItems: 'center'
                        }}>
                            <ul style={{ display: 'flex', width: '270px', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li >Ekran diagonali</li>
                                <li >Ekran O‘lchami</li>
                            </ul>
                            <ul key={item.additionId} style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li style={{ listStyle: 'none' }}>{item.addition.protBrand}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.protModel}</li>
                            </ul>
                        </div>

                        <ul style={{ display: 'flex', alignItems: 'center' }}>
                            <li style={{ width: '125px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px', }}>Protsessor</li>
                            <li style={{ width: '1032px', height: '2px', background: '#D9D9D9', listStyle: 'none' }}></li>
                        </ul>
                        <div style={{
                            display: 'flex',
                            gap: '150px',
                            alignItems: 'center'
                        }}>
                            <ul style={{ display: 'flex', width: '270px', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li>Brend</li>
                                <li>Model</li>
                                <li>Minimal chastota</li>
                                <li>Maksimal chastota</li>
                                <li>Yadrlar soni</li>
                                <li>Potoklar soni</li>
                                <li>Kesh</li>
                                <li>Integratsiyalashgan grafika</li>
                                <li>PassMark baholashi</li>
                            </ul>
                            <ul key={item.additionId} style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li style={{ listStyle: 'none' }}>{item.addition.protBrand}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.protModel}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.minFrequency}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.maxFrequency}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.numberCores}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.numberOfThreads}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.cache}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.grapihicIntegrated}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.passmarkScore}</li>
                            </ul>
                        </div>
                        <ul style={{ display: 'flex', alignItems: 'center' }}>
                            <li style={{ width: '300px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px', }}>Operativ Xotira (RAM)</li>
                            <li style={{ width: '1032px', height: '2px', background: '#D9D9D9', listStyle: 'none' }}></li>
                        </ul>
                        <div style={{
                            display: 'flex',
                            gap: '150px',
                            alignItems: 'center'
                        }}>
                            <ul style={{ display: 'flex', flexDirection: 'column', width: '270px', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li> RAM</li>
                                <li>Avlod</li>
                            </ul>
                            <ul key={item.additionId} style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li style={{ listStyle: 'none' }}>{item.addition.operativRam}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.generationRam}</li>
                            </ul>
                        </div>
                        <ul style={{ display: 'flex', alignItems: 'center' }}>
                            <li style={{ width: '80px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px', }}>Xotira</li>
                            <li style={{ width: '1060px', height: '2px', background: '#D9D9D9', listStyle: 'none' }}></li>
                        </ul>
                        <div style={{
                            display: 'flex',
                            gap: '150px',
                            alignItems: 'center'
                        }}>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', width: '270px', fontWeight: '500', fontSize: '24px' }}>
                                <li> Asosiy disk hajmi</li>
                                <li>Asosiy disk turi</li>
                            </ul>
                            <ul key={item.additionId} style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li style={{ listStyle: 'none' }}>{item.addition.store}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.storeType}</li>
                            </ul>
                        </div>
                        <ul style={{ display: 'flex', alignItems: 'center' }}>
                            <li style={{ width: '140px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px' }}>Video karta</li>
                            <li style={{ width: '1060px', height: '2px', background: '#D9D9D9', listStyle: 'none' }}></li>
                        </ul>
                        <div style={{
                            display: 'flex',
                            gap: '150px',
                            alignItems: 'center'
                        }}>
                            <ul style={{ display: 'flex', flexDirection: 'column', width: '270px', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li>Brand</li>
                                <li>Model</li>
                                <li>Video karta turi</li>
                                <li>Bitlar soni</li>
                                <li>Video karta hajmi</li>
                                <li>Integratsiyalashgan grafika</li>
                            </ul>
                            <ul key={item.additionId} style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li style={{ listStyle: 'none' }}>{item.addition.graphicBrand}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.graphicModel}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.graphicType}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.bitsCount}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.graphicCPUSize}</li>
                                <li style={{ listStyle: 'none' }}>{item.addition.integratedGraphics}</li>
                            </ul>
                        </div>
                        <ul style={{ display: 'flex', alignItems: 'center' }}>
                            <li style={{ width: '75px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px' }}>Audio</li>
                            <li style={{ width: '1060px', height: '2px', background: '#D9D9D9', listStyle: 'none' }}></li>
                        </ul>
                        <div style={{
                            display: 'flex',
                            gap: '150px',
                            alignItems: 'center'
                        }}>
                            <ul style={{ display: 'flex', width: '270px', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li>Audio</li>
                            </ul>
                            <ul key={item.additionId} style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li style={{ listStyle: 'none' }}>{item.addition.audio}</li>
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default AdditionalInformation;
