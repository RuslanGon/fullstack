const AddPostPage = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-1/3 mx-auto py-10">
      <label className="text-gray-300 py-2 bg-gray-500 text-xs flex items-center justify-center border-2 border-dotted cursor-pointer">
        Прикрепить изобраение
        <input type="file" className="hidden" />
      </label>
      <div className="flex object-cover py-2">IMAGE</div>
      <label className="text-xs text-white opacity-70">Заголовок поста
      <input type="text" className="mt-1 text-black w-full rounded-lg bg-gray-400" />
      </label>
    </form>
  );
};

export default AddPostPage;
