function deleteLocation(locationId) {
    $.ajax({
        url: '/api/location/' + locationId + '/delete-json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({locationId}),
        type: 'POST',
        success: ((res) => {
            // Replace follow button with unfollow.
            console.log("Result: ", res)
            $("#" + locationId).remove();
        }),
        error: ((error) => {
            console.log("Error: ", error);
        })
    });
}