import { useDispatch, useSelector } from "react-redux";
import PopularPosts from "../components/PopularPosts.jsx"
import PostItem from "../components/PostItem.jsx"
import { useEffect } from "react";
import { getAllPosts } from "../redux/features/post/postSlice.js";


const MainPage = () => {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts)
  const popularPosts = useSelector(state => state.post.popularPosts)
  // const {posts, PopularPosts} = useSelector(state => state.post)

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  if(!posts.length) {
return (
  <div className="text-xl text-center text-white py-10">Постов не существует</div>
)
  }
  return (
    <div className="max-w-[900px] mx-auto py-10">
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-10 basis-4/5 text-white ">
          {posts?.map((post, index) => ( <PostItem key={index} post={post} />))}
         
        </div>
        <div className="basis-1/5">
          <div className="text-xs text-white uppercase">Popular</div>
          {popularPosts?.map((post,index) => <PopularPosts key={index} post={post} /> ) }
          
        </div>
      </div>
    </div>
  )
}

export default MainPage