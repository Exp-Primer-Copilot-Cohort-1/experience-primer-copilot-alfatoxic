function skillsMember()  {
	var skills = ["HTML", "CSS", "JS", "REACT"];
	var total = skills.length;
	var result = skills[skills.length - 1];
	var result2 = skills[skills.length - 2];
	var result3 = skills[skills.length - 3];
	var result4 = skills[skills.length - 4];
	document.getElementById("result").innerHTML = result;
	document.getElementById("result2").innerHTML = result2;
	document.getElementById("result3").innerHTML = result3;
	document.getElementById("result4").innerHTML = result4;
	document.getElementById("total").innerHTML = total;
}
