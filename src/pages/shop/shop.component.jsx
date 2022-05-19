import React, { useState } from 'react'
import SHOP_DATA from "./shop.data";

import PreviewCollection from '../../components/preview-collection/preview-collection.component';

export default function ShopPage() {
    const [collections] = useState(SHOP_DATA);

  return (
    <div className='shopPage'>
        {
            collections.map(({id, ...othersProps})=>{
                return(
                    <PreviewCollection key={id} {...othersProps}/>
                )
            })
        }
      
    </div>
  )
}
