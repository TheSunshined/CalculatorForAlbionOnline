function T40 () {
        
var a = var1.value;
var b = var2.value;
var Percent = var3.value;
var Chose = typ;

        
 a = a*1;
 b = b*1;
Percent = Percent*0.01;
        

var data = "";
var loop = 0;
var Value1 = 0;
        
data += "Wyniki<br>";
do {
        var CraftCount = a/2;
        if (CraftCount < b)
            {   
                b = b - CraftCount + (CraftCount*Percent);
                a = (CraftCount*2*Percent);
                b = Math.abs(b);
                a = Math.abs(a);
            }
        else if (CraftCount > b || CraftCount == b)
            {
            var difference = CraftCount - b;
            var difference2 = difference*2;
            var useditems = a - difference2; // Used 2x items 240
            var ReturnedItems = useditems * Percent; // Items from return 84
            var ItemsAfterCraft = ReturnedItems + difference2; // 81+84=165

            // 240
            CraftCount = useditems/2;

            b = b - CraftCount + (CraftCount*Percent);
            a = ItemsAfterCraft;
            }
    
        function cout () 
        {
            var secondary = (b - Math.floor(b))*100;
            var secondary2 = (a - Math.floor(a))*100;
            var secondary3 = (CraftCount - Math.floor(CraftCount))*100;
            Value1 = Value1 + CraftCount;

            loop++;
            data += '<div class="box">Craft: ' + loop + "  Teoretyczna ilość wyprodukowanej/ego " + Chose + ": " + Math.floor(CraftCount) + " i %" + Math.round(secondary3) + " szansy na dodatkowy craft" +
                "<br> Item 2x: " + Math.floor(a) + " i %" + Math.round(secondary2) + " na jeden dodatkowy zwrot<br> Item 1x: " + Math.floor(b) + " i %" + Math.round(secondary) + ' na jeden dodatkowy zwrot<br></div>';
        }
        if ( b < 1 || a < 2)
        { 
        cout();
        break;
        }
        else
        {
        cout();
        }
    
    }
while (b > 1 || a > 1);
        
        show2.innerHTML = data + "<br>W przybliżeniu wyjdzie łącznie: " + Math.floor(Value1) +" " + Chose + '<br> A po samym "craftingu" zostanie: ' +Math.floor(a)+" " + Chose + ' 2x' + ' i ' + Math.floor(b)+" " + Chose + ' 1x <br> Wszystko zostało zaokrąglone w dół.' ;}