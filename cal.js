var numSeq = [];
var showNum = 0;
var lastNum = "";
var result = 0;
var lastOper = "";
var buttonSeq =[];

$("button").click(function() {
            checkButton($(this).html());
            
            //console.log(numSeq);
        });

function clearAll()
{
  lastOper = "";
  numSeq = [];
  showNum = 0;
  lastNum = 0;
  result = 0;
  mainDis();
  lastDis();
  buttonSeq = [];
}

function clearInput()
{
  showNum = 0;
  numSeq = [];
  mainDis();
  buttonSeq = [];
}

function mainDis()
{
  
  $("#showField1").html(showNum);
}

function lastDis()
{
  $("#showField2").html(lastNum);
}



function checkButton(str)
{
  buttonSeq.push(str);
  if(buttonSeq.length > 2) buttonSeq.shift();
  //console.log(buttonSeq);
  
  
  if (str ==="AC")
    {
      clearAll();
    }
  else if (str === "CE")
    {
      clearInput();
    }
  else if (str === "=")
  {
    outResult();
  }
  else
  {
      numIss(str);
  }
}

function numIss(str)
{
  if (str>=0 && str <=9)
    {
      numSeq.unshift(str);
      //console.log(numSeq);
      showNum =0;
      for (var i =0; i<numSeq.length;i++)
      {
        showNum += numSeq[i] * Math.pow(10,i);
      }
      mainDis();
      
    }
  else 
    {
      if (lastButton(buttonSeq))        
        {
          
        }
      else
        {
          if(lastOper !== "")
          {
            result = calLastResult(result, showNum, lastOper);
          }
        else
          {
            result = showNum;
          }      
          showShift(str);
        }         
            
    }  
}

function calLastResult(res,show,lastO)
{
  if(lastO === "+")
    {
      return res + show;
    }
  else if (lastO === "-")
    {
      return res-show;
    }
  else if (lastO === "*")
    {
      return res*show;
    }
  else if (lastO === "/")
    {
      return res/show;
    }
 
  
}

function outResult()
{
  if(lastButton(buttonSeq))
    {
      
      clearAll();
      $("#showField2").html("Wrong Input");
      
    }
  else
    {
      lastNum = lastNum + showNum + "=";
      lastDis();
      lastNum = "";
      showNum = calLastResult(result,showNum,lastOper);
      mainDis();
      numSeq = [];
      lastOper = "";
    }
  
}

function showShift(str)
{
      lastOper = str;
      lastNum = lastNum + showNum + str;
      lastDis();
      showNum = str;
      mainDis();
      numSeq=[];
}

function lastButton(butSeq)
{
  if(butSeq[0] === "+" ||butSeq[0] === "-" ||butSeq[0] === "*"||butSeq[0] === "/")
    {
      return true;
      //console.log(butSeq);
    }
  else
    {
      return false;
    }
 
}