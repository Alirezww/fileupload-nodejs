const path = require("path");
const fs = require("fs");

const createDirectoryUploadPath = () => {
    let d = new Date();
    let Year = "" + d.getFullYear();
    let Month = "" + d.getMonth();
    let Day = "" + d.getDay();
    const uploadPath = path.join(__dirname, "..", "..", "public", "uploads", Year , Month, Day);
    fs.mkdirSync(uploadPath, { recursive : true });
    return path.join("public", "uploads", Year, Month, Day)
}

module.exports = {
    createDirectoryUploadPath
}