let katzDeliLine = [];

// function takeANumber(katzDeliLine,name){
//   katzDeliLine.push(name);
//   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
// }

let i = 0;
function takeANumber(katzDeliLine){
  i++;
  katzDeliLine.push(i);
  return `Welcome. You are number ${i} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length == 0){
    return `There is nobody waiting to be served!`
  }else{
    let firstInLine = katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`
  }
}

function currentLine(katzDeliLine){
  let line = [];
  if(katzDeliLine.length == 0){
    return `The line is currently empty.`
}
  for(let i=0;i<katzDeliLine.length;i++){
    line.push(i+1+'. '+katzDeliLine[i]);
  }
  return `The line is currently: ${line.join(', ')}`
}