
function draw(){
d3.selectAll('svg').remove();

  d3.json("mieiDati.json")
    .then(function(dataset) {
	function update() {
path = d3.select("#chart").selectAll("path").data(pie(dataset));
path.transition()
.duration(1500)
.attr('d', arc) 
.attr('fill', function(d) { 
	return color(d.data.count);
})
  .attrTween("d", arcTween); 
}
var alclik=[]
for(var j=0;j<dataset.length;j++){
 alclik[j]=0;
}
function switchData(d) {
	var i=d.index;
	if(alclik[i]!=1){
	alclik[i]=1
  var col=HEX(dataset[i].count);
  var dim=RGB(dataset[i].colore);
  
  
  dataset[i].count=dim;
  dataset[i].colore=col;}
  
}
function DecToHex(n){

hex=n.toString(16);

if(hex.length==1) hex="0"+hex; /*aggiunge lo zero davanti se è un numero con una cifra sola*/
return hex.toUpperCase();
}
function HexToDec(s){
//converte da stringa esadecimale a numero decimale
return parseInt(s,16);
}
function RGB(c){

var r=new Array(3);
if(c.charAt(0)=="#") c=c.substr(1,6);
c=c.substr(1,6); //elimina il cancelletto
for(i=0;i<3;i++)
r[i]=HexToDec(c.substr(i*2,2));
var rs=0;
for(var t=0;t<r.length;t++){
rs=rs+r[t];
}
return rs;
}
function HEX(c){

return ("#"+ DecToHex(c));
}

function arcTween(a) {
	var i = d3.interpolate(this._current, a);
	this._current = i(0);
	return function(p) {
		return arc(i(p));
	};
}

		// chart dimensions
	var width = 800;
	var height = 400;

//raggio
var radius = Math.min(width, height) / 2 - 6;

// colori
var vettC=[]
for(var i=0;i<dataset.length;i++){
	vettC[i]=dataset[i].colore;
}
var color = d3.scaleOrdinal(vettC);


var pie = d3.pie() 
.value(function(d) { return d.count; }) 
.sort(null)
.padAngle(0.05); 


var arc = d3.arc()
.innerRadius(5) 
.outerRadius(radius)

var arcOver = d3.arc()
.innerRadius(5) 
.outerRadius(radius + 6)


var svg = d3.select('#chart') 
.append('svg') 
.attr('width', width) 
.attr('height', height) 
.append('g') 
.attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')'); 

var tooltip = d3.select('#chart') .append('div') .attr('class', 'tooltip');

dataset.forEach(function(d) { d.enabled = true; });

var path = svg.selectAll('path') 
.data(pie(dataset)) 
.enter() 
.append('path') 
.attr('d', arc) 
.attr('fill', function(d) { 
	return color(d.data.count);
})

  .each(function(d) { this._current = d; });                


path.on('click', function(d) { 
	switchData(d);
	tooltip.style('display', 'none');
	update(); 
});
          })
 .catch(function(error) {
   console.log(error);
  });




                                                      
}
d3.select("#myButton").on("click", draw)
