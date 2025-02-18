import PopularPosts from "../components/PopularPosts.jsx"
import PostItem from "../components/PostItem.jsx"

const MainPage = () => {
  return (
    <div className="max-w-[900px] mx-auto py-10">
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-10 basis-4/5 text-white ">
          <PostItem />
        </div>
        <div className="basis-1/5">
          <div className="text-xs text-white uppercase">Popular</div>
          <PopularPosts />
        </div>
      </div>
    </div>
  )
}

export default MainPage