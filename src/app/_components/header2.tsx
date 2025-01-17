import Link from "next/link";
import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import { type Author } from "@/interfaces/author";

type Props = {
  date: string;
  author: Author;
};

export function Header2({ date, author }: Props) {
  return (
    <>
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex justify-between">
      <span className="text-lg items-right"><DateFormatter dateString={date} /></span>
      <Link href="/" className="hover:underline">
        Blog&nbsp;&nbsp;  
      </Link>
      <Avatar name={author.name} picture={author.picture} />
    </h2>
    </>
  );
}

