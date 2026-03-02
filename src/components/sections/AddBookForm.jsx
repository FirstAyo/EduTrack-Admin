import { useMemo, useState } from "react";

const initialForm = {
  bookName: "",
  author: "",
  bookId: "",
  classLevel: "",
  publication: "",
  shelfLocation: "",
  borrowerId: "",
  status: "",
  description: "",
};

export default function AddBookForm({ onSubmit, onCancel }) {
  const [form, setForm] = useState(initialForm);

  // 5+ options each (as requested)
  const classOptions = useMemo(
    () => ["6-8", "9-10", "11-12", "K-5", "All Levels", "College"],
    [],
  );

  const publicationOptions = useMemo(
    () => [
      "Oxford Press",
      "Pearson",
      "McGraw-Hill",
      "Cambridge",
      "Scholastic",
      "Wiley",
    ],
    [],
  );

  const shelfOptions = useMemo(
    () => ["A1", "A3", "B2", "B5", "C1", "C5", "D4"],
    [],
  );

  const statusOptions = useMemo(
    () => ["Available", "Checked Out", "Reserved", "Lost", "Damaged"],
    [],
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => setForm(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: simple front-end validation
    if (!form.bookName || !form.author || !form.bookId) return;

    // If a parent passes onSubmit, call it. If not, just log.
    if (typeof onSubmit === "function") onSubmit(form);
    else console.log("New Book:", form);

    handleReset();
  };

  return (
    <section className="w-full bg-white border border-slate-200 rounded-xl">
      <div className="p-6">
        <h2 className="text-base font-semibold text-slate-800">
          Add Book Information
        </h2>

        <form onSubmit={handleSubmit} className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Book Name */}
            <Field label="Book Name">
              <input
                name="bookName"
                value={form.bookName}
                onChange={handleChange}
                placeholder="Enter book name"
                className="w-full h-12 px-4 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-100"
              />
            </Field>

            {/* Author */}
            <Field label="Author">
              <input
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="Enter author name"
                className="w-full h-12 px-4 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-100"
              />
            </Field>

            {/* Book ID */}
            <Field label="Book ID">
              <input
                name="bookId"
                value={form.bookId}
                onChange={handleChange}
                placeholder="Enter ID"
                className="w-full h-12 px-4 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-100"
              />
            </Field>

            {/* Class Level */}
            <Field label="Class Level">
              <select
                name="classLevel"
                value={form.classLevel}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select class</option>
                {classOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            {/* Publication */}
            <Field label="Publication">
              <select
                name="publication"
                value={form.publication}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select publication</option>
                {publicationOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            {/* Shelf Location */}
            <Field label="Self Location">
              <select
                name="shelfLocation"
                value={form.shelfLocation}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select location</option>
                {shelfOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            {/* Borrower ID */}
            <Field label="Borrower ID">
              <input
                name="borrowerId"
                value={form.borrowerId}
                onChange={handleChange}
                placeholder="Enter borrower ID"
                className="w-full h-12 px-4 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-100"
              />
            </Field>

            {/* Status */}
            <Field label="Status">
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select status</option>
                {statusOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            {/* Description (full width like screenshot) */}
            <div className="md:col-span-2">
              <Field label="Description">
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                  className="w-full min-h-[180px] p-4 rounded-lg border border-slate-200 outline-none resize-y focus:ring-2 focus:ring-blue-100"
                />
              </Field>
            </div>

            {/* Bottom helper bar */}
            <div className="md:col-span-2">
              <div className="w-full h-14 rounded-lg border border-slate-200 flex items-center justify-center text-sm text-slate-700 font-medium">
                What are you looking
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              className="h-12 px-7 rounded-lg bg-blue-600 text-white font-semibold"
            >
              + Add Book
            </button>

            <button
              type="button"
              onClick={typeof onCancel === "function" ? onCancel : handleReset}
              className="h-12 px-7 rounded-lg bg-red-500 text-white font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
