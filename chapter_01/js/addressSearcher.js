// Issue 4
async function searchAddress(zipcode) {
  return "サンプル住所";  // 処理を書いたら削除してよい
}

async function loadCSV(csvFilePath) {
}

/*
# テスト方法
1. index.htmlをLive Serverで開く
2. まだ他の機能が実装されていないので、単体でテストを行う
3. 単体でテストする際は、ブラウザの開発者ツールを開き、Consoleタブを開く
4. ConsoleにはJavaScriptが入力できるため、まずコピペできるように allow paste と入力してEnterキーを押す（ブラウザによっては要否が異なる）
6. searchAddress("9071801")と入力してEnterキーを押す *9071801は、CSVファイルの一番下にある郵便番号
7. Consoleに、住所「沖縄県八重山郡与那国町与那国」が表示されることを確認する
8. searchAddress("0000000")と入力してEnterキーを押す *0000000は、CSVファイルに存在しない郵便番号
9. Consoleに、nullが表示されることを確認する
*/
