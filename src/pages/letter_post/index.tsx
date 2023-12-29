import { NextPage } from "next";
import { CommingSoonPages } from "@/components/elements/CommingSoonPages";
import { LogoBikeistaButton } from "@/components/elements/LogoBikeistaButton";

const LetterPost: NextPage = () => {
  return (
    <main>
      <LogoBikeistaButton />
      <CommingSoonPages />
    </main>
  );
};

export default LetterPost;
