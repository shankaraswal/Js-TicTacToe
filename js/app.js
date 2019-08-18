$(document).foundation();
/*global jslint, jQuery, ATT, document, setTimeout, window */
var ATT = (function (){
		var aa=true,
		clickSquare,
		myFunction,
		checkSuperset,
		comb = [
                [ 1, 2, 3 ],
                [ 4, 5, 6 ],
                [ 7, 8, 9 ],
                [ 1, 4, 7 ],
                [ 2, 5, 8 ],
				[ 3, 6, 9 ],
                [ 1, 5, 9 ],
                [ 3, 5, 7 ]
            ],
		custArray,
		result =false,
		checkResult,
		player;

	clickSquare = function () {
		var arrO=[], arrX=[];
		$('.tictacBoard > li').each(function(){
			$(this).on('click', function(){
				if($(this).hasClass('empty')){
					$('.result').html('');
					var dVal = $(this).data("val");
					$(this).removeClass('empty').addClass('selected');
					if(aa){
					 player ='A';
					  arrO.push(dVal);$(this).append("O"); aa = false;
					    if(arrO.length > 2){
							checkResult(player, arrO);
						 }
					  }
					else{
					  player ='B';
					  arrX.push(dVal);$(this).append("X");aa = true;
					  if(arrX.length > 2){
						  checkResult(player, arrX);
						}
					  }
					}
				else{
					$('.result').html('you have already selected this square')
					}
				});
			});
		};
	var global=false;
	checkResult = function (player, arr) {
		custArray =(arr.sort()).toString();
		if(arr.length == 3){
			for (var i = 0; i < comb.length; i++) {
					if(comb[i].toString()== (arr.sort()).toString()){
						$('.result').html('won player ' + player);
						$('.tictacBoard > li').removeClass('empty').css('background','#ccc');
					}
				}
			 }
		else{
			
			//console.log('comb.length = ' + comb.length)
			if(global == false) comb.forEach(myFunction)
   		   }
		   return custArray;
		 };
		
	myFunction = function (item, index) {
			var dis = (item).toString();
			//console.log(dis + '----' +'custArray = ' + custArray);
			result = (checkSuperset( custArray, dis ));
			if(result == true){
				global =true;
			}
			console.log('final result === '+ result);
			if(global==true){
				$('.result').html('won player ' + player);
				$('.tictacBoard > li').removeClass('empty').css('background','#ccc');
			}
			else{
				if($('.tictacBoard > li.empty').length == 0 && $('.tictacBoard > li.selected').length == 9){
					 $('.result').html('game draw');
					 $('.tictacBoard > li').removeClass('empty').css('background','#f00');
				 }	
			}

		}

	
	checkSuperset = function( custArray, dis ) {
		  for(var i = 0; i < dis.length; i++){
			if(custArray.indexOf(dis[i]) === -1)
			   return false;
			}
		  return true; 
		};

	return {
		clickSquare: clickSquare
	  };	
	})();
	
	$(document).ready(function(){
			ATT.clickSquare();
	})
	
	