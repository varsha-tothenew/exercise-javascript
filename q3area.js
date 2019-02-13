function aoc()
    {
    var r=prompt("Please Enter Radius to calculate area of circle");
    var area=3.14*r*r;
    var text=document.getElementById("textid");
    text.innerHTML="Area of the circle is: "+area;
    }