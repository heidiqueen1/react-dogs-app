import useSWR from 'swr';
import Card from './Card';


const fetcher = (...args) => fetch(...args).then(res => res.json());
const URL = "https://api.thedogapi.com/v1/images/search?limit=2";




export default function Dogs() {
  const { data, error } = useSWR(URL, fetcher)


  if (error) return <div>falló al cargar</div>
  if (!data) return <div>cargando...</div>
 console.table(data);
 const{breeds, url} = data[0]
 
 
 if (breeds.length > 0 ) {
  const{ name, life_span, tempera} = breeds[0]
  return <div>
  <Card  urlImagen={url} 
  breedsDog={name} 
  dogTempera={tempera} 
  timeLife={life_span} 
  />
 
  </div>   
}else {
  return <div>
  <Card urlImagen={url} />
  
  </div>
}}
