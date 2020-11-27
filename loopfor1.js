function fact(num)
{
    var ans=1;
    for (var i= 1;i<=num ; i++)
    {

      ans = ans*i

    }
    return ans
}

function factorial(num=7)
{
    var ans= 1;
    text="";
    for ( var i=1;i<=num; i= i+ans )
    {

        ans = ans*i
        text= text +" * " +i;
       
    }
    console.log(text+ " = "+ans)
    return ans
    
}
console.log(factorial())

function fact(num)
  
{

    ans=2
    for( var i=1; i<num; i++)
    {
        ans = ans+1          
        
    }
    return ans
    

}
console.log(fact(10))