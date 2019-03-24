function dogInfo(name, breed, cost) {
alert('Name: ' + name + ', ' + 'Breed: ' + breed + ', ' + 'Cost: ' + '$' + cost);
}

// function dogCost(cost) {
//   alert('The total is: ' + '$' + cost);
// }

let total = 0;

  function adoptionFee(cost) {
    total = total + cost;
    alert('The total is: ' + '$' + total);
  }

$('.dog-profile').hover(function(e) {
  $('.dog-profile').toggleClass('profile-shadow');
});
