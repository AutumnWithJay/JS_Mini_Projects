const userList = document.querySelector('.user-list');
const addUserBtn = document.querySelector('.addUser');
const removeUserBtn = document.querySelector('.removeUser');
const addHundredBtn = document.querySelector('.addHundred');
const addThousandsBtn = document.querySelector('.addThousands');
const addTenThousandsBtn = document.querySelector('.addTenThousands');
const sortUserBtn = document.querySelector('.sortUser');
const sumMoneyBtn = document.querySelector('.sumMoney');

let users = [
  {
    name: 'Jason',
    money: 140203,
  },
  {
    name: 'Olson',
    money: 492371,
  },
  {
    name: 'Jake',
    money: 384720,
  },
  {
    name: 'Kasey',
    money: 938470,
  },
];

const dummyData = [
  {
    name: 'Liam',
  },
  {
    name: 'Emma',
  },
  {
    name: 'Ava',
  },
  {
    name: 'Sophia',
  },
  {
    name: 'Socrates',
  },
  {
    name: 'Charlotte',
  },
  {
    name: 'Amelia',
  },
  {
    name: 'Harper',
  },
  {
    name: 'Lucas',
  },
  {
    name: 'Benjamin',
  },
  {
    name: 'Mason',
  },
  {
    name: 'Ethan',
  },
];

// UserList 화면에 출력
function LoadUserList() {
  userList.innerHTML = `<h2>Person Money</h2>`;
  users.forEach((user) => {
    const div = document.createElement('div');
    div.classList.add('user');
    div.innerHTML = `${user.name} $${user.money}`;
    userList.append(div);
  });
}

// User 추가 함수
function addUser(user) {
  users.push(user);
  LoadUserList();
}

// User 객체 생성 후 매개변수 담아서 addUser 호출
function createUserInfo() {
  const name = dummyData[0].name;
  let money;

  if (!dummyData[0].money || dummyData[0].money === 0) {
    money = Math.floor(Math.random() * 100000);
  } else {
    money = dummyData[0].money;
  }

  const newUser = {
    name,
    money,
  };
  dummyData.shift();
  addUser(newUser);
}

// UserList에 가장 아래에 존재하는 User 삭제
function removeLastUser() {
  dummyData.push(users.pop());
  LoadUserList();
}

// User의 money가 매개변수만큼 증가
function addMoneyToUser(money) {
  users.forEach((user) => {
    user.money += money;
  });
  LoadUserList();
}

// 버튼 이벤트리스트
addUserBtn.addEventListener('click', createUserInfo);
removeUserBtn.addEventListener('click', removeLastUser);
addHundredBtn.addEventListener('click', () => addMoneyToUser(100));
addThousandsBtn.addEventListener('click', () => addMoneyToUser(1000));
addTenThousandsBtn.addEventListener('click', () => addMoneyToUser(10000));

// 초기 실행 코드
function init() {
  LoadUserList();
}

init();
