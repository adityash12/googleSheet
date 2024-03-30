// defines the curentaily active cell
let activeCellId = null; //this is a global variable
let activeCelIdValue = document.getElementById("active-cell");

let form = document.getElementById("form");
const state = {}; //this is a state object or we can say hash map

form.addEventListener("change", onChangeFormData);

//--------    -------    -------------  -------------

const defaultStyles = {
  //Todo:change it later
  // fontFamily: "Poppins-light",
  // fontSize: "16",
  // isBold: false,
  // isItalic: false,
  // isUnderLine: false,
  // align: "left",
  // textColor: "#000000",
  // bgcolor: "#ffffff",

  FontFamily: "Poppins-light",
  FontSize: "16",
  IsBold: false,
  IsItalic: false,
  IsUnderLine: false,
  Isalign: "left",
  TextColor: "#000000",
  BgColor: "#ffffff",
};
// ------ --------- ---------     --------- ------------ -----------
function onChangeFormData() {
  console.log("hi");
  const options = {
    FontFamily: form.fontFamily.value,
    FontSize: form.fontSize.value,
    IsBold: form.isBold.checked,
    IsItalic: form.isItalic.checked,
    IsUnderLine: form.isUnderline.checked,
    Isalign: form.align.value, //"left ,right,center"
    TextColor: form["textColor"].value,
    BgColor: form["bgColor"].value,
  };
  console.log(options);
  applyStyles(options); //this fn is used to apply selected styles in active cell value
}
//------  ---------- ------      ----------------- -----------
function applyStyles(styles) {
  //options==styles both are same
  //it will apply  the styles to the active cell.
  //   console.log(typeof styles);

  if (!activeCellId) {
    //if none cells are selected
    form.reset();
    alert("please select a cell to apply");
    return;
  }
  console.log(activeCellId);

  //if some cell is selected then apply to the style to cell
  const activeCell = document.getElementById(activeCellId);
  activeCell.style.color = styles.TextColor;
  activeCell.style.backgroundColor = styles.BgColor;

  activeCell.style.fontFamily = styles.FontFamily;
  activeCell.style.textAlign= styles.Isalign;
  activeCell.style.fontSize = styles.FontSize + "px";
  activeCell.style.fontWeight = styles.IsBold ? "600" : "400"; //boolean value
  activeCell.style.textDecoration = styles.IsUnderLine ? "underline" : "none"; //boolean value
  activeCell.style.fontStyle = styles.IsItalic ? " italic" : "normal"; //boolean value
  //when a update in cell style,update those style with state object
  state[activeCellId] = styles;
}

// ----------------- ---------- ----------- ------------- ----------
// + " !important"
function onFocusCell(event) {
  //if we click to any cell that time we the whole object frm listner

  activeCellId = event.target.id; //B3 or A3
  activeCelIdValue.innerText = activeCellId;

  if (state[activeCellId]) {
    //alreday toched cell
    resetForm(state[activeCellId]);
  } else {
    resetForm(defaultStyles);
  }
}

//----- -------- --------- ------------- ---------- ---------

function resetForm(styles) {
  console.log(styles);
  form.fontSize.value = styles.FontSize;
  form.fontFamily.value = styles.FontFamily;
  form.isBold.checked = styles.IsBold;
  form.isItalic.checked = styles.IsItalic;
  form.isUnderline.checked = styles.IsUnderLine;
  form.align.value = styles.Isalign;
  form.textColor.value = styles.TextColor;
  form.bgColor.value = styles.BgColor;
}

//
