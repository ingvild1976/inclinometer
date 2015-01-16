var observationsData = [];

$(document).ready(function(){
	populateTable();
	// Username link click
    //$('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);
	
    // Add User button click
    //$('#btnAddUser').on('click', addUser);

    // Delete User link click
    //$('#userList table tbody').on('click', 'td a.linkdeleteuser', deleteUser);

});


// Functions
function populateTable(){
	var tableContent = '';
	
	$.getJSON('/observations/observations', function(data){
		
	// Stick our user data array into a observationsData variable in the global object
    observationsData = data;

	// For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
			tableContent += '<td>' + this._id + '</td>';
            tableContent += '<td>' + this.Comment + '</td>';
            tableContent += '<td>' + this.TimeStamp + '</td>';
			tableContent += '<td>' + this.ObservationType + '</td>';
			tableContent += '<td>' + this.AccX + '</td>';
			tableContent += '<td>' + this.AccY + '</td>';
			tableContent += '<td>' + this.AccZ + '</td>';
			tableContent += '<td>' + this.AngX + '</td>';
			tableContent += '<td>' + this.AngY + '</td>';
			tableContent += '<td>' + this.AngZ + '</td>';
			tableContent += '<td>' + this.MagX + '</td>';
			tableContent += '<td>' + this.MagY + '</td>';
			tableContent += '<td>' + this.MagZ + '</td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#observations table tbody').html(tableContent);	
	});
};
