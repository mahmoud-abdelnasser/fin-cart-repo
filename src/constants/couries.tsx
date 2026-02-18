export interface couriorType {
  id: number
  logo: string
  name: string
  price: number
  tax: number
  deliveryTime: string
}
const couriorList: couriorType[] = [
  {
    id: 1,
    logo: "https://via.placeholder.com/300x160",
    name: "cadetblue",
    price: 29.99,
    tax: 20,
    deliveryTime: "2-3 Days",
  },
  {
    id: 2,
    logo: "https://via.placeholder.com/300x160",
    name: "burlywood",
    price: 59.99,
    tax: 10,
    deliveryTime: "1-2 Days",
  },
  {
    id: 3,
    logo: "https://via.placeholder.com/300x160",
    name: "coral",
    price: 99.99,
    tax: 5,
    deliveryTime: "3-5 Days",
  },
]

export default couriorList
