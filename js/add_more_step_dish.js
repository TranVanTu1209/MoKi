var steps = $('#modified-meal .recipe .steps .step');
var addStepBtn = $('#modified-meal .recipe .add-step button');
var stepNumber = steps.length;
addStepBtn.on('click', (e) => {
  var newStep = `<div class="step row"><div class="col-sm-3"><h4 class="font-weight-bold text-danger">Bước ${stepNumber++}</h4></div>
<div class="col-sm-9"><div class="form-group step"><textarea name="" id="" cols="30" rows="4" class="form-control"></textarea>
</div></div></div>
  `;
  $('#modified-meal .recipe .steps').append(newStep);
});