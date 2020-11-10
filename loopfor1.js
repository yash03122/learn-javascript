function fact(num)
{
    var ans=1;
    for (var i= 1;i<=num ; i++)
    {

      ans = ans*i

    }
    return ans
}

function factorial(num=5)
{
    var ans=1;
    for ( var i=1;i<=num; i++ )
    {

        ans = ans*i
    }
    return ans
}
console.log(factorial(3))