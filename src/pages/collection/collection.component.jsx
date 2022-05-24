import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectCollections } from '../../redux/shop/shop.selectors'

import "./collection.styles.scss"

import CollectionItem from '../../components/collection-item/collection-item.component'

function CollectionPage({collections}) {
  const currentParam = useParams().collectionId
  const {title, items} = collections[currentParam]
  return (
    <div className='collection-page'>
    <h2 className='title'>{title}</h2>
    <div className='items'>
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return({
    collections: selectCollections(state)
  })
}


export default connect(mapStateToProps)(CollectionPage)
