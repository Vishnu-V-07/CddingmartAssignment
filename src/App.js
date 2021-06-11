import React from "react";
import "./styles.css";
import form from "./component/form";
const App = () => {
  return (
    <body>
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
            <tr>
              <td></td>
              <td>
                <button>Create</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </body>
  );
};
export default App;
