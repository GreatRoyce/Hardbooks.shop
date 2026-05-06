import { Link, useNavigate, useParams } from "react-router-dom";
import libraryData from "../data/libraryData";
import recentAdded from "../data/recentAdded";
import CompBtn from "../../../components/ui/primitives/CompBtn";
import NavBar from "../components/NavBar";
import { FaArrowRight, FaHeartbeat } from "react-icons/fa";
import CartButton from "../../../components/ui/composites/CartButton";
import { useCart } from "../../shared/context/CartContext";

const allBooks = [...libraryData, ...recentAdded];

const textual = {
  base: "text-xs text-inverted/70 font-semibold",
};

const BookDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const book = allBooks.find((b) => b.id === Number(id));

  if (!book)
    return (
      <div className="border-2 border-inverted mx-auto h-80 w-40 flex items-center justify-center">
        Book not found
      </div>
    );

  return (
    <div className="pt-14 sm:pt-16 bg-offwhite/20 min-h-screen">
      <NavBar />
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8">
        {/* TOP SPACE / BREADCRUMB AREA */}
        <div
          className={`flex flex-wrap items-center gap-2 pt-6 uppercase tracking-widest text-xs ${textual.base}`}
        >
          <Link to="/" className="flex cursor-pointer">
            books
          </Link>
          <p>
            <FaArrowRight />
          </p>
          <p>{book.title}</p>
        </div>

        <div className="h-6 sm:h-10 font-semibold text-inverted/80 text-xs uppercase" />

        {/* MAIN */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center my-6 gap-8">
          {/* IMAGE */}
          <div className="w-full lg:w-1/3 p-4 sm:p-6 rotater rounded-2xl flex items-center justify-center">
            <img
              src={book.image}
              alt={book.title}
              className="w-full max-w-xs sm:max-w-sm object-contain -rotate-6 shade textshade"
            />
          </div>

          {/* DETAILS */}
          <div className="w-full lg:w-3/5 flex flex-col gap-4 sm:gap-6">
            {/* TITLE */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                {book.title}
              </h1>
              <p className="italic text-xs text-inverted/70 font-semibold tracking-widest">
                {book.author}
              </p>
            </div>

            {/* META */}
            <div className="flex flex-wrap gap-6 mt-2 sm:mt-4">
              <div>
                <p className={`uppercase ${textual.base}`}>Curated by</p>
                <p className={`uppercase text-yellow-600 ${textual.base}`}>
                  Hardbooks.shop
                </p>
              </div>

              <div className="">
                <p className={`uppercase ${textual.base}`}>Format</p>
                <p
                  className={`capitalize text-black/80 text-xs font-semibold tracking-wide`}
                >
                  {book.format}
                </p>
              </div>

              <div>
                {/* <p className={`uppercase ${textual.base}`}>Rating</p> */}
                <p className="text-yellow-600 tracking-widest">
                  <p>
                    {"★".repeat(Math.floor(book.rating))}
                    {"☆".repeat(5 - Math.floor(book.rating))}
                  </p>
                </p>
              </div>
            </div>

            {/* SUMMARY */}
            <div className={`mt-2 sm:mt-4 leading-5 text-sm ${textual.base}`}>
              {book.summary}
            </div>

            {/* PRICE + STOCK */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 mt-4 sm:mt-6 items-start sm:items-center">
              <p className="text-black/80 text-2xl sm:text-3xl font-semibold">
                ₦{book.price.toLocaleString()}
              </p>

              <p className="text-red-600 font-semibold text-xs uppercase textshade tracking-widest">
                Only {book.copies} left
              </p>
            </div>

            {/* BUTTON */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <CartButton
                variant="primary"
                size="medium"
                className="w-full sm:w-auto py-2 mt-6"
                disabled={typeof book.copies === "number" && book.copies <= 0}
                onClick={() => {
                  if (typeof book.copies === "number" && book.copies <= 0)
                    return;

                  addItem(book, 1);
                  navigate("/cart");
                }}
              >
                {typeof book.copies === "number" && book.copies <= 0
                  ? "Out of Stock"
                  : "Add to Cart"}
              </CartButton>

              <button
                type="button"
                className="bg-primary p-2 sm:mt-6 flex items-center justify-center text-white hover:scale-110 transition"
                aria-label="Add to wishlist"
              >
                <FaHeartbeat size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
