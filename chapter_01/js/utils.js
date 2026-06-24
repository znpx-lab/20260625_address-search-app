// utils.js - 共通定数

const CSV_FILE_PATH = "assets/utf_ken_all.csv"; // CSVファイルのパス

function findAddressInCSV(csvText, zipcode) {
  const lines = csvText.split("\n");
  for (const line of lines) {
    const columns = line.split(",");
    if (columns[0] && columns[0].replace(/"/g, "") === zipcode) {
      const address = [columns[1], columns[2], columns[3]]
        .filter((part) => part)
        .map((part) => part.replace(/"/g, ""))
        .join("");
      return address;
    }
  }
  return null;
}
