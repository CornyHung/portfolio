import React, { FC } from 'react'
interface Props {
    title: string
    link: string | null
}
export const BreadCrumb: FC<Props> = (data) => {
  return (
    <div>{data.title}</div>
  )
}