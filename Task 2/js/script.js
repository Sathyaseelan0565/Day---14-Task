let div = document.createElement("div");
div.setAttribute("class", "container my-3");
div.setAttribute("id", "form");

let form = document.createElement('form');

let h1 = document.createElement("h1");
h1.setAttribute('class', "text-center");
h1.innerText = "DOM Form";
form.appendChild(h1);

let div_1 = document.createElement("div");
div_1.setAttribute("class", "row"); // row 12 column

let div_2 = document.createElement("div");
div_2.setAttribute("class", "col"); //col-1 6 column

let label = document.createElement("label");
label.setAttribute("for", "inputAddress");
label.innerText = "First Name :";
div_2.appendChild(label);

let input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class", "form-control");
input.setAttribute("id", "first_name")
input.setAttribute("placeholder", "Enter Your First Name");
div_2.appendChild(input);

div_1.appendChild(div_2)

let div_3 = document.createElement("div");
div_3.setAttribute("class", "col"); 

let label1 = document.createElement("label");
label1.setAttribute("for", "inputAddress");
label1.innerText = "Last Name :";
div_3.appendChild(label1);

let input1 = document.createElement("input");
input1.setAttribute("type","text");
input1.setAttribute("class", "form-control");
input1.setAttribute("id", "last_name")
input1.setAttribute("placeholder", "Enter Your Last Name");
div_3.appendChild(input1);
div_1.appendChild(div_3)

form.appendChild(div_1);

let div_4 = document.createElement("div");
div_4.setAttribute("class", "form-group my-3");

let label2 = document.createElement("label");
label2.setAttribute("for", "inputAddress");
label2.innerText = "Address :";
div_4.appendChild(label2);

let input2 = document.createElement("input");
input2.setAttribute("type", "text");
input2.setAttribute("class", "form-control");
input2.setAttribute("id", "address");
input2.setAttribute("placeholder", "Enter Your Address")
div_4.appendChild(input2)
form.appendChild(div_4);

let div_5 = document.createElement("div");
div_5.setAttribute("class", "form-group col-md-6");

let label3 = document.createElement("label");
label3.setAttribute("for","inputAddress");
label3.innerText = "Pincode :";
div_5.appendChild(label3);

let input3 = document.createElement("input");
input3.setAttribute("type", "text");
input3.setAttribute("class", "form-control");
input3.setAttribute("id", "pincode");
input3.setAttribute("placeholder", "Pincode");
div_5.appendChild(input3)
form.appendChild(div_5);

let fieldset = document.createElement("fieldset");
fieldset.setAttribute("class", "form-group row");

let legend = document.createElement("legend");
legend.setAttribute("class","col-form-label col-sm-2 float-sm-left pt-0");
legend.innerText = "Gender :";
fieldset.appendChild(legend);

let div_6 = document.createElement("div");
div_6.setAttribute("class", "col-sm-10");

let div_7 = document.createElement("div");
div_7.setAttribute("class", "form-check");

let input4 = document.createElement("input");
input4.setAttribute("class", "form-check-input");
input4.setAttribute("type", "radio");
input4.setAttribute("name", "gender")
input4.setAttribute("id", "gridRadio1");
input4.setAttribute("value", "option1");
div_7.appendChild(input4);

let label4 = document.createElement("label");
label4.setAttribute("class", "form-check-label");
label4.setAttribute("for", "gridRadio1");
label4.innerText = "Male"
div_7.appendChild(label4);

div_6.appendChild(div_7);

let div_8 = document.createElement("div");
div_8.setAttribute("class", "form-check");

let input5 = document.createElement("input");
input5.setAttribute("class", "form-check-input");
input5.setAttribute("type", "radio");
input5.setAttribute("name", "gender")
input5.setAttribute("id", "gridRadio2");
input5.setAttribute("value", "option2");
div_8.appendChild(input5);

let label5 = document.createElement("label");
label5.setAttribute("class", "form-check-label");
label5.setAttribute("for", "gridRadio2");
label5.innerText = "Female"
div_8.appendChild(label5);

div_6.appendChild(div_8)

let div_9 = document.createElement("div");
div_9.setAttribute("class", "form-check");

let input6 = document.createElement("input");
input6.setAttribute("class", "form-check-input");
input6.setAttribute("type", "radio");
input6.setAttribute("name", "gender")
input6.setAttribute("id", "gridRadio3");
input6.setAttribute("value", "option3");
div_9.appendChild(input6);

let label6 = document.createElement("label");
label6.setAttribute("class", "form-check-label");
label6.setAttribute("for", "gridRadio3");
label6.innerText = "Transgender"
div_9.appendChild(label6)

div_6.appendChild(div_9)
fieldset.appendChild(div_6);
form.appendChild(fieldset);

