$(document).ready(function(){
  $('#searchent').keypress(function(e){
      if(e.which ==='13'){
        alert('code');
      }
    /* Using keypress for enter click event*/
    
    var searchT = $('#searchent').val();
    /*Requesting data based on terms placed in search bar*/
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchT+"&format=json&callback=?";
    $.ajax({
      type:'GET',
      url:url,
      async:false,
      dataType:'json',
      success:function(data){
        $('#output').html('');
        /*Using the for loop to iterate through all values found based on the words written in the search and to return the values*/
        /*The for loop iterates past the first value[0] of the array because that first value is the input*/
        for(i=0; i < data[1].length; i++){
        /*Arrays are nested*/
        /*The final array in the nested array is the url that will redirect the user to the site of whichever article they clicked*/  
          
          $('#output').append("<li><a href="+data[3][i]+" target='_blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
          
        /*Adding and sorting the data to its parent. Adding hypertext for the purpose of allowing user to access the data requested*/
        }
    /*Grabbing Wiki's Api and linking to an empy list that will be displayed at the center of the body*/   
        
      },
      error:function(errorMsg){
        alert("Error");
      /*Any term that is not searched or is unable to be queried will respond with an error message*/
      
      }
    });
    
    
    
  });
});