function convert(){
    const dollar=document.getElementById("dollar").value;
    document.getElementById("euro").value=dollar*0.91;
    document.getElementById("rupee").value=dollar*71.11;    
}