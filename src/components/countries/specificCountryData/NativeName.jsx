import React, { useEffect, useState } from 'react'

export default function NativeName({nativeName}) {
   
   
  return (
    <p><span className='bold'>Native Name :</span> {nativeName[0].official}</p>
  )
}
