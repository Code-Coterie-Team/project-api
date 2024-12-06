import {getAllProducts} from "./api";


function App() {


const {data,isLoading,isError} = getAllProducts()




if(isLoading){
  return (
      <div className="">Loading</div>
  )
}


if(isError){
  return (
      <div className="">Error</div>
  )
}




  return (
      <ul>
        {data?.map((product) => (
            <li key={product.id}>
            <div>
              <span>{product.name}</span>
              <img src={product.avatar} alt={product.name} style={{ width: '100%' }} />
            </div>
          </li>
      ))}
    </ul>
  )
}

export default App
