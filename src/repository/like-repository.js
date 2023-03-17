import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }
}

export default LikeRepository;
