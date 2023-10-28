import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value; //add-textに入力された値をアラートに表示させる
  document.getElementById("add-text").value = ""; //テキスト入力・追加後のテキストを空にする
  alert(inputText);
  //div生成
  
}
document
.getElementById("add-button") //対象の要素
.addEventListener("click", () => onClickAdd());　//種類、関数
