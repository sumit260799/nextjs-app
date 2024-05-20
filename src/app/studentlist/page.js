import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/studentlist/1">anil </Link>{" "}
        </li>
        <li>
          <Link href="/studentlist/2"> sam</Link>
        </li>
        <li>
          <Link href="/studentlist/3"> ram</Link>
        </li>
        <li>
          <Link href="/studentlist/4"> akshay</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
