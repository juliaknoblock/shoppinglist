$(document).ready(function() {

var trash = '<span class="fa fa-trash"></span>';
var pencil = '<span class="fa fa-pencil"></span>';
//allows user to hit enter to submit item
function addItem(){
    $('#add-items').keydown(function(enter){
        if(enter.keyCode == 13) {
            postItem();
        }
    });
}

addItem();

//to add item to list
function postItem(){
    var item = $('#add-items').val();
    var placeIt = $('<li>' + trash + item + pencil +'</li>');
    $('.shoppingList').prepend(placeIt);
    $('#add-items').val('');
}

 //to delete item
 $(document).on('click', '.fa-trash', function() {
    $(this).closest('li').fadeOut(150);
 });

//to checkoff item
$(document).on('click', '.fa-pencil', function() {
    $(this).closest('li').toggleClass('completed');
});

  

});
