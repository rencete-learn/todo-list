// Check off completed tasks
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed")
})

// Handling of deletion of tasks
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove()
    })
    event.stopPropagation()
})

// Add new tasks after pressing enter in the input text
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + $(this).val() + "</li>")
        $(this).val("")
    }
})

// Add toggling of new todo item
$("#add-todo").click(function() {
    $("input[type='text']").fadeToggle()
})