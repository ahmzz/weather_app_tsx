const App = () => {
  return (
    <main className="flex justify-center items-center bg-[#001427] h-[100vh] w-full ">
      <section
        className="bg-[#708D81]  bg-opacity-40 backdrop-blur-lg drop-shadow-md rounded w-full md:max-w-[500px]
        p-4 flex flex-col text-center items-center justify-center md:px-18 lg:px24 h-full lg:h-[500px] text-white"
      >
        <h1 className=" text-4xl font-thin">Weather <span className=" font-black  text-[#ffb703] ">Forecast </span></h1>
        <p className=" text-sm mt-3 italic">Want to know what is the weather like at your next travel destination?</p>

<div className="flex mt-10 md:mt-4">
        <input type="text" value={''} className="px-2 py-1 rounded-l-md border bg-[#fff2b2] border-white"/>
        <button className=" text-sm rounded-r-md border bg-[#001427] border-white hover:border-[#ffb703] hover:text-[#ffb703] text-zinc-100 px-2 py cursor-pointer">
          search
        </button>
        </div>

      </section>
    </main>
  )
}

export default App
