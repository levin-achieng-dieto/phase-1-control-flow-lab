function scuberGreetingForFeet(distance){
  let result;

  if (distance <= 400){
    result = "This one is on me!"
  }

  else if(distance > 2000 && distance < 2500){
    result = "I will gladly take your thirty bucks."
  }
  else if (distance > 2500){
    result = "No can do."
  }

  return result;
}
scuberGreetingForFeet(300)



function ternaryCheckCity(result){
  const city = 'NYC';
  const nice = result===city? "Ok, sounds good." : "No go.";
  return nice;
}
ternaryCheckCity(good)



function switchOnCharmFromTip(tip){
  let result;
switch (tip){
  case 'generous':
    result = "Thank you so much.";
    break;
    case 'not as generous':
      result = "Thank you."
      break;
      default:
        result = "Bye."
}
return result;
}
switchOnCharmFromTip(yess)
