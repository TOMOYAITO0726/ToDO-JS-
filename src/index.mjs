import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value; //add-textに入力された値をアラートに表示させる
  document.getElementById("add-text").value = ""; //テキスト入力・追加後のテキストを空にする
  //alert(inputText);
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;//テキストボックスに入力した値が生成される
  //divタグの子要素に各要素を設定
  div.appendChild(li);
  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

}
document
.getElementById("add-button") //対象の要素
.addEventListener("click", () => onClickAdd());　//種類、関数
