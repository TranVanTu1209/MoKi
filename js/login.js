var formReg = document.getElementById('tabreg');
formReg.onclick = () => {
  var _inputTv = document.getElementsByClassName('numTV');
  var cong = document.getElementsByClassName('cong');
  var tru = document.getElementsByClassName('tru');
  var i = 0;
  for (i = 0; i < cong.length; i++)
  {
    cong[i].onclick = function () {
      var numTv = this.parentElement.parentElement.children
      var numTvVal = numTv[1]
      if (numTvVal.value <= 0)
      {
        numTvVal.value = 0
      }
      numTvVal.value++
    }
  }
  for (i = 0; i < tru.length; i++)
  {
    tru[i].onclick = function () {
      var numTv = this.parentElement.parentElement.children
      var numTvVal = numTv[1]
      if (numTvVal.value <= 0)
      {
        numTvVal.value = 0
      } else
      {
        numTvVal.value--
      }

    }
  }
  for (i = 0; i < _inputTv.length; i++)
  {
    _inputTv[i].onchange = function () {
      if (this.value <= 0)
      {
        this.value = 0;
      }
      if (this.value == "")
      {
        this.style.border = '1px solid red';
      }
    }
  }

}


$(function () {

  $("select").bsMultiSelect();



});