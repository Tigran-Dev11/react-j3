import { Loader } from '../../common/loader'
import { ProductCard } from '../../component/product-card' 
import { API } from '../../configt/api' 
import { useFetch } from '../../hooks/use-fetch'
import css  from './shop.module.scss'

const Shop  = ()=>{

    const [data, loading] =useFetch({url:`${API.product}`})

    
    if(loading){
        return <Loader/>
    }

    return (
        <div className={css.container}>
            {data?.map((item)=>(
                <ProductCard item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Shop