var FKeyPad = document.calcform;
var Accumulate = 0;
var FlagNewNum = false;
var PendingOp = "";
function NumPressed(Num) {
  if (FlagNewNum) {
    FKeyPad.txt1.value = Num;
    FlagNewNum = false;
  } else {
    if (FKeyPad.txt1.value == "0") FKeyPad.txt1.value = Num;
    else FKeyPad.txt1.value += Num;
  }
}
function Operation(Op) {
  var txt1 = FKeyPad.txt1.value;
  if (FlagNewNum && PendingOp != "=");
  else {
    FlagNewNum = true;
    if ("+" == PendingOp) Accumulate += parseFloat(txt1);
    else if ("-" == PendingOp) Accumulate -= parseFloat(txt1);
    else if ("/" == PendingOp) Accumulate /= parseFloat(txt1);
    else if ("*" == PendingOp) Accumulate *= parseFloat(txt1);
    else Accumulate = parseFloat(txt1);
    FKeyPad.txt1.value = Accumulate;
    PendingOp = Op;
  }
}
function Decimal() {
  var curtxt1 = FKeyPad.txt1.value;
  if (FlagNewNum) {
    curtxt1 = "0.";
    FlagNewNum = false;
  } else {
    if (curtxt1.indexOf(".") == -1) curtxt1 += ".";
  }
  FKeyPad.txt1.value = curtxt1;
}
function ClearEntry() {
  FKeyPad.txt1.value = "0";
  FlagNewNum = true;
}
function Clear() {
  Accumulate = 0;
  PendingOp = "";
  ClearEntry();
}
function Neg() {
  FKeyPad.txt1.value = parseFloat(FKeyPad.txt1.value) * -1;
}
