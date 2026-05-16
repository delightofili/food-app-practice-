import Image from "next/image";
import Link from "next/link";
import classes from "./meal-item.module.css";
import { deleteMealAction } from "@/lib/action";

function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
          <form action={deleteMealAction.bind(null, slug)}>
            <button type="submit">Delete Meal</button>
          </form>
        </div>
      </div>
    </article>
  );
}

export default MealItem;
