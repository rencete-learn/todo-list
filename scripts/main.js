// Check off completed tasks
$("li").click(function() {
    $(this).toggleClass("completed")
})

// Handling of deletion of tasks
$("span").click(function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove()
    })
    event.stopPropagation()
})