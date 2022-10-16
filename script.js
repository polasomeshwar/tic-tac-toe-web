document.addEventListener("DOMContentLoaded",()=>{
    let button = document.querySelectorAll('.grid-item');
    let arr = [" "," "," "," "," "," "," "," "," "];
    let changer = 0;
    console.log(button);
    document.querySelector("#reset").addEventListener("click",()=>{
        for(let i =0;i<9;i++)
        {
            button[i].getElementsByTagName("button")[0].textContent = "";
        }
        changer = 0;
        arr = [" "," "," "," "," "," "," "," "," "];
        document.querySelector("#result").style.display = "none";
        for(let i=0;i<9;i++)
        {
            button[i].addEventListener("click",make);
        }
    });
    for(let i=0;i<9;i++)
    {
        button[i].addEventListener("click",make);
    }
    function make(event)
    {
        let cur_button = event.target;
        let {id} = cur_button;
        console.log(id);
        var text = event.target.textContent.trim();
        symbol = "";
        if(text=="")
        {
            if(changer%2==0)
            {
                cur_button.textContent = "X";
                arr[id] = "X";
                symbol = "X";
            }
            else
            {
                cur_button.textContent = "O";
                arr[id] = "O";
                symbol = "O";
            }
            changer+=1;
            console.log(arr);
            if(checkWinner())
            {
                document.querySelector("#result").style.display = "revert";
                document.querySelector("#result").textContent = `Winner is ${symbol}`;
                for(let i=0;i<9;i++)
                {
                    button[i].removeEventListener("click",make);
                }
            }
            else if(isArrayfull())
            {
                document.querySelector("#result").style.display = "revert";
                document.querySelector("#result").textContent = "Draw Match";
            }
        }
    }
    function checkWinner()
    {
        console.log(arr);
        if(arr[0]!=" " && arr[0]===arr[1] && arr[0]===arr[2]
            || arr[0]!=" " && arr[0]===arr[4] && arr[0]===arr[8]
            || arr[0]!=" " && arr[0]===arr[3] && arr[0]===arr[6]
            ||arr[1]!=" " && arr[1]===arr[4] && arr[1]===arr[7]
            ||arr[2]!=" " && arr[2]===arr[5] && arr[2]===arr[8]
            ||arr[2]!=" " && arr[2]===arr[4] && arr[2]===arr[6]
            ||arr[3]!=" " && arr[3]===arr[4] && arr[3]===arr[5]
            ||arr[6]!=" " && arr[6]===arr[7] && arr[7]===arr[8]
            )
        {
            return true;
        }
        return false;
    }
    function isArrayfull(){
        for(let i=0;i<9;i++)
        {
            if(arr[i]===" ")
            {
                return false;
            }
        }
        return true;
    }
});