import Image from "next/image";
import { blurData } from "@/constants/blurdata";
import { Suspense } from "react";
import { Banner } from "@/components";
import { Loading } from "@/components/Banner";

export default function App() {
  const internetImage = 'https://i.ytimg.com/vi/EwKXa657tVY/maxresdefault.jpg'

  return (
    <main className="flex flex-col items-center justify-between">

      <Image
        src={internetImage}
        alt="Logo"
        className="image"
        width={1020}
        height={574.22}
        blurDataURL={blurData}
        placeholder="blur"

      />
      <hr />
      <Suspense fallback={ <Loading /> }>
        
        <Banner data= { {index: 1} }></Banner>
      </Suspense> 
    </main>
  )
}
