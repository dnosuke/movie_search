import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as C from './styles'

export default function CardSkeleton({ cards }) {

  return (
    Array(cards).fill(0).map(item =>(
      <C.Container>
        <Skeleton height={360} count={1}/>
        <Skeleton className="text" count={2}/>
      </C.Container>
    ))
      
  )
}