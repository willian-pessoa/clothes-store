import React, { useState } from 'react'

//components
import MenuItem from '../menu-item/menu-item.component'

//data
import { sectionsData } from './directory.data'

//style
import "./directory.styles.scss"

export default function Directory() {
    const [sections] = useState(sectionsData)

  return (
    <div className='directory-menu'>
      {
          sections.map(({id, imageUrl, title, linkUrl, size}) => {
              return(
                  <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
              )
          })
      }
    </div>
  )
}
