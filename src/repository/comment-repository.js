import CrudRepository from "../repository/crud-repository.js";
import Comment from "../models/comments.js";

class CommentRepository extends CrudRepository {
  constructor() {
    super(Comment);
  }
}

export default CommentRepository;
