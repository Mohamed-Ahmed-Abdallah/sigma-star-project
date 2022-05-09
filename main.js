
let flag = 0;
function myFunction() {
    if (flag == 0) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#202020";
        document.getElementsByTagName("nav")[0].style.backgroundColor = "black";
        document.getElementsByTagName("footer")[0].style.backgroundColor = "black";

        let allh1 = document.getElementsByTagName("h1");
        for (let i = 0; i < allh1.length; i++) {
            allh1[i].style.color = "rgba(255,255,0, 0.7)";
        }

        let allh3 = document.getElementsByTagName("h3");
        for (let i = 0; i < allh3.length; i++) {
            allh3[i].style.color = "rgba(255,255,0,0.7)";
        }


        let x = allh3[2];
        let y = allh3[3];
        let z = allh3[4];

        x.remove();
        y.remove();
        z.remove();

        let allp = document.getElementsByTagName("p");
        for (let i = 0; i < allp.length; i++) {
            allp[i].style.color = "white";
        }

        let alllabel = document.getElementsByTagName("label");
        for (let i = 0; i < alllabel.length; i++) {
            alllabel[i].style.color = "yellow";
        }

        let alla = document.getElementsByTagName("a");
        for (let i = 0; i < 7; i++) {
            alla[i].style.color = "white";
        }

        document.getElementsByClassName("form")[0].style.backgroundColor = "green";
        document.getElementsByClassName("info")[0].style.backgroundColor = "green";

        flag = 1;
    }

    else if (flag == 1) {
        location.reload();
        flag = 0;
    }
}
