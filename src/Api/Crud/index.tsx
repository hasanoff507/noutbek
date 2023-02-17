import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:7020'
})

export interface AllCardType {
  id: any;
  productID: number;
  productName: string,
  price: number,
  categoryId: number,
  additionId: number;
  addition: {
    manufacturer: string,
    compBrand: string,
    compModel: string,
    intended: string,
    protBrand: string,
    protModel: string,
    minFrequency: string,
    maxFrequency: string,
    numberCores: number,
    numberOfThreads: number,
    cache: string,
    grapihicIntegrated: string,
    passmarkScore: string,
    operativRam: number,
    generationRam: string,
    store: number,
    storeType: string,
    graphicBrand: string,
    graphicModel: string,
    graphicType: string,
    bitsCount: string,
    graphicCPUSize: string,
    integratedGraphics: string,
    audio: string
  },
  characteristicId: number,
  characteristic: {
    protsessor: string,
    operativMemory: string,
    memory: string,
    vedioCard: string,
    display: string,
    myProperty: string,
    addition: string
  },
  images: [{
    imageUrl: string
  }]
}
export interface DataType {
  categoryID: number,
  categoryName: string
}

export const getAllCategory = () => api.get('/shopping/category/list').then(res => res.data)

// export const getAllCategory = async (): Promise<any> => {

//   const data = await fetch('http://localhost:7020/shopping/category/list',
//     {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       method: "GET",
//     });
//     const json = await data.json();
//   return new Promise((resolve, reject) => {
//     resolve(json);
//   });
// };

export const getAllCard = async (): Promise<any> => {

  const data = await fetch('http://localhost:7020/shopping/allproducts',
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "GET",
    });
  const json = await data.json();
  return new Promise((resolve, reject) => {
    resolve(json);
  });
};




export const getSelectCard = (id:number) => api.get(`/shopping/products/${id}`).then(res => { 
  return new Promise((resolve, reject) => {
    resolve(res.data);
    // console.log(res.data);
  });
});

// export const getSelectCard = async (id:number): Promise<any> => {
//   const data = await fetch(`http://localhost:7020/shopping/products/${id}`,
//     {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       method: "GET",
//     });
//     const json = await data.json();
//   return new Promise((resolve, reject) => {
//     resolve(json);
//   });
// };


export const getFilterCategory = async (id: number): Promise<any> => {
  const data = await fetch(`http://localhost:7020/shopping/${id}/allproducts`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "GET",
    });
  const json = await data.json();
  return new Promise((resolve, reject) => {
    resolve(json);
  });
};




