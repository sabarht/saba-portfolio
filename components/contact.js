import Link from "next/link";
export default function Contact() {
  return (
    <section>
      <p>
        Contact me at
        <Link href="mailto:sabarht@gmail.com"> sabarht@gmail.com </Link> or
        through this form bellow:
      </p>
      <form className="max-w-xl p-4 space-y-2">
        <div className="flex flex-col space-y-1">
          <label htmlFor="email">Your email:</label>
          <input
            id="email"
            placeholder="Your email"
            className="border border-gray-200 rounded"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="message">Your message:</label>
          <textarea
            id="message"
            className="border h-52 border-gray-200 rounded"
            placeholder="Your message"
          ></textarea>
        </div>
        <button className="py-2 px-6 bg-red-400 rounded" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
