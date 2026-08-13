import { useParams } from "react-router-dom"
export default function User() {
  const { userId } = useParams()
  return(
    <div className="text-center text-2xl mt-10 bg-gray-100 p-4 rounded-lg shadow-md text-white">
      User: {userId}
    </div>
  )
}