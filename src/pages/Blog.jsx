import React from "react";
import { Code } from "../components/Code";

export const Blog = () => {
  const block = [
    {
      text: "this is a test java code block",
      code: `import java.util.Scanner;
public class K
{
int goodData;
int num;
 
public K(int num)
{
this.num = num;
}
 
public boolean getGoodData()
{
if(num > 10)
return true;
 
return false;
}
  
public int getNum()
{
return num;
}
  
}
  
class Ktester
{
public static void main (String [] args)
{
 
Scanner input = new Scanner(System.in);
do
{
System.out.println("enter a number: ");
int num = input.nextInt();
K dido = new K(num);
 
}
while(dido.num);
 
}
  
}`,
      date: "20/3/2022",
      line: 10,
      language: "java",
    },
  ];
  return (
    <div className="p-5">
      <h1
        className="text-2xl md:text-3xl md:max-w-xl mt-10"
        style={{ fontFamily: "incognito" }}
      >
       Blog
       
       {
        block.map((data,index)=>(
<Code language={data.language} code={data.code} line={data.line} />
        ))
       }
      </h1>
    </div>
  );
};
