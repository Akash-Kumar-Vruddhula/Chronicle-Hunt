var output = document.getElementById("demo");

var slider = document.getElementById("ranger").oninput = function(){

    var value = (this.value-this.min)/(this.max-this.min)

    this.style.background = 'linear-gradient(to right, #6b8dff 0%, #ff2a5f' + value + '%, #fff ' + value + '%, #fff 100%)'

    output.innerHTML = this.value;
}
function myFunction()
            {

                var x = document.getElementById("ranger").value;
                if(x == 18)
                {
                    document.getElementById("brief").innerHTML = "18th Century is known for Innovation of Electricity, Steme Engine, Mercury Thermometer.";
                    document.getElementById("enter-button").href = "index2.html";
                }
                else if(x==19)
                {
                    document.getElementById("brief").innerHTML = "19th Century is known for Innovation of Light Bulb.";
                    document.getElementById("enter-button").href = "index3.html";
                }
                else
                {
                    document.getElementById("brief").innerHTML = "20th Century is known for Innovation of Aeroplane, also known for world wars";
                    document.getElementById("enter-button").href = "index4.html";
                }
                console.log(output);
            }