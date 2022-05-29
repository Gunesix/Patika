import axios from "axios";

const getData = (data_id) => {
  return new Promise(async (resolve, reject) => {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + data_id
    );
    const { data: posts } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + data_id
    );
    resolve({ user: user, posts: posts });
    reject("Bir Hata Oluştu.");
  });
};

export default getData;
