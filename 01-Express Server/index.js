// Steps:
// 1. Create directory
// 2. Create index.js
// 3. npm init
// 4. npm install express
// 5. type in package.json to module(ESM)
// 6. Start Express import and code
// 7. run the server node index.js

import express from "express"; // import express

// create app
const app = express();

const PORT = 3000;

// Server port, callback of execution
app.listen(PORT, () => {
    console.log(`=== Express Server running on port ${PORT} ===`);
});