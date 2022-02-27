function checkStringsAnagram(l,m) {
    let len1 = l.length;
    let len2 = m.length;
    if(len1 !== len2){
       document.write('Invalid Input entered');
       return
    }
    let str1 = l.split('').sort().join('');
    let str2 = m.split('').sort().join('');
    if(str1 === str2){
        document.write("True");
    } else { 
       document.write("False");
    }
 }
 var l = prompt("Enter string1 here");
 var m = prompt("Enter string2 here");
 checkStringsAnagram(l,m);