import React from 'react';
import { hot } from 'react-hot-loader/root';

const css = `
    .center {
      text-align: center;
    }

    .logo {
      width: 480px;
      height: 270px;
      margin: 0 auto;
      float: none;
      display: block;
  }
`;

const App: React.FunctionComponent = () => {
  return (
    <div>
      <style>{css}</style>
      <h2 className="center">Joselu Gallardo manual deploy exercise</h2>
      <h4 className="center">Exercises done for LemonCode's cloud module</h4>
      <img
        className="logo"
        src="https://1.bp.blogspot.com/-4T_wbvIBQiY/XpbdrWICHsI/AAAAAAAACMg/0qZ4FCrhv88U0HRf1I5wdo4o9LZkHyzUQCLcBGAsYHQ/s1600/giphy-3.gif"
        alt="Gif"
      />
    </div>
  );
};

export default hot(App);
