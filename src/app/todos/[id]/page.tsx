import { notFound } from "next/navigation";

const fetchTodoItem = async (id: string) => {
  const res = await fetch(`/api/todos/${id}`);
  return res.json();
};

export default async function TodoItem({ params }: { params: { id: string } }) {
  const todo = await fetchTodoItem(params.id);

  if (todo.title === null) return notFound(); // function  given to us by NextJS

  return <div>{todo.title}</div>;
}
