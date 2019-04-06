$(function(){
    var photo = $('#druhy');
    var index = Math.floor(Math.random()*hrady.length);
    var table = $('#myTable');
    var testy = $('#test');
    var x =0;
    var desc = $('#hraddes');
    var fot =$('#myModal');
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];





    $('#prvni').hide();
    $('#druhy').hide();
    $('#myBtn').hide();
    $('#odpoved').hide();


    $('header').on('mouseenter',function(){
        $(this).css({'background-color':'black'});
        $("#hradLogo").css({'opacity':'1'});
     
    });
    $('header').on('mouseleave',function(){
        $(this).css({'background-color':'lightgray'});
        $("#hradLogo").css({'opacity':'0.5'});
       
    });
    $('h2').on('mouseleave',function(){
        $(this).css({'color':'black'});
        
    });
    $('h2').on('mouseenter',function(){
        $(this).css({'color':'blue'});
        
    });


    $('#Hrady').on('click', function(){
        $('#prvni').toggle(500);
    });
    $('#Znalosti').on('click', function(){
        $('#druhy').toggle(500);
    });
   
    

   

    
    hrady.forEach(function(obj, idx){
        console.log(obj.name);
        table.append('<tr><td><p>'+hrady[x].name+'</p></td></tr>');
        testy.append('<ul><li><p>'+hrady[x].name+'</p></li></ul>');
        x == hrady.length -1 ? x=0 : x++;
    });

    
    $("tr").on("click",function(){
        $('tr').css({'background-color':'white'});
        $(this).css({'background-color':'lightblue'});
        
    });

    
   
    
    
    $('td').on('click',function(obj, idx){
        var Kok = 'Kokorin';
        var Kos = 'Kost';
        var Pern = 'Pernstejn';
        var najdi = $(this).find('p').text();
        console.log(najdi);
        var y =2;
        if (najdi == Kok) {
            y=0;
          } else if (najdi == Kos) {
            y=1;
          } else {
            y=2;
          }
        desc.find('h3').text(hrady[y].name);
       desc.find('p').text(hrady[y].description);
       fot.find('img').attr('src','himg/' + hrady[y].photo).attr('alt',hrady[index].name);
       console.log(hrady[y].photo);
       $('#myBtn').show();
    });

    
    
    
    $(function() {
        $(photo).find('img').attr('src','himg/' + hrady[index].photo).attr('alt',hrady[index].name); 
        $('#odpoved').text('správná odpověď:    '+hrady[index].name+'');  
    });
    
        
    
   $('li').on('click',function(obj, idx){
        $('li').css({'background-color':'white'});
        $(this).css({'background-color':'yellow'});
        $('#odpoved').text('správná odpověď:    '+hrady[index].name+'');  
        var odpa = $(this).find('p').text();
        var odpb = $('#druhy').find('img').attr('alt');
        console.log(odpa);
        console.log(odpb);
        if (odpa == odpb) {
            $('#odpoved').css({'background-color':'green'}); 
        } else {
            $('#odpoved').css({'background-color':'red'});
        }
        $('#odpoved').show();   

    });


    
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
})