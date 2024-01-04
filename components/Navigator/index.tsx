import React from 'react'
import { IPropsNavigator } from './interfaces'
import Link from 'next/link'

const Navigator = ( props: IPropsNavigator ) => {
  return (
    <div style={{ display: "flex", gap: "15px", flexDirection: "row"  }}>
      {
          props.paths.map((patITem) => 
          <Link className="bg-fuchsia-800 text-white hover:bg-sky-300" key={patITem.path} href={patITem.path}>
              {patITem.name}
          </Link>
          )
      }
    </div>
  )
}

export default Navigator