import { Link } from 'react-router-dom'

export function Devolucao() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#93BFCF] text-white">
        Devolução
        <Link to="/home">
          <button className="rounded bg-white px-4 py-2 font-bold uppercase text-black hover:bg-slate-200">
            Home
          </button>
        </Link>
      </div>
    </>
  )
}
