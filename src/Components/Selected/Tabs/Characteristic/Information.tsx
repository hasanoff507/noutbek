import React from "react";
import { AllCardType } from "../../../../Api/Crud";


type Props = {
    simpledata:AllCardType[]
};

const Information : React.FC<Props> = ({simpledata }: Props) => {


    return (
        <div>
             {simpledata.map((item) => {
          return (
            <div className='characteristic' key={item.productID}>
              <ul className='characteristic-list'>
                <li>Protsessor</li>
                <li>Operativ xotira</li>
                <li>Xotira</li>
                <li>Video karta</li>
                <li>Ekran</li>
                <li>Qo'shimcha</li>
              </ul>
              <ul className='characteristic-list' style={{listStyle:'none'}} key={item.characteristicId}>
                <li>{item.characteristic.protsessor}</li>
                <li>{item.characteristic.operativMemory}</li>
                <li>{item.characteristic.memory}</li>
                <li>{item.characteristic.vedioCard}</li>
                <li>{item.characteristic.display}</li>
                <li>{item.characteristic.addition}</li>
              </ul>
            </div>
          )
        })}
        </div>
    );
};

export default Information ;
