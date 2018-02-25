module.exports = function solveEquation(equation) {
  	var array = equation.split(' '),
		a = Number(array[0]),
		b = Number(String(array[3]) + String(array[4])),
		c = Number(String(array[7]) + String(array[8])),
		sqr = b*b - 4*a*c,
		x1 = Math.round((-b + Math.sqrt(sqr))/(2*a)),
		x2 = Math.round((-b - Math.sqrt(sqr))/(2*a)),
		Total;
	if(x1>x2){
		total = [x2,x1];
	} else {
		total = [x1,x2];
	}
	return(total);
}
