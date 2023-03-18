import CrudRepository from "../repository/crud-repository.js";
import Comment from "../models/comments.js";

class CommentRepository {
  constructor() {
    super(Comment);
  }
}

export default CommentRepository;
