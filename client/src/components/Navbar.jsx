
const Navbar = () => {
  return (
    <div className="flex py-4 justify-between items-center">
        <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-sx text--white rounded-sm">E</span>
        <ul className="flex gap-8">
            <li><a href="" className="text-sx text-gray-400 hover:text-white">Main</a></li>
            <li><a href="" className="text-sx text-gray-400 hover:text-white"> My posts</a></li>
            <li><a href="" className="text-sx text-gray-400 hover:text-white">Add post</a></li>
        </ul>
        <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4">
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar