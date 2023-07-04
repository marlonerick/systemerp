import { Link } from 'react-router-dom'
import LogoHome from '../../assets/img/logoHome.png'
import { Copyright } from 'lucide-react'

export default function Login() {
  return (
    <>
      <div>
        <div className="flex h-[520px] w-96 flex-col items-center justify-evenly rounded-xl bg-zinc-50 p-2 ">
          <img
            src={LogoHome}
            alt=""
            className={`h-20 w-20 cursor-pointer rounded-xl
            duration-500`}
          />
          <h1 className="block text-center text-2xl font-bold uppercase text-[#6096B4]">
            SOFTWARE HOUSE
          </h1>
          <input
            className="border-0 border-b-2 border-[#6096B4] bg-transparent text-center text-[#6096B4] placeholder-[#6096B4] focus:outline-none"
            placeholder="Usuario"
          />
          <input
            type="password"
            className=" border-0 border-b-2 border-[#6096B4] bg-transparent text-center text-[#6096B4] placeholder-[#6096B4] focus:outline-none"
            placeholder="••••••"
          />
          <div className="flex w-full justify-evenly">
            <Link to="/home">
              <button className="w-28 rounded bg-blue-600 px-4 py-2 font-bold uppercase text-white hover:bg-blue-800">
                login
              </button>
            </Link>
            <button className="w-28 rounded bg-red-600 px-4 py-2 font-bold uppercase text-white hover:bg-red-800">
              Limpar
            </button>
          </div>
        </div>
        <div className="my-2 flex w-full items-center justify-center text-[#BDCDD6]">
          <p>copyright 2023.</p>
          <Copyright color="#FFF" />
          <p>Todos direitos reservados</p>
        </div>
      </div>
    </>
  )
}
