var cookieName = 'username';
var subjects = [
    {
        title: '车辆驶入双向行驶隧道前，应开启什么灯?',
        option: [
            'A.示廓灯或近光灯',
            'B.雾灯',
            'C.远光灯',
            'D.危险报警闪光灯',
        ],
        answer: 1
    },
    {
        title: '下列哪种行为会受到200元以上2000元以下罚款，并处吊销机动车驾驶证?',
        option: [
            'A.违反道路通行规定',
            'B.超过规定时速50%',
            'C.造成交通事故后逃逸',
            'D.驾车没带驾驶证',
        ],
        answer: 2
    },
    {
        title: '驾驶小型载客汽车在高速公路上时速超过100公里时的跟车距离是多少?',
        option: [
            'A.保持50米以上',
            'B.保持60米以上',
            'C.保持100米以上',
            'D.保持80米以上',
        ],
        answer: 3
    },
    {
        title: '在一般道路倒车时，若发现有过往车辆通过，应怎样做?',
        option: [
            'A.鸣喇叭示意',
            'B.主动停车避让',
            'C.加速倒车',
            'D.继续倒车',
        ],
        answer: 2
    },
    {
        title: '同车道行驶的车辆前方遇到下列哪种车辆不得超车?',
        option: [
            'A.城市公交车',
            'B.大型客车',
            'C.超载大型货车',
            'D.执行任务的警车',
        ],
        answer: 4
    },



    {
        title: '行车中需要借道绕过前方障碍物，但对向来车已接近障碍物时，应怎样做?',
        option: [
            'A.加速提前抢过',
            'B.鸣喇叭示意对向车辆让道',
            'C.迅速占用车道，迫使对向来车停车让道',
            'D.降低速度或停车，让对向来车优先通行',
        ],
        answer: 4
    },
    {
        title: '安全头枕在发生追尾事故时，能有效保护驾驶人的什么部位?',
        option: [
            'A.腰部',
            'B.胸部',
            'C.头部',
            'D.颈部',
        ],
        answer: 4
    },
    {
        title: '驾驶机动车在高速公路遇到能见度低于100米的气象条件时，最高车速是多少?',
        option: [
            'A.不得超过40公里/小时',
            'B.不得超过60公里/小时',
            'C.不得超过80公里/小时',
            'D.不得超过90公里/小时',
        ],
        answer: 1
    },
    {
        title: '同车道行驶的车辆遇前车有下列哪种情形时不得超车?',
        option: [
            'A.减速让行',
            'B.正常行驶',
            'C.正在超车',
            'D.正在停车',
        ],
        answer: 3
    },
    {
        title: '车辆临时靠边停车后准备起步时，应先怎样做?',
        option: [
            'A.加油起步',
            'B.鸣喇叭',
            'C.提高发动机转速',
            'D.观察周围交通情况',
        ],
        answer: 3
    },
];
var index = 0;
var score = 0;

(function(){
    var users = [
        {username: 'user1', password: '111111'},
        {username: 'user2', password: '111111'},
        {username: 'user3', password: '111111'},
    ];

    document.getElementById('sign-in').addEventListener('click', function(){
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        users.map(function(user) {
            if (user.username === username && user.password === password) {
                setCookie(cookieName, username);
                location.reload();
            }
        });
    }, false);

    isLogin();
})();

function isLogin() {
    const user = getCookie(cookieName);
    if (user) {
        document.getElementById('login').style.display="none";
        document.getElementById('welcome').innerHTML='当前帐号： ' + user;
        render();
        document.getElementById('start').style.display="block";
    }
}

function render() {
    document.getElementById('render').innerHTML = "";
    var subject = subjects[index];
    var html = document.createElement('div');
    html.innerHTML =
        '<p>' + subject.title + '</p>'+
        '<div class="radio">'+
            '<label>'+
                '<input type="radio" name="optionsRadios" id="radio1" value="1">'+
                subject.option[0] +
            '</label>'+
        '</div>'+
        '<div class="radio">'+
            '<label>'+
                '<input type="radio" name="optionsRadios" id="radio2" value="2">'+
                subject.option[1]+
            '</label>'+
        '</div>'+
        '<div class="radio">'+
            '<label>'+
                '<input type="radio" name="optionsRadios" id="radio3" value="3">'+
                subject.option[2]+
            '</label>'+
        '</div>'+
        '<div class="radio">'+
            '<label>'+
                '<input type="radio" name="optionsRadios" id="radio4" value="4">'+
                subject.option[3]+
            '</label>'+
        '</div>';
    document.getElementById('render').appendChild(html);
}

function end() {
    document.getElementById('render').innerHTML = "";
    var html = document.createElement('div');
    html.innerHTML =
        '<p>本次测评得分：' + score + '</p>';
    document.getElementById('render').appendChild(html);
}

function submit() {
    var radio = document.getElementsByName("optionsRadios");
    for (var i=0; i<radio.length; i++) {
        if (radio[i].checked && radio[i].value == subjects[index].answer) {
            score += 10;
        }
    }

    if (index < 9) {
        index++;
        if (index >= subjects.length) {
            end();
        } else {
            render();
        }
    } else {
        end();
    }
}

function signOut() {
    delCookie(cookieName);
    location.reload();
}

function setCookie(name, val) {
    localStorage.setItem(name, val);
}
function getCookie(name) {
    return localStorage.getItem(name);
}
function delCookie(name) {
    localStorage.removeItem(name);
}
