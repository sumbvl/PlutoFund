function Account() {
  return (
    <>
      <div className="font-montserrat">
        <h1 className="flex justify-center text-white pt-8 font-bold text-[32px] text-balance tracking-widest">
          {" "}
          WELCOME,
          <span className="px-2 bg-clip-text text-transparent bg-linear-to-r from-cyan-100 to-sky-300">
            SUMBAL
          </span>
          !
        </h1>
        <div className="flex items-center justify-center">
        <img src="src/assets/robot4.png" className="w-200 h-200 pt-10" />
        </div>
      </div>
    </>
  );
}

export default Account;
