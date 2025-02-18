
const MainPage = () => {
  return (
    <div className="max-w-[900px] mx-auto py-10">
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-10 basis-4/5 text-white ">POSTS</div>
        <div className="basis-1/5">
          <div className="text-xs text-white uppercase">Popular</div>
          POPULAR POST
        </div>
      </div>
    </div>
  )
}

export default MainPage