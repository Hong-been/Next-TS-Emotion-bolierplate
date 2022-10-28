import { Html, Head, Main, NextScript } from "next/document";

import { RootId } from "src/utils"

const Document = () => {
  return (
    <Html>
      <Head />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <body>
        <Main />
        <NextScript />
        <div id={"modalRoot" as RootId}></div>
      </body>
    </Html>
  );
}

export default Document