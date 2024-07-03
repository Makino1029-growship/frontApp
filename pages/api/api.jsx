import axios from "axios";

const ENDPOINT_URL = "http://localhost:8080/api";

const todoApi = {
    async getAll() {
      const result = await axios.get(ENDPOINT_URL);
      return result.data;
    },
    // async post(todo) {
    //   const result = await axios.post(ENDPOINT_URL, todo);
    //   return result.data;
    // },
    // async delete(todo) {
    //   const result = await axios.delete(ENDPOINT_URL + "/" + todo.id);
    //   return result.data;
    // },
    async patch(todo) {
      const { id, ...data } = todo; // idを除外した残りのデータを取得
      const result = await axios.patch(ENDPOINT_URL + "/" + "1"); // idをURLに含めてPATCHリクエストを送信
      return result.data;
    },
  };

// todoApi.patch({
//   name: "kosu",
//   address: "aaaabbb",
//   tel: 2223332,
//   degree: "ssddss",
// });

export default todoApi;
