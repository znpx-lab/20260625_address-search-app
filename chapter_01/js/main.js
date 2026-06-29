// main.js - メインの処理、イベントハンドラの紐付け

const zipcodeInputElement = document.getElementById("zipcode");
const searchButton = document.getElementById("search");

// Issue 1
searchButton.addEventListener("click", async () => {
 clearError();
 const zipcode = zipcodeInputElement.value;
 console.log(zipcode);
 if (!validateInputOnSearch(zipcode)) {
   return;
 }
 const address = await searchAddress(zipcode);
 console.log(address);
 showResult(address);
});


// Issue 2
zipcodeInputElement.addEventListener("input", () => {
});

/*
# テスト方法 Issue 1
1. index.htmlをLive Serverで開く
2. まだ他の機能が実装されていないので、単体でテストを行う
3. 単体でテストする際は、ブラウザの開発者ツールを開き、Consoleタブを開く
4. ConsoleにはJavaScriptが入力できるため、まずコピペできるように allow paste と入力してEnterキーを押す（ブラウザによっては要否が異なる）
6. フォームに7桁の数字を入力し、検索ボタンを押す
7. Consoleに入力した郵便番号と「サンプル住所」が表示されることを確認する
*/
