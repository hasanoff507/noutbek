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
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li>Ishlab chiqaruvchi</li>
                                <li>Noutbuk brendi</li>
                                <li>Model</li>
                                <li>Turi</li>
                            </ul>

                            <ul key={item.additionId} style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li>{item.addition.manufacturer}</li>
                                <li>{item.addition.compBrand}</li>
                                <li>{item.addition.compModel}</li>
                                <li>{item.addition.intended}</li>
                            </ul>
                        </div>
                        <ul style={{ display: 'flex', alignItems: 'center' }}>
                            <li style={{ width: '90px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px', }}>Displey</li>
                            <p style={{ width: '1032px', height: '2px', background: '#D9D9D9' }}></p>
                        </ul>
                        <div style={{
                            display: 'flex',
                            gap: '150px',
                            alignItems: 'center'
                        }}>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                                <li>Ekran diagonali</li>
                                <li>Ekran O‘lchami</li>
                            </ul>
                            <ul key={item.additionId} style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                            <li>{item.addition.protBrand}</li>
                            <li>{item.addition.protModel}</li>
                           </ul>
                        </div>
                        <ul style={{ display: 'flex', alignItems: 'center' }}>
                            <li style={{ width: '125px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px', }}>Protsessor</li>
                            <p style={{ width: '1032px', height: '2px', background: '#D9D9D9' }}></p>
                        </ul>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                            <li>Brend</li>
                            <li>Model</li>
                            <li>Minimal chastota</li>
                            <li>Maksimal chastota</li>
                            <li>Yadrlar soni</li>
                            <li>Potoklar soni</li>
                            <li>Integratsiyalashgan grafika</li>
                        </ul>

                        <ul style={{ display: 'flex', alignItems: 'center' }}>
                            <li style={{ width: '300px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px', }}>Operativ Xotira (RAM)</li>
                            <p style={{ width: '1032px', height: '2px', background: '#D9D9D9' }}></p>
                        </ul>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                            <li> RAM</li>
                            <li>Avlod</li>
                        </ul>
                        <ul style={{ display: 'flex', alignItems: 'center' }}>
                            <li style={{ width: '80px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px', }}>Xotira</li>
                            <p style={{ width: '1060px', height: '2px', background: '#D9D9D9' }}></p>
                        </ul>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                            <li> Asosiy disk hajmi</li>
                            <li>Asosiy disk turi</li>
                        </ul>
                        <ul style={{ display: 'flex', alignItems: 'center' }}>
                            <li style={{ width: '140px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px' }}>Video karta</li>
                            <p style={{ width: '1060px', height: '2px', background: '#D9D9D9' }}></p>
                        </ul>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                            <li>Brand</li>
                            <li>Model</li>
                            <li>Video karta turi</li>
                            <li>Maksimal chastota</li>
                            <li>Bitlar soni</li>
                            <li>Video karta hajmi</li>
                            <li>Integratsiyalashgan grafika</li>
                        </ul>
                        <ul style={{ display: 'flex', alignItems: 'center' }}>
                            <li style={{ width: '75px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px' }}>Audio</li>
                            <p style={{ width: '1060px', height: '2px', background: '#D9D9D9' }}></p>
                        </ul>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '24px' }}>
                            <li>Audio</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    );
};

export default AdditionalInformation;
