var i1 = 2;
var numeberSlot1 =6;
var imagepath = "https://avinash-bucket8083.s3.ap-south-1.amazonaws.com/Group+2-";
	function spin1(){
		i1++;
		if (i1>=numeberSlot1){
			clearInterval(slot1);
			return null;
		}
var slotTile = document.getElementById("slot1");
    var urlll = imagepath + `${i1}.png`;
		slotTile.style.backgroundImage = 'url(' + urlll + ')';
    slotTile.style.backgroundSize="cover";
    slotTile.style.backgroundRepeat="no-repeat";
	}

var slot1 =setInterval(spin1, 1000);