let fieldset2 = document.createElement("fieldset");
fieldset2.setAttribute("class", "form-group-row");


let legend1 = document.createElement("legend");
legend1.setAttribute("class","col-form-label col-sm-2 float-sm-left my-3  pt-0");
legend1.innerText = "Food :";
fieldset2.appendChild(legend1);


let div_10 = document.createElement("div");
div_10.setAttribute("class", "col-sm-10 d-flex my-3 menu");


let div_11 = document.createElement("div");
div_11.setAttribute("class", "form-check");

let input7 = document.createElement("input"); 
input7.setAttribute("class", "form-check-input");
input7.setAttribute("type", "checkbox");
input.setAttribute("name", "food");
input7.setAttribute("id", "food");
input7.setAttribute("value", "Idli")
input7.setAttribute("onclick","checkBoxFunc('this')");
div_11.appendChild(input7);

let label7 = document.createElement("label");
label7.setAttribute("class", "form-check-label");
label7.setAttribute("for", "defaultCheck1");
label7.innerText = "Idli"
div_11.appendChild(label7)

div_10.appendChild(div_11)

let div_12 = document.createElement("div");
div_12.setAttribute("class", "form-check");

let input8 = document.createElement("input"); 
input8.setAttribute("class", "form-check-input");
input8.setAttribute("type", "checkbox");
input.setAttribute("name", "food");
input8.setAttribute("id", "food");
input8.setAttribute("value", "Dosa")
input8.setAttribute("onclick","checkBoxFunc('this')");
div_12.appendChild(input8);

let label8 = document.createElement("label");
label8.setAttribute("class", "form-check-label");
label8.setAttribute("for", "defaultCheck2");
label8.innerText = "Dosa"
div_12.appendChild(label8)

div_10.appendChild(div_12)

let div_13 = document.createElement("div");
div_13.setAttribute("class", "form-check");

let input9 = document.createElement("input"); 
input9.setAttribute("class", "form-check-input");
input9.setAttribute("type", "checkbox");
input.setAttribute("name", "food");
input9.setAttribute("id", "food");
input9.setAttribute("value", "Meals")
input9.setAttribute("onclick","checkBoxFunc('this')");
div_13.appendChild(input9);

let label9 = document.createElement("label");
label9.setAttribute("class", "form-check-label");
label9.setAttribute("for", "defaultCheck3");
label9.innerText = "Meals"
div_13.appendChild(label9)

div_10.appendChild(div_13)

let div_14 = document.createElement("div");
div_14.setAttribute("class", "form-check");

let input10 = document.createElement("input"); 
input10.setAttribute("class", "form-check-input");
input10.setAttribute("type", "checkbox");
input.setAttribute("name", "food");
input10.setAttribute("id", "food");
input10.setAttribute("value", "Chappathi")
input10.setAttribute("onclick","checkBoxFunc('this')");
div_14.appendChild(input10);

let label10 = document.createElement("label");
label10.setAttribute("class", "form-check-label");
label10.setAttribute("for", "defaultCheck4");
label10.innerText = "Chappathi"
div_14.appendChild(label10)

div_10.appendChild(div_14)

let div_15 = document.createElement("div");
div_15.setAttribute("class", "form-check");

let input11 = document.createElement("input"); 
input11.setAttribute("class", "form-check-input");
input11.setAttribute("type", "checkbox");
input.setAttribute("name", "food");
input11.setAttribute("id", "food");
input11.setAttribute("value", "Panner Butter masala")
input11.setAttribute("onclick","checkBoxFunc('this')");
div_15.appendChild(input11);

let label11 = document.createElement("label");
label11.setAttribute("class", "form-check-label");
label11.setAttribute("for", "defaultCheck4");
label11.innerText = "Panner butter masala"
div_15.appendChild(label11);
div_10.appendChild(div_15);

fieldset2.appendChild(div_10)
form.appendChild(fieldset2);

let div_16 = document.createElement("div");
div_16.setAttribute("class", "form-row");

let div_17 = document.createElement("div");
div_17.setAttribute("class", "form-group col-md-6");

let label12 = document.createElement("label");
label12.setAttribute("for", "inputCity");
label12.innerText = "State :"
div_17.appendChild(label12);

let input12 = document.createElement("input");
input12.setAttribute("type", "text");
input12.setAttribute("class", "form-control");
input12.setAttribute("id", "state");
input12.setAttribute("placeholder", "State");
div_17.appendChild(input12)

div_16.appendChild(div_17);

let div_18 = document.createElement("div");
div_18.setAttribute("class", "form-group col-md-6");

let label13 = document.createElement("label");
label13.setAttribute("for", "inputCity");
label13.innerText = "Country :"
div_18.appendChild(label13);

