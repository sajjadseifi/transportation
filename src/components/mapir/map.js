import Mapir from "mapir-react-component"

export const apiKey = process.env.MAPIR_API_KEY

export const Map = Mapir.setToken({
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