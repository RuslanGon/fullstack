// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createPost } from "../../../server/controllers/posts.js";

// const AddPostPage = () => {

// const [title, setTitle] = useState('')
// const [text, setText] = useState('')
// const [image, setImage] = useState('')
// const dispatch = useDispatch();

// const submitHandle = () => {
//   try {
//     const data = new formDate()
//     data.append('title', title)
//     data.append('text', text)
//     data.append('image', image)
//     dispatch(createPost)
//   } catch (error) {
//     console.log(error);
//   }
// }


//   return (
//     <form onSubmit={(e) => e.preventDefault()} className="w-1/3 mx-auto py-10">
//       <label className="text-gray-300 py-2 bg-gray-500 text-xs flex items-center justify-center border-2 border-dotted cursor-pointer">
//         Прикрепить изобраение
//         <input type="file" className="hidden" onChange={e => setImage(e.target.files[0])} />
//       </label>
//       <div className="flex object-cover py-2">IMAGE</div>
//       <label className="text-xs text-white opacity-70">
//         Заголовок поста
//         <input
//           type="text"
//           value={title}
//           onChange={e => setTitle(e.target.value)}
//           className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
//           placeholder="Заголовок"
//         />
//       </label>
//       <label className="text-xs text-white opacity-70">
//         Описание поста
//         <textarea
//         onChange={e => setText(e.target.value)}
//           className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700 resize-none h-20"
//           placeholder="текст"
//         />
//       </label>
//       <div className="flex gap-8 items-center justify-center mt-4">
//         <button className="flex items-center justify-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4 cursor-pointer">Добавить пост</button>
//         <button className="flex items-center justify-center bg-red-500 text-xs text-white rounded-sm py-2 px-4 cursor-pointer">Удалить пост</button>
//       </div>
//     </form>
//   );
// };

// export default AddPostPage;


const AddPostPage = () => {
  return (
    <div>AddPostPage</div>
  )
}

export default AddPostPage
