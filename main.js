const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 94 fahrenheit outside, so insertx went for a walk. When they got to inserty, they stared in horror for a few moments, then insertz. Bob saw the whole thing, but was not surprised — insertx weighs 300 pounds, and it was a hot day."

insertX = [
  "Willy the Goblin",
  "Big Daddy Father",
  "Christmas"
]

insertY = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
]

insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
]

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.071429) + " stone";
    const temperature =  Math.round((5/9)*(94-32)) + " centigrade";
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll('insertx', xItem);
  newStory = newStory.replace('inserty', yItem);
  newStory = newStory.replace('insertz', zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}