function bandwImage(_img)
{
	_img.src = "./images/me_bandw.jpg";
}

function colourImage(_img)
{
	_img.src = "./images/me_colour.jpg";
}

function randomColour(_letter)
{
	_letter.style.color = getRandomColor();
}

function getRandomColor() 
{
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}