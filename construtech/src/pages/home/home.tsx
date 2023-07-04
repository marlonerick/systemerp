import { UserCircle2 } from 'lucide-react'
import { Sidebar } from '../../components/sidebar/sidebar'
import { BackgroundScreen } from '../../components/BackgroundScreen/fundogeral'

export function Home() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="h-screen flex-1 p-7 pt-10 text-2xl font-semibold ">
          <BackgroundScreen />
          <div className="my-3 flex items-center justify-between">
            <h1 className="m-1 text-3xl">HOME</h1>
            <div className="flex items-center justify-center gap-2">
              <UserCircle2 color="#FFF" size={32} />
              <p>Marlon Erick</p>
            </div>
          </div>
          <div className="grid h-4/5 grid-cols-4 grid-rows-3 gap-2">
            <div className="rounded-xl border-2 border-violet-500 bg-[#6096B4]/80">
              <div>
                <h1 className="text-center text-lg uppercase">
                  Clientes Cadastrados
                </h1>
              </div>
            </div>
            <div className="rounded-xl border-2 border-blue-500  bg-[#6096B4]/80">
              <div>
                <h1 className="text-center text-xl uppercase">Estoque</h1>
              </div>
            </div>
            <div className="rounded-xl border-2 border-green-500 bg-[#6096B4]/80">
              <div>
                <h1 className="text-center text-xl uppercase">
                  Vendas Realizadas
                </h1>
              </div>
            </div>
            <div className="row-span-3 rounded-xl border-2 border-yellow-500 bg-[#6096B4]/80 ">
              <div>
                <h1 className="text-center text-xl uppercase">Vendedores</h1>
              </div>
            </div>
            <div className="col-span-3 rounded-xl border-2 border-fuchsia-500 bg-[#6096B4]/80 px-2">
              <div>
                <h1 className="text-center text-xl uppercase">Saldo</h1>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-4 gap-2">
              <div className="col-span-2 rounded-xl border-2 border-rose-400 bg-[#6096B4]/80">
                <div>
                  <h1 className="text-center text-xl uppercase">
                    Contas a Pagar
                  </h1>
                </div>
              </div>
              <div className="col-span-2 rounded-xl border-2 border-emerald-500 bg-[#6096B4]/80">
                <div>
                  <h1 className="text-center text-xl uppercase">
                    Contas a receber
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
