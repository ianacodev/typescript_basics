const path = require("path");

// instruct webpack on how to compile our application.
module.exports = {
  entry: path.join(__dirname, "src", "app.ts"), // points to where we want to compile those typescript files.
  output: {
    // file are compiled to the output file.
    filename: "app.js",
    path: path.join(__dirname, "dist") // path of directory we want to create. (__dirname - directory supplied via node)
  },
  resolve: {
    // tell webpack what to resolve and type of extensions to resolve
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      // array to supply different loaders to test against particulate file extensions. Basically testing against typescript files and supplying loader to then compile those files to a bundler.
      {
        test: /\.ts$/, // reg exp ($ denotes end of file/string testing against)
        use: "awesome-typescript-loader" // typescript loader for webpack, detects ts files and compiles them like tsc would (dont have to use tsc and will pick up our tsconfig)
      }
    ]
  },
  devServer: {
    // compiles entry files and puts them in a virtual dist folder (or designated output), and then serve up application.
    // dont need 'dist' in path anymore because it virtual <script src="dist/app.js"</script>, webpack will intelligently take care of that.
    // so we dont need to specified directories.
    // on devServer start the webpack output is server from 'webpack output is served from /' which is why we dont need to specify dist in index.html
    port: 3000
  }
};
