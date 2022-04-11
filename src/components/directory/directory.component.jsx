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
          sections.map(({id, ...otherSectionProps }) => {
              return(
                  <MenuItem key={id} {...otherSectionProps} />
              )
          })
      }
    </div>
  )
}
