"use client";
import { Button } from "nika-styles";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 pt-16">
      <p>
        Examples of already styled button react component from lib nika styles
      </p>
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <Button border={"1"} color={"blue"} size={"large"}>
          Hello World!
        </Button>

        <Button border={"1"} color={"red"} size={"small"}>
          Hello World!
        </Button>
      </div>
    </main>
  );
}
