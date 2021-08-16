var form;
var storyTime;

// Displays the original form. 
function returnForm()
{
	document.getElementById("story-time").style.display = "none";
	document.getElementById("inital-page").style.display = "inline";
	document.getElementById("story-form").reset();
}

// Displays a generated story. 
function generateStory()
{
	document.getElementById("story-time").style.display = "inline";
	document.getElementById("inital-page").style.display = "none";

	form = document.getElementById("story-form").elements;
	storyTime = document.getElementsByTagName("span");

	for (var i = 0; i < storyTime.length; i++)
	{
		if (form[i].value.trim() === "")
		{
			storyTime[i].innerHTML = "&ltmissing text&gt";
			storyTime[i].style.color = "red";
		}
		else
		{
			storyTime[i].innerHTML = form[i].value;
			storyTime[i].style.color = "blue";
		}
	}
}