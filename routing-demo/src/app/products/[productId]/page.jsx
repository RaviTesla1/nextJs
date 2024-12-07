
export default function page({params}) {
    console.warn('params----',params.productId)
  return (
    <div>
      <h2>Product page no . {params.productId}</h2>
    </div>
  )
}

