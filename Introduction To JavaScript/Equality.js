let number = 7;
let numobj1 = {num : 7};
let numobj2 = {num : 7};

document.write(number==7);
document.write("<br>");
document.write(number===7);
document.write("<br>");
document.write(number=="7");
document.write("<br>");
document.write(number==="7");
document.write("<br>");
document.write(numobj1==numobj2);
document.write("<br>");
document.write(numobj1===numobj2);
document.write("<br>");
document.write(false==0);
document.write("<br>");
document.write(false===0);
document.write("<br>");
document.write(true==1);
document.write("<br>");
document.write(true===1);
document.write("<br>");

let numobj3 = numobj1;
document.write(numobj3==numobj1);
document.write("<br>");
document.write(numobj3===numobj1);
document.write("<br>");

numobj3.num=3;
document.write(numobj1.num + "  "+ numobj3.num);
document.write("<br>");

let name = "Jayant";
let newName = name;

newName = "Jayant Two";
document.write(name);
document.write("<br>");
document.write(newName);
document.write("<br>");