let input13 = document.createElement("input");
input13.setAttribute("type", "text");
input13.setAttribute("class", "form-control");
input13.setAttribute("id", "country");
input13.setAttribute("placeholder", "Country");
div_18.appendChild(input13)

div_16.appendChild(div_18);

form.appendChild(div_16);

let div_20 = document.createElement("div");
div_20.setAttribute("class", "form-group submit my-3");

let button = document.createElement("button");
button.setAttribute("id","submit");
button.setAttribute("type","submit");
button.setAttribute("class","btn btn-primary rounded-pill");
button.innerText = "Submit";
div_20.appendChild(button);

form.appendChild(div_20);

div.appendChild(form);

let div_19 = document.createElement("div");
div_19.setAttribute("class", "table-responsive");

let table = document.createElement("table");
table.setAttribute("class", "table");

let tableHead = document.createElement("thead");

let tr = document.createElement("tr");

let th_1 = document.createElement("th");
th_1.setAttribute("scope", "col");
th_1.innerText = "FirstName";
tr.appendChild(th_1);

let th_2 = document.createElement("th");
th_2.setAttribute("scope", "col");
th_2.innerText = "LastName";
tr.appendChild(th_2);

let th_3 = document.createElement("th");
th_3.setAttribute("scope", "col");
th_3.innerText = "Address";
tr.appendChild(th_3);

let th_4 = document.createElement("th");
th_4.setAttribute("scope", "col");
th_4.innerText = "Pincode";
tr.appendChild(th_4);

let th_5 = document.createElement("th");
th_5.setAttribute("scope", "col");
th_5.innerText = "Genter";
tr.appendChild(th_5);

let th_6 = document.createElement("th");
th_6.setAttribute("scope", "col");
th_6.innerText = "Food";
tr.appendChild(th_6);

let th_7 = document.createElement("th");
th_7.setAttribute("scope", "col");
th_7.innerText = "State";
tr.appendChild(th_7);

let th_8 = document.createElement("th");
th_8.setAttribute("scope", "col");
th_8.innerText = "Country";
tr.appendChild(th_8);

tableHead.appendChild(tr);

table.appendChild(tableHead);

let tableBody = document.createElement("tbody");
tableBody.setAttribute("id", "tbody");
tableBody.setAttribute("class", "bgt")
table.appendChild(tableBody)

div_19.appendChild(table);

div.appendChild(div_19);

document.body.appendChild(div);


let foodArray = [];
function checkBoxFunc(value){
    console.log("value: ", value.value);
    console.log("foodArray: ", foodArray);
    console.log("foodArray length: ", foodArray.length);

        if(value.checked){
            if(foodArray.length < 2){
                foodArray.push(value.value);
            } else {
                value.checked = false;
            }
        }
        if(value.checked){
            foodArray = foodArray.filter(item => item !== value.value)
            value.checked = false;
        }
        console.log("foodArray Final: ", foodArray);
    }

    let submit = document.getElementById("submit");
        submit.addEventListener("click", function(event){
            event.preventDefault();

            let gender = document.getElementsByName("gender");
            let genderValue;
            for(let i = 0; i < gender.length; i++){
                if(gender[i].checked){
                    genderValue = gender[i].value;
                }
            }

            let foodList = foodArray;
            let foodCount = foodArray.length;
                for(let i = 0; i < food.length; i++){
                    if(food[i].checked){
                        foodList.push(food[i].value);
                        foodCount++;
                    }
                }
                if(foodList.length >= 2){
                    result = foodList.join(",");
                } else {
                    result = alert("Choose atleast 2 options out of 5 in Food");
                }

                let firstName = document.getElementById("first_name").value;
                let lastName = document.getElementById("last_name").value;

                CreateTable(
                    firstName,
                    lastName,
                    pincode.value,
                    address.value,
                    genderValue,
                    result,
                    state.value,
                    country.value
                );
                    firstName.value = "";
                    lastName.value = "";
                    pincode.value = "";
                    address.value = "";
                    genderValue = "";
                    fo;odList = []
                    state.value = "";
                    country.value = "";
        });

        function CreateTable(tname1, tname2, tname3, tname4, tname5, tname6, tname7, tname8){
            let tbody = document.getElementById("tbody");
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");
            let td7 = document.createElement("td");
            let td8 = document.createElement("td");

            td1.innerHTML = tname1;
            td2.innerHTML = tname2;
            td3.innerHTML = tname3;
            td4.innerHTML = tname4;
            td5.innerHTML = tname5;
            td6.innerHTML = tname6;
            td7.innerHTML = tname7;
            td8.innerHTML = tname8;
            tbody.appendChild(tr);
            tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        }
     