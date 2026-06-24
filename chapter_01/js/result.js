// Issue 5
const copyButton = document.getElementById("copy");
const addressElement = document.getElementById("address");

copyButton.addEventListener("click", () => {
});

function copyToClipboard(text) {
}

function showResult(address) {
}

/*
# テスト方法
1. index.htmlをLive Serverで開く
2. まだ他の機能が実装されていないので、単体でテストを行う
3. 単体でテストする際は、ブラウザの開発者ツールを開き、Consoleタブを開く
4. ConsoleにはJavaScriptが入力できるため、まずコピペできるように allow paste と入力してEnterキーを押す（ブラウザによっては要否が異なる）
6. showResult("住所")と入力してEnterキーを押す
7. 画面に住所が表示され、コピーボタンが表示されることを確認する
8. コピーボタンを押し、「住所」の文字がコピーできていることを確認する
*/
