$(document).ready(function() {
$("#some-form").submit(function(event) {
  event.preventDefault();
  var favColor = $("input#favColor").val();
  var favAnimal = $("input#favAnimal").val();
  var favVehicle = $("input#favVehicle").val();
  var favPerson = $("input#favPerson").val();
  var favThings = [favColor,favAnimal,favVehicle,favPerson];
  var newfavThings = [];
      newfavThings.push(favThings[2],favThings[1],favThings[3]);


  //$("#output").text(favThings);
 //$("#output").text(favThings[2]);
   $("#output").text(newfavThings);
})
});
