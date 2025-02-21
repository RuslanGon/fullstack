import axios from '../utils/axios.js'
import { format } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { AiFillEye, AiOutlineMessage, AiTwotoneEdit, AiFillDelete  } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { removePost } from '../redux/features/post/postSlice.js';
import { toast } from 'react-toastify';
import { createComment, getPostComments } from '../redux/features/comment/commentSlice.js';
import CommentItem from '../components/CommentItem.jsx';

const PostPage = () => {
const [post, setPost] = useState(null)
const [comment, setComment] = useState('')

const params = useParams()
const dispatch = useDispatch()
const navigate = useNavigate();

const user  = useSelector(state => state.auth.user)
const comments = useSelector(state => state.comment.comments)

const fetchComments = useCallback(async () => {
  try {
       dispatch(getPostComments(params.id))
  } catch (error) {
      console.log(error)
  }
}, [params.id, dispatch])

useEffect(() => {
fetchComments()
}, [fetchComments])

const fetchPost = useCallback(async () => {
  try {
    const { data } = await axios.get(`/posts/${params.id}`);
    if (data.message) {
      console.error("Ошибка на сервере:", data.message);
      setPost(null);
    } else {
      setPost(data);
    }
  } catch (error) {
    console.error("Ошибка запроса:", error);
    setPost(null);
  }
}, [params.id]);

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  if (!post) {
    return (
      <div className="text-xl text-center text-white py-10">Загрузка ...</div>
    );
  }

  const removePostHandler = async () => {
    try {
      await dispatch(removePost(params.id)).unwrap();
      toast.success('Пост был удалён.');
      setPost(null); 
      navigate('/posts')
    } catch (error) {
      console.error('Ошибка при удалении:', error);
      toast.error('Ошибка при удалении поста.');
    }
  };

  const handleSubmit = () => {
    try {
      const postId = params.id;
      dispatch(createComment({ postId, comment }));
      setComment('')
    } catch (error) {
      console.log(error);
    }
  };

 

  return (
    <div className="">
      <button className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4">
        <Link to={"/"} className="flex">
          Назад
        </Link>
      </button>
      <div className="flex gap-10 py-8">
        <div className="w-2/3">
          <div className="flex flex-col basis-1/4 flex-grow">
            <div
              className={
                post?.imgUrl ? "flex rounded-sm h-80 " : "flex rounded-sm"
              }
            >
              {post?.imgUrl && (
                <img
                  src={`http://localhost:3002/${post.imgUrl}`}
                  alt="img"
                  className="object-cover w-full"
                />
              )}
            </div>
          </div>
          <div className="flex justify-between items-center pt-2">
            <div className="text-xs text-white opacity-50">
              {post?.username || "Аноним"}
            </div>
            <div className="text-xs text-white opacity-50">
              {post?.createdAt
                ? format(new Date(post.createdAt), "d MMM yyyy")
                : "Неизвестная дата"}
            </div>
          </div>
          <div className="text-xl text-white">
            {post?.title || "Без заголовка"}
          </div>
          <p className="text-xs text-white opacity-60 pt-4">
            {post?.text || "Нет текста"}
          </p>
          <div className="flex items-center gap-3 mt-2 justify-between">
            <div className="flex gap-3 pt-4">
              <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
                <AiFillEye /> <span>{post?.views || 0}</span>
              </button>
              <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
                <AiOutlineMessage /> <span>{post?.comments?.length || 0}</span>
              </button>
            </div>
            {user?._id === post.author && (
              <div className="flex gap-3 pt-4">
                <button className="flex items-center justify-center gap-2 text-white opacity-50">
                  <Link to={`/${params.id}/edit`}>
                    <AiTwotoneEdit />
                  </Link>
                </button>
                <button
                  onClick={removePostHandler}
                  className="flex items-center justify-center gap-2 text-white opacity-50 cursor-pointer"
                >
                  <AiFillDelete />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-1/3 p-8 bg-gray-700 flex flex-col gap-2 rounded-sm">
          <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
            <input
              className="w-full rounded-sm bg-gray-400 border p-2 text-xs outline-none placeholder: text-gray-700"
              type="text"
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder="comment"
            />
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center rounded-sm bg-gray-600 text-xs text-white cursor-pointer py-2 px-4"
              type="submit"
            >
              Отправить
            </button>
          </form>
          {comments?.map(comment => (
            <CommentItem  key={comment._id} comment={comment}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
