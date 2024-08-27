import { useState } from "react";
import { getData } from "./mock_data";
import { mock_data } from "./mock_data";
let per_page = 10;

export function Pagination() {
  const [data, setData] = useState(getData(1));

  const range = [];
  const num = Math.ceil(mock_data.length / per_page);
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }

  function handleClick(num: number) {
    setData(getData(num));
  }

  return (
    <>
      <table>
        <tr>
          <th>First-name</th>
          <th>Last-name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
        {data?.map((ele: any) => {
          return (
            <tr key={ele.id}>
              <td>{ele.first_name}</td>
              <td>{ele.last_name}</td>
              <td>{ele.email}</td>
              <td>{ele.gender}</td>
            </tr>
          );
        })}
      </table>
      {range?.map((ele: any) => {
        return (
          <button
            onClick={() => handleClick(ele)}
            className="bg-black text-white pr-3 pl-3 m-2 rounded-md"
          >
            {ele}
          </button>
        );
      })}
    </>
  );
}
