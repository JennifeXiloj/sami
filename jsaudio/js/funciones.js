$(document).ready(function()
 {

 	$(".musica").audioControls(
 	{
 		autoPlay:false,
 		timer:'increment',
 		onAudioChange:function(datos)
 		{
 			$(".nombremp3").text(datos.title);
 		}
 		


 	});
 });