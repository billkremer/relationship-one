$(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    var formData = {};
    // clear initial data
    $('#form_results').empty();

    var formObjArray = $(this).serializeArray();
    // console.log(formObjArray);
    formObjArray.forEach(function (input) {
      formData[input.name] = input.value;
    });
    // console.log(formData);

    var $dataToDisplay = $("<ul><li>Name: " + formData.first_name + " " + formData.last_name + "</li>")
    $dataToDisplay.append("<li>Email: " + formData.email_address + "</li>")
    $dataToDisplay.append("<li>Company: " + formData.company_name + "</li>")
    $dataToDisplay.append("<li>Title: " + formData.title + "</li>")
    $dataToDisplay.append("<li>Country: " + formData.country + "</li>")
    // console.log(formData.state);
    if (formData.state != undefined) {
      $dataToDisplay.append("<li>State: " + formData.state + "</li>")
    }
    $dataToDisplay.append("<li>Additional Comments: " + formData.additional_comments + "</li>")

    $('#form_results').append($dataToDisplay);
  });

  // data validation to prevent states from being picked without US picked first
  $('form').find('#country').on("change", function () {
    if ($('form').find('#country').val() == "United States") {
      $('form').find('#state').attr('disabled',false)
    } else {
      $('form').find('#state').attr('disabled',true).val('');
    }
  });

});
