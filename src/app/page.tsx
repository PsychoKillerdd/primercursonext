import Image from 'next/image'

export default function Home() {
  return (
    <>


    <div className="bg-slate-950 text-white text-center p-28 ">
    <h1>Hola Mundo!</h1>
    <div className="miclase">hola</div>
    <Image
      src="/pokemongirls.jpg"
      width={200}
      height={500}
      alt="Picture of the author"
    />
    </div>
    </>
  )
}
