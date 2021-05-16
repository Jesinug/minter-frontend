 
import axios from 'axios';

export default class AnnoucementService{
  constructor(){
    this.instance = axios.create({
        //TODO: Fix baseURL path
      baseURL: `${process.env.REACT_APP_API_URL}/todos`,
      withCredentials: true
    })
  }

  create = data => this.instance.post("/", data);
  get = () => this.instance.get("/");
  getOne = id => this.instance.get(`/${id}`);
  deleteOne = id => this.instance.delete(`/${id}`);
  updateOne = (id, data) => this.instance.put(`/${id}`, data);
}