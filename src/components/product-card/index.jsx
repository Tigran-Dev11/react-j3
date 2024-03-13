


const ProductCard = ({item})=>{
     

    return (
        <div className={css.product} key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.title}</h3>
          <div className={css.productAdd}>
            <p>{item.price}$</p>
            <span
              onClick={() => addCount(item.id)}
              className="material-symbols-outlined"
            >
              add
            </span>
            <p>{count[item.id] || 0}</p>
            <span
              onClick={() => removeCount(item.id)}
              className="material-symbols-outlined"
            >
              remove
            </span>
            <Button
              title={"Add to card"}
              onClick={() => addToCart(item)}
              variant="secondary"
            />
          </div>
        </div>
    )
}

export default ProductCard