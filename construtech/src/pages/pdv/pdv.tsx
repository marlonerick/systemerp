import { BackgroundScreen } from '../../components/BackgroundScreen/fundogeral'
import { Sidebar } from '../../components/sidebar/sidebar'
import { PlusCircle, Trash2, UserCircle2 } from 'lucide-react'

export function PDV() {
  return (
    <>
      <div className="flex h-screen w-screen">
        <Sidebar />
        <div className="h-screen flex-1 p-7 pt-10 text-2xl font-semibold ">
          <BackgroundScreen />
          <div className="flex justify-between">
            <h1 className="m-1 text-3xl">Pedido de Vendas(PDV)</h1>
            <div className="flex items-center justify-between gap-2">
              <UserCircle2 color="#FFF" size={32} />
              <p>Marlon Erick</p>
            </div>
          </div>
          <div className="flex w-full items-end justify-end p-2">
            {' '}
            <button className="mx-2 w-24 rounded bg-green-600 px-2 py-1 text-sm font-bold uppercase text-white hover:bg-green-800">
              Finalizar
            </button>
            <button className="mx-2 w-24 rounded bg-blue-600 px-2 py-1 text-sm font-bold uppercase text-white hover:bg-blue-800">
              CADASTRAR
            </button>
            <button className="mx-2 w-24 rounded bg-yellow-600 px-2 py-1 text-sm font-bold uppercase text-white hover:bg-yellow-800">
              ALTERAR
            </button>
            <button className="mx-2 w-24 rounded bg-red-600 px-2 py-1 text-sm font-bold uppercase text-white hover:bg-red-800">
              EXCLUIR
            </button>
          </div>
          <div className="h-[40rem] overflow-y-scroll scrollbar-none">
            <div className="flex items-center justify-between">
              <div className="m-1 h-48 w-full rounded-2xl border-2 border-zinc-500 bg-white"></div>
            </div>
            <div className="flex items-center justify-center">
              <div className="m-1 h-96 w-full overflow-scroll rounded-2xl border-2 border-zinc-500 bg-white scrollbar-none ">
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm font-light">
                          <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                              <th scope="col" className="px-6 py-4">
                                Id
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Produto
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Marca
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Unidade
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Quantidade
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Preço de custo
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Preço Total
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Excluir/aumentar
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-4 font-medium">
                                1
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                Desktop
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                Dell
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">2</td>
                              <td className="whitespace-nowrap px-6 py-4">1</td>
                              <td className="whitespace-nowrap px-6 py-4">
                                R$1.000
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                R$1.500
                              </td>
                              <td className="flex items-center justify-center whitespace-nowrap px-6 py-4">
                                <Trash2 size={20} className="mx-1" />
                                /
                                <PlusCircle size={20} className="mx-1" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="m-1 h-48 w-full rounded-2xl border-2 border-zinc-500 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
