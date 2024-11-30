import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold underline text-center mb-6">
        Get Api 
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300">PostID</th>
              <th className="px-4 py-2 border border-gray-300">ID</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Email</th>
              <th className="px-4 py-2 border border-gray-300">Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300">{item.postId}</td>
                <td className="px-4 py-2 border border-gray-300">{item.id}</td>
                <td className="px-4 py-2 border border-gray-300">{item.name}</td>
                <td className="px-4 py-2 border border-gray-300">{item.email}</td>
                <td className="px-4 py-2 border border-gray-300">{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
