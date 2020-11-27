export const uniqElements = ( value, index, self ) =>{
	console.log(self.indexOf(value.Месяц) === index)
	return self.map(function(e) { return e.Месяц }).indexOf(value.Месяц) === index
}