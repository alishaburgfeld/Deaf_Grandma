// function deafGrandma() {
//       let count=0
//       let text=window.prompt("HEY KID!")
//       // let lowerRegex=/[a-z]/
//       // let upperRegex=/[A-Z]/
//       if (text=="") {
//             text=window.prompt("WHAT?!")
//             deafGrandma()
//       }
//       else if (text!== "" && text!== text.toLowerCase()) {
//             text=window.prompt("SPEAK UP, KID!") 
//             deafGrandma()     
//       }
//       else if (text!== "" && text===text.toUpperCase()) {
//             text=window.prompt("NO, NOT SINCE 1946!") 
//             deafGrandma()     
//       }
//       else if (text==="GOODBYE!" && count===0) {
//             text=window.prompt("LEAVING SO SOON?")
//             count+=1
//             deafGrandma()
//       }
      
//       else if (text==="GOODBYE!" && count!==0) {
//             return alert("LATER, SKATER!")
//       }
// }

// deafGrandma();

function deafGrandma() {
    counter=0
    let text=window.prompt("HEY KID!")
    while (counter!==2) {
        if (text==="") {
            text=window.prompt("WHAT?!")
        }
        else if (text==="GOODBYE!") {
            if (counter===0) {
            text=window.prompt("LEAVING SO SOON?")
            counter+=1
            }
            else if (counter===1) {
                counter+=1
            alert("LATER, SKATER!")
            }
        }
        else if (text!==text.toUpperCase()) {
            text=window.prompt("SPEAK UP, KID!") 
        }
        else if (text===text.toUpperCase()) {
            text=window.prompt("NO, NOT SINCE 1946!") 
        }
    }
}
deafGrandma()