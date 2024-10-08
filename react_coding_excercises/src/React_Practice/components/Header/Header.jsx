


export default function Header() {
const reactDescriptions = ["Lorem1", "Lorem2", "Lorem3"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


  const descrption = reactDescriptions[getRandomInt(2)];

  return (
    <div>
      {descrption} ipsum dolor sit amet consectetur adipisicing elit. Omnis,
      deleniti dicta labore sunt ducimus in illo, temporibus nisi deserunt quia
      odit delectus magni necessitatibus molestiae dolor harum illum quaerat
      maiores!
    </div>
  );
}
