import { Slide1, Slide2, Slide3, Slide4 } from "./src/screens";
import { Dispatch, SetStateAction, useState } from 'react'


export interface IPagina{
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page,setPage] = useState(1)

  if(page==1){
    return(
      <Slide1 setPageI={setPage}/>
    );
  }else if (page==2){
    return(
      <Slide2 setPageI={setPage}/>
    );
  }else if (page==3){
    return(
      <Slide3 setPageI={setPage}/>
    );
  }else if (page==4){
    return(
      <Slide4 setPageI={setPage}/>
    );
  }
  
}


