import React from "react";
const login = () => {
  return (
    <div class="container">
      <div class="form">
        <table>
          <tr>
            <td>Username</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button>Save</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default login;
