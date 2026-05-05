import React from "react";
import { Link } from "react-router-dom";
import recentAdded from "../data/recentAdded";
import Card from "../../../components/ui/primitives/Card";

const RecentlyAdded = () => {
  return (
    <div className="mt-12">
      <h1 className="text-xl font-semibold text-inverted/90">
        Recently Additions
      </h1>
      <hr className="border-inverted/30 border-b mt-4" />
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {recentAdded.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`} className="block">
            <Card book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
