const CommentItem = ({ comment }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center shrink-0 rounded-full w-10 h-10 bg-blue-300 text-sm">AVATAR</div>
      <div className="flex text bg-gray-300 text-{10px}">{comment.comment}</div>
    </div>
  );
};

export default CommentItem;
