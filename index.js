function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return 'This one is on me!';
  }
  else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (feet > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  const cityCheck = (city === 'NYC') ? ('Ok, sounds good.') : ('No go.');
  
  return cityCheck;
}

function switchOnCharmFromTip(){
  // Write your code here!
}