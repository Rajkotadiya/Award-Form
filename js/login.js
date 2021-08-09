let output = JSON.parse(localStorage.getItem('DATA_FORM'));
let Edit = document.querySelector('.display');

let div = document.createElement('div');
let schools = new Object();
let gender = new Object();
let school_lables = new Array();
let school_count = new Array();

let gender_lables = new Array();
let gender_count = new Array();

if (output === null || output.length == 0){
    console.log('No Data Available');
    div.innerHTML = '<p>No Data Available</p>'
    Edit.appendChild(div);
}else{
    //div.innerHTML += `No. of entries = ${output.length}`
    //Edit.appendChild(div);
    for (const data of output){
        if (data['school_name'] in schools){
            schools[data['school_name']] = schools[data['school_name']] + 1;
        }else{
            schools[data['school_name']] = 1;
            school_lables.push(data['school_name']);
        }
        console.log(data['gender_option']);
        if (data['gender_option'] in gender){
            gender[data['gender_option']] = gender[data['gender_option']] + 1;
        }else{
            gender[data['gender_option']] = 1;
            gender_lables.push(data['gender_option']);
        }
        console.log(gender)
    }
    for (const data of school_lables){
        school_count.push(schools[data]);
    }
    for (const data of gender_lables){
        gender_count.push(gender[data]);
    }
    console.log(school_lables, school_count);
    console.log(gender_lables, gender_count);
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: school_lables,
            datasets: [{
                data: school_count,
            }]
        },
        options: {
            scales: {
              yAxes: [{
                ticks: {
                    stepSize: 1,
                }
              }]
            }
          }
    });
    ctx = document.getElementById('myChart1');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: gender_lables,
            datasets: [{
                data: gender_count,
            }]
        },
        options: {
            scales: {
              yAxes: [{
                ticks: {
                    stepSize: 1,
                }
              }]
            }
          }
    });
    
        /*
        c = Object.keys(data);
        var container = document.createElement('div');
        var liner = document.createElement('div');
        for (const names of c){
            var info = document.createElement('div');
            info.innerHTML = `${names} : ${data[names]}`
            container.appendChild(info);
            liner.innerHTML = '-------------------------------------------------------';
        }
        Edit.appendChild(container);
        Edit.appendChild(liner);
    }*/

}

