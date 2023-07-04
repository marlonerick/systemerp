import Login from './components/login/login'
import FundoHome from './assets/img/fundohome.jpg'

export function App() {
  return (
    <>
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${FundoHome})`,
          }}
        >
          <div className="flex h-full w-full items-center justify-center">
            <Login />
          </div>
        </div>
      </div>
      {/* <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#6096B4]">
        <div className="flex h-[420px] w-4/5 items-center justify-evenly rounded-xl bg-[#93BFCF] p-5">
          <div className="flex items-center justify-center">
            <div>
              <img
                src="src\assets\img\logo.jpg"
                alt=""
                className="h-72 w-72 rounded-tl-full"
              />
            </div>
            <div className="w-64 rounded-br-full bg-[#EEE9DA]">
              <h1 className="text-md h-72 w-60 font-bold uppercase tracking-tight">
                Potencialize sua empresa com nosso sistema de gestão
                empresarial. Ganhe eficiência, controle e crescimento para
                alcançar o sucesso.
              </h1>
            </div>
          </div>
          <div>
            <Login />
          </div>
        </div>
      </div> */}
    </>
  )
}
