import fundogeral from '../../assets/img/fundogeral2.png'

export function BackgroundScreen() {
  return (
    <>
      <div className="absolute inset-0 -z-10  bg-cover bg-center bg-no-repeat">
        <img
          src={fundogeral}
          alt=""
          className="h-full w-full object-cover lg:w-screen"
        />
      </div>
    </>
  )
}
