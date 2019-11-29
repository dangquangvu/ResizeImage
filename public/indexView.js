var global = global || window;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var img = new Image();
            img.onload = async function() {
                let width = img.width;
                let height = img.height;
                console.log(width, height);
                let changeSize = (a, b) => {
                    console.log("chang");
                    if (a > b && a > 1000) {
                        heSo = a / 1000;
                        a = a / heSo;
                        b = b / heSo;
                    } else if (b > a && b > 1000) {
                        heSo = b / 1000;
                        a = a / heSo;
                        b = b / heSo;
                    }
                    return { a, b };
                };
                let data = changeSize(width, height);
                if (data) {
                    img.width = data.a;
                    img.height = data.b;
                }
                console.log(data);
                console.log(img.width, img.height);
                $("#blah").css({ widht: data.a, height: data.b });

                canvas.height = canvas.width * (img.height / img.width);
                var oc = document.createElement("canvas"),
                    octx = oc.getContext("2d");
                console.log(octx);
                oc.width = data.a;
                oc.height = data.b;
                canvas.width = data.a;
                canvas.height = data.b;
                octx.fillStyle = "#fff"; /// set white fill style
                octx.fillRect(0, 0, canvas.width, canvas.height);
                octx.drawImage(img, 0, 0, oc.width, oc.height);
                // step 2
                // octx.drawImage(oc, 0, 0, oc.width, oc.height);

                // step 3, resize to final size
                ctx.drawImage(
                    oc,
                    0,
                    0,
                    oc.width,
                    oc.height,
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );
                $("#blah").attr("src", e.target.result);
                $("#a_href").attr("href", e.target.result);
            };
            img.src = reader.result;
            console.log(img.src);
        };
        reader.readAsDataURL(input.files[0]);
        //fr.readAsDataURL(input.files[0]);
    }
}