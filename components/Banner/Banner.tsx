// function delay(ms: number) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

import sleep from "sleep-promise";

async function getCharacter(obj:any): Promise<any> {
    const url = `https://rickandmortyapi.com/api/character/${obj.index}`;

    // await delay(3000);

  
    return fetch(url)   
    .then( res => res.json().then(sleep(2000)) )
    .then( data => (data) )
  }
  
  async function Banner(props:any){
      const character = await getCharacter(props.data);
        
      return (
          <div className="font-extrabold">
              Name: {character.name}
          </div>
      )
  }
  
  export default Banner