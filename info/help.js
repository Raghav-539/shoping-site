function f1()
			{
				var name=document.getElementById("i1").value;
				var a=/(^[A-Z]{1}[a-z]+$|^[A-Z]{1}[a-z]+\s{1}[A-Z]{1}[a-z]+$)/;
				
				if(a.test(name))
				{
					document.getElementById("t1").style.color="Green";
					document.getElementById("t1").innerHTML="Correct";
				}
				else
				{
					document.getElementById("t1").style.color="Black";
					document.getElementById("t1").innerHTML="Incorrect";
				}
			}
			function f11()
			{
				var name=document.getElementById("i1").value;
				if(name.length==0)
				{
					document.getElementById("t1").style.color="Red";
					document.getElementById("t1").innerHTML="Fields With * Can't Be Left Empty!!";
				}
			}
			function f2()
			{
				var mobile=document.getElementById("i2").value;
				var mp=/^[0-9]{10}$/;
				
				if(mp.test(mobile))
				{
					document.getElementById("t2").style.color="Green";
					document.getElementById("t2").innerHTML="Correct";
				}
				else
				{
					document.getElementById("t2").style.color="Black";
					document.getElementById("t2").innerHTML="Incorrect";
				}
			}
			function f22()
			{
				var mobile=document.getElementById("i2").value;
				if(mobile.length==0)
				{
					document.getElementById("t2").style.color="Red";
					document.getElementById("t2").innerHTML="Fields With * Can't Be Left Empty!!";
				}
			}
			function f3()
			{
				var email=document.getElementById("i3").value;
				var ep=/^\w+[0-9]*[#.]?[a-z0-9]+(@)[a-z]+(.com|.in|.edu.in)$/;
				
				if(ep.test(email))
				{
					document.getElementById("t3").style.color="Green";
					document.getElementById("t3").innerHTML="Correct";
				}
				else
				{
					document.getElementById("t3").style.color="Black";
					document.getElementById("t3").innerHTML="Incorrect";
				}
			}
			function f33()
			{
				var email=document.getElementById("i3").value;
				if(email.length==0)
				{
					document.getElementById("t3").style.color="Red";
					document.getElementById("t3").innerHTML="Fields With * Can't Be Left Empty!!";
				}
			}
			function f4()
			{
				var password=document.getElementById("i4").value;
				var p1=/[A-Z]+/;
				var p2=/[a-z]+/;
				var p3=/[0-9]+/;
				var p4=/[!@#$%^&*]/;
				var l=password.length;
				
				if(p1.test(password) && p2.test(password) && p3.test(password) && p4.test(password) && 6<=l && l<=20)
				{
					document.getElementById("t4").style.color="Green";
					document.getElementById("t4").style.fontSize="20px";
					document.getElementById("t4").innerHTML="Correct";
				}
				else
				{
					if(l<6)
					{
						document.getElementById("t4").style.color="Black";
						document.getElementById("t4").style.fontSize="20px";
						document.getElementById("t4").innerHTML="Password Length is Too Less";
					}
					else
					{
						document.getElementById("t4").style.color="Black";
						document.getElementById("t4").style.fontSize="14px";
						document.getElementById("t4").innerHTML="Password Should Have an Uppercase, a Lowercase, a Digit and a Special Character";
					}
				}
			}
			function f44()
			{
				var password=document.getElementById("i4").value;
				if(password.length==0)
				{
					document.getElementById("t4").style.color="Red";
					document.getElementById("t4").style.fontSize="20px";
					document.getElementById("t4").innerHTML="Fields With * Can't Be Left Empty!!";
				}
			}
			function f5()
			{
				var confirmpass=document.getElementById("i5").value;
				var password=document.getElementById("i4").value;
				
				if(password===confirmpass)
				{
					document.getElementById("t5").style.color="Green";
					document.getElementById("t5").innerHTML="Correct";
				}
				else
				{
					document.getElementById("t5").style.color="Black";
					document.getElementById("t5").innerHTML="Passwords Doesn't Match";
				}
			}
			function f55()
			{
				var confirmpass=document.getElementById("i5").value;
				if(confirmpass.length==0)
				{
					document.getElementById("t5").style.color="Red";
					document.getElementById("t5").innerHTML="Fields With * Can't Be Left Empty!!";
				}
			}
			function f6()
			{
				var v1=document.getElementById("t1").innerHTML;
				var v2=document.getElementById("t2").innerHTML;
				var v3=document.getElementById("t3").innerHTML;
				var v4=document.getElementById("t4").innerHTML;
				var v5=document.getElementById("t5").innerHTML;
				var v6="Correct";
				var v7="",v8="Fields With * Can't Be Left Empty!!";
				
                if(v1===v2 && v1===v3 && v1===v4 && v1===v5 && v1===v6)
                {
                    window.alert("All Provided Details Are Correct");
                }
                else
                {
					if(v1===v7||v2===v7||v3===v7||v4===v7||v5===v7||v1===v8||v2===v8||v3===v8||v4===v8||v5===v8)
                    {
						window.alert("One Or More Required Input Fields Are Empty");
					}
					else
					{
						window.alert("All Provided Details Are Not Correct");
					}
                }
			}