import React from 'react'

import Card from './Card'

export default props => {
  const { min, max } = props

  return (
    <Card title='Medias dos numeros' green>
      <div>
        <span>
          Resultado: <strong>{ (max + min) / 2 }</strong>
        </span>
      </div>
    </Card>
  )
}