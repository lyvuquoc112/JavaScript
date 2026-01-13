// Import/Export

// import { TYPE_WAR, TYPE_ERR, TYPE_LOG } from "./constants.js";
// khi nhìn thấy cú pháp destructing có nghĩa là đang import
import * as constants from "./constants.js";
// nếu không muốn dùng destructing, constants là tên biến chỉ cần đúng quy tắc là được
import logger from "./logger/index.js";
// cú pháp này là import default
console.log(typeof logger);
logger("Message,..... ", constants.TYPE_WAR); // dùng * thì phải tên biến .
