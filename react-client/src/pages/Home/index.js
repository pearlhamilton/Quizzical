import React from "react";
import { fetchCategory } from "../../actions";
import { Form } from "../../components";

function Home() {
  return (
    <div>
      <button onClick={fetchCategory}>get catgories</button>
      <Form />
    </div>
  );
}

export default Home;
