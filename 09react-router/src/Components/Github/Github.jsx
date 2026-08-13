import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function Github() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch("https://api.github.com/users/me-ishan7")
  //   .then((res) => res.json())
  //   .then((data) => setData(data))
  // }, [])
  const data = useLoaderData()
  
  return (
    <div className="text-center text-2xl mt-10 bg-gray-100 p-4 rounded-lg shadow-md text-white">
      <h1 className="text-3xl text-black font-bold mb-4">Github User Info : {data.name}</h1>

      <img src={data.avatar_url} alt="User Avatar" className="w-32 h-32 rounded-full mx-auto mb-4" />
    </div>
  )

}

export const GithubLoaderInfo = async () => {
  const res = await fetch("https://api.github.com/users/me-ishan7")
  return res.json()
}
