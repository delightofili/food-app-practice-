import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meal";

function MealsDetailsPage({ params }) {
  const meal = getMeal(params.slug);
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image alt="" fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mail to: ${"email"}`}>name</a>
          </p>
          <p className={classes.summary}>Summary</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

export default MealsDetailsPage;
