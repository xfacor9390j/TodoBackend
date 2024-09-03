import dbConnect from "./src/dbConnection/dbConnection";
import { createApp } from "../server/createApp";
const PORT = 3000;
const app = createApp();
async function startServer() {
    await dbConnect();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
startServer();
export default app;