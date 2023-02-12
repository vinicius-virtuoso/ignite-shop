import { useRouter } from 'next/router'

export default function ProductId() {
  const { query } = useRouter()

  return <div>Product: {JSON.stringify(query)}</div>
}
