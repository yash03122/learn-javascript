for(var i = 0; i <= 10; i++)
{ 
    for(var j = 10; j >=i; j--)
    {
        process.stdout.write(" ")
    }
    for(var j = 0; j <=i; j++)
    {
        process.stdout.write("* ")
    }
    process.stdout.write("\n")
}