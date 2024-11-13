const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017/`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("noona-testDB");
  const students = database.collection("mongodb-students");

  //   [HW] 13. test2점수가 92점인 학생을 삭제
  co
  //   [HW] 14. test1의 점수가 0인 학생들을 삭제
  const deleteUsers = await users.deleteMany({ age: { $gt: 20 } });
  console.log("deleteUsers --> ", deleteUsers);
}

run();
