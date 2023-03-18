class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  //CREATE - DATA
  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw error;
    }
  }

  //DESTROY - ID
  async destroy(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw error;
    }
  }

  //UPDATE - ID AND DATA
  async update(id, data) {
    try {
      const response = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return response;
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw error;
    }
  }

  //GET - ID
  async get(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw error;
    }
  }

  //GETALL
  async getAll() {
    try {
      const response = await this.model.find({});
      return response;
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw error;
    }
  }
}

export default CrudRepository;
