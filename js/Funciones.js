// agrega un parametro unico al archivo
var prevenirCache=1;
// innerHtml para imagen o texto Ajax en espera
var loaderGif = "<center><p style='font-size:10pt;display:inline-block; text-align:center; margin-top: 25%;'><img src='images/loader.gif' alt='Cargando datos'/><br /> Aguarde por favor...</p></center>";

/*** no editar ***/
var cargarObjetos="";
var rootdomain="http://"+window.location.hostname;
var cacheParam="";

function cargarAjax(identificador,url,divAjax){
	var contenidoAjax = false;

	//Para permitir el uso de AJAX en todo tipo de nevegadores
	if(window.XMLHttpRequest) {
	contenidoAjax = new XMLHttpRequest();
	}else if(window.ActiveXObject) {
	contenidoAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
	alert('Su navegador no soporta Ajax');
	}

	contenidoAjax.onreadystatechange=function(){
	cargaPagina(contenidoAjax,divAjax);
	}
				
	if(prevenirCache == 1){
		cacheParam=(url.indexOf("?")!=-1)? "&"+ new Date().getTime() : "?"+ new Date().getTime();
	}	

	contenidoAjax.open('POST', url+cacheParam, true);
	contenidoAjax.send(null);

/*	var list=document.getElementsByTagName("UL")[0]
	
	for (var i=0;i<4;i++)
	{ 
		if(i==identificador){
			list.getElementsByTagName("LI")[identificador].style.textDecoration="underline";
			}
			else{
			list.getElementsByTagName("LI")[identificador].style.textDecoration="none";
			}
	} 
*/		
	

}
		
function cargaPagina(contenidoAjax,divAjax){
	if(contenidoAjax.readyState==1){
		document.getElementById(divAjax).innerHTML = loaderGif;
		}
		if(contenidoAjax.readyState == 4 && (contenidoAjax.status==200 || window.location.href.indexOf("http")==-1)){
			document.getElementById(divAjax).innerHTML = contenidoAjax.responseText;
		}
	}
				
				


function cargarRecursos(){
	if(!document.getElementById){
		return;
		}
	var i = 0;for(i=0; i<arguments.length; i++){
	var archivo=arguments[i];var archivoref="";

	if(cargarObjetos.indexOf(archivo)==-1){
		if(archivo.indexOf(".js")!=-1){
			archivoref=document.createElement('script');archivoref.setAttribute("type","text/javascript");
			archivoref.setAttribute("src", archivo);
		}else if(archivo.indexOf(".css")!=-1){
			archivoref=document.createElement("link");
			archivoref.setAttribute("rel", "stylesheet");
			archivoref.setAttribute("type", "text/css");
			archivoref.setAttribute("href", archivo);
			}
		}
		if(archivoref!=""){
			document.getElementsByTagName("head").item(0).appendChild(archivoref);
			cargarObjetos+=archivo+" ";
		}
	}
}



