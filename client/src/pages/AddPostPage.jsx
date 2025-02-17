const AddPostPage = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-1/3 mx-auto py-10">
      <label className="text-gray-300 py-2 bg-gray-500 text-xs flex items-center justify-center border-2 border-dotted cursor-pointer">
        Прикрепить изобраение
        <input type="file" className="hidden" />
      </label>
      <div className="flex object-cover py-2">IMAGE</div>
      <label className="text-xs text-white opacity-70">
        Заголовок поста
        <input
          type="text"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
          placeholder="Заголовок"
        />
      </label>
      <label className="text-xs text-white opacity-70">
        Описание поста
        <textarea
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700 resize-none h-20"
          placeholder="текст"
        />
      </label>
      <div className="flex gap-8 items-center justify-center mt-4">
        <button className="flex items-center justify-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4 cursor-pointer">Добавить пост</button>
        <button className="flex items-center justify-center bg-red-500 text-xs text-white rounded-sm py-2 px-4 cursor-pointer">Удалить пост</button>
      </div>
    </form>
  );
};

export default AddPostPage;
