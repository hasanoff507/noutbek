
type Data={
    productName: string,
    price: number,
    categoryId: number,
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
    characteristic: {
      protsessor: string,
      operativMemory: string,
      memory: string,
      vedioCard: string,
      display: string,
      myProperty: string,
      addition: string
    },
    images: [
      string
    ]
  }


export const getAllData = async (value:Data) => {
  
  
    const data = await fetch('http://localhost:7020/shopping/allproducts',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "GET",
        body: JSON.stringify(value)
      }
    );
    const json = await data.json(); 
  
    return new Promise<any>((resolve, reject) => {
      resolve(json );
    });
  };
  