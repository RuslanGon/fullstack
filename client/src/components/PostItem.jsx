
const PostItem = () => {
  return (
    <div className="flex flex-col basis-1/4 flex-grow">
        <div className="">IMAGE</div>
        <div className="flex justify-between items-center pt-2">
            <div className="text-xs text-white opacity-50">USERNAME</div>
            <div className="text-xs text-white opacity-50">DATA</div>
        </div>
        <div className="text-xl text-white">POST TITLE</div>
        <p className="text-xs text-white opacity-60 pt-4">POST TEXT</p>
    </div>
  )
}

export default PostItem