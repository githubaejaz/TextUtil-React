import React from 'react'

function LoopData() {
 
    const jsonData = [
        { "id": 1, "name": "Alice", "age": 25 },
        { "id": 2, "name": "Bob", "age": 30 },
        { "id": 3, "name": "Charlie", "age": 35 }
      ];

  return (
    <>
    <div className="container">
    {jsonData.map((item) => (
        <div key={item.id}> {/* Key is compulsary in loop (Map) on first element of loop */}
          <h3>{item.name}</h3>
          <p>Age: {item.age}</p>
        </div>
      ))}
      </div>
    </>
  )
}

export default LoopData