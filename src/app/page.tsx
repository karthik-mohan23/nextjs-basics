async function getTodos() {
  await wait(2000);
  // throw new Error("error"); //if error
  return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <div>
      <h1>Task Manager</h1>
      <h1>{todos.length} todos</h1>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//RootLayout
//RootLoading
//RootPage
//AboutLayout
//AboutLoading
//AboutPage
//.....

//IF ONLY ABOUT PAGE IS NEEDED
//RootLayout
//AboutLayout
//AboutLoading
//AboutPage
//.....
