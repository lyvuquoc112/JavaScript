import { TYPE_ERR, TYPE_WAR, TYPE_LOG } from "../constants.js";

function logger(log, type = TYPE_LOG) {
  console[type](log);
}

export default logger; // default chỉ một cái thôi
// còn export không thì có thể làm vô vàn
