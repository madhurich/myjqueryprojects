var main = function() {
 var cities = [
   "warangal",
   "hanamkonda",
   "denton",
   "dallas"
 ] ;
  cities.sort();
  $('#search').autocomplete({source: cities});
};
 
$(document).ready(main);