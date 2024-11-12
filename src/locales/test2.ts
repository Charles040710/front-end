
interface User{
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Alex"
};

function getUser(cur_user: User): string {
  return `${cur_user.name}`
}

console.log(getUser(user))
