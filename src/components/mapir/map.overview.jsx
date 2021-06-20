//default
import React from 'react'
import { Mapir } from '.'
import { useMap } from '../../context'
const apiKey =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFiODVhZWRhOTJkMmVhMjgyOGI3YTI4OTdmOTJhYzk1NTA0OTU0Y2Y0MGU0M2FlYWM4NmMwZWVhMDdhZTU0YjYzOWE5NDhjNDE2YzdkODk4In0.eyJhdWQiOiIxNDUyMyIsImp0aSI6ImFiODVhZWRhOTJkMmVhMjgyOGI3YTI4OTdmOTJhYzk1NTA0OTU0Y2Y0MGU0M2FlYWM4NmMwZWVhMDdhZTU0YjYzOWE5NDhjNDE2YzdkODk4IiwiaWF0IjoxNjI0MTQ5NTU5LCJuYmYiOjE2MjQxNDk1NTksImV4cCI6MTYyNjc0MTU1OSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.mDWVwBdVld4WjQ4dL7lT8euNnWChofR8It2zVD63qTJ4T_n7Jo2U2TXCpIWy1UaBOxWmpVJjVqy81ikYb5al1azm4rajxF3-SmBXsjMQmMq29n-uBR6oaToBgAyUEUtX_of2CKyMXtzFj4PmBFpbizXi92p2FY6VzRIj_OoqHyW-ETbvJX_jGwELSn2cnXMoyvgBeVJqpavXSGIk22kGDpoth-qmm9y9_qBEtojXWsJOMJ-VqM46YYCJFk8C7uVggi2U0rDKPqap8XqktCyDL_CTrtJzsxG9-H_NzGUPLN6RuWEkXCcxO8Z1i3LYwNttF1Sdzb3IXy4vnFiM2F186w'
const Map = Mapir.setToken({
  transformRequest: (url) => {
    return {
      url: url,
      headers: {
        'x-api-key': apiKey, //Mapir api key
        'Mapir-SDK': 'reactjs',
      },
    }
  },
})

export const MapOverview = ({ onClick, children }) => {
  const { state } = useMap()
  console.log({ center: state.center })
  return (
    <Mapir onClick={onClick} center={state.center} Map={Map} apiKey={apiKey}>
      {children}
    </Mapir>
  )
}
