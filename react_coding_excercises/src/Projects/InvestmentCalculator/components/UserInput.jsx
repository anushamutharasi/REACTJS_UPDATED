import React from 'react'

const UserInput = () => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required></input>
        </p>
        <p>
          <lable>Annual Investment</lable>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required></input>
        </p>
        <p>
          <lable>Duration</lable>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}

export default UserInput