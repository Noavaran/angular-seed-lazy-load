
// alert(3)
myApp.controllerProvider.register('View1Ctrl', function($scope, $css, $localStorage) {
  // $css.add(['app.css', 'test.css']);
  console.timeEnd("page start");
  console.log("*****--------- view 1 --------*****");
  console.timeEnd("page load successfully");
});