
var counter = 2;

function ending()
{
	if ((--counter) === 0)
	{
		let ending = document.getElementById("ending");
		ending.style.display = "unset";
		ending.play();
	}
}

function activate()
{
	document.getElementById("button").style.display = "none";
	document.getElementById("loading").style.display = "unset";
	setTimeout(ending, 5000);
}
