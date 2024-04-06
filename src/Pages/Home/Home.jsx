import Nav from "../../Shared/Nav";

function Home() {
  return (
    <div className="">
      <div
        className="min-h-screen bg-cover"
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      >
        <div className="bg-black min-h-screen bg-opacity-60">
          <Nav />
          <div className="flex items-center justify-center min-h-96  ">
            <div className="">
              <h1 className="text-white font-bebas font-bold text-5xl">
                Cox's bazar
              </h1>
              <p className="text-white">
                Cox's Bazar is a city, fishing port, tourism centre and district
                headquarters in southeastern Bangladesh. It is famous mostly for
                its long natural sandy beach, and it ...
              </p>
            </div>
            <div className=" text-white">slider</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
