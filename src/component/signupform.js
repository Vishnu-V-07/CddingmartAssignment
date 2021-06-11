import React from "react";

const signupform = () => {
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
            <td>phone</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Mailid</td>
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
        </table>
      </div>
    </div>
  );
};

export default signupform;
