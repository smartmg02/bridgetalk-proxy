const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// 根目錄 / 的測試回應
app.get('/', (req, res) => {
  res.send('BridgeTalk Proxy Server is live!');
});

// 你之後可以在這裡加入其他 API route

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
