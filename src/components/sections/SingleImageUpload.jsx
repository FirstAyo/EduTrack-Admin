import React, { useEffect, useMemo, useRef, useState } from "react";
import imageIcon from "../../assets/icons/image.svg";

/**
 * SingleImageUpload (Reusable)
 * - Drag & drop OR Browse
 * - Restrict to only one upload (replaces existing)
 * - Preview selected image
 * - Only image files allowed (blocks PDF/DOCX/etc)
 * - Shows error message for invalid formats
 */
export default function SingleImageUpload({
  title = "Teacher Image",
  value, // controlled (optional) - File | null
  onChange, // (file: File | null) => void

  accept = "image/*", // default: "image/*"
  disabled = false,

  // Optional: if you already have an image URL from DB
  initialPreviewUrl,

  // UI text overrides
  helperText = "Drag and drop an image or",
  browseText = "Browse",
  errorClassName = "",
  className = "",
}) {
  const inputRef = useRef(null);

  // If parent doesn't pass `value`, we manage internal state
  const [internalFile, setInternalFile] = useState(null);
  const file = value !== undefined ? value : internalFile;

  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");

  const setFile = (next) => {
    if (value === undefined) setInternalFile(next);
    if (onChange) onChange(next);
  };

  const isValidImage = (f) => {
    // strict check: MIME must be an image
    return f && typeof f.type === "string" && f.type.startsWith("image/");
  };

  const handlePick = (f) => {
    setError("");

    if (!isValidImage(f)) {
      // clear current selection if invalid
      setFile(null);
      setError(
        "Invalid file format. Please upload an image (JPG, PNG, WEBP, GIF, etc.).",
      );
      return;
    }

    // Single upload enforced: always keep just one (replace existing)
    setFile(f);
  };

  const openFileDialog = () => {
    if (disabled) return;
    if (inputRef.current) inputRef.current.click();
  };

  const onInputChange = (e) => {
    const picked = (e.target.files && e.target.files[0]) || null;
    if (!picked) return;

    handlePick(picked);

    // allow re-selecting the same file later
    e.target.value = "";
  };

  const onDrop = (e) => {
    e.preventDefault();
    if (disabled) return;

    setIsDragging(false);

    const dropped = (e.dataTransfer.files && e.dataTransfer.files[0]) || null;
    if (!dropped) return;

    handlePick(dropped);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    if (disabled) return;
    setIsDragging(true);
  };

  const onDragLeave = () => setIsDragging(false);

  const removeFile = () => {
    setError("");
    setFile(null);
  };

  // Create preview URL WITHOUT setState
  const objectUrl = useMemo(() => {
    if (!file) return "";
    return URL.createObjectURL(file);
  }, [file]);

  // Cleanup object URL when it changes/unmounts
  useEffect(() => {
    if (!objectUrl) return;
    return () => URL.revokeObjectURL(objectUrl);
  }, [objectUrl]);

  const previewUrl = file ? objectUrl : initialPreviewUrl || "";

  return (
    <div className={`w-full my-5 ${className}`}>
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-base font-semibold text-slate-800">{title}</h3>

        <div
          onClick={() => (!file ? openFileDialog() : undefined)}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          className={[
            "mt-4 rounded-lg border border-slate-200 bg-white",
            "min-h-[200px] flex items-center justify-center text-center px-4",
            disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
            isDragging ? "border-blue-500 ring-2 ring-blue-500/30" : "",
          ].join(" ")}
          role="button"
          tabIndex={0}
        >
          {!previewUrl ? (
            <div className="flex flex-col items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-blue-50 flex items-center justify-center">
                {/* simple image icon */}
                <img
                  src={imageIcon}
                  alt="image icon"
                  className="h-7 w-7 object-cover"
                />
              </div>

              <p className="text-sm text-slate-500">
                {helperText}{" "}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    openFileDialog();
                  }}
                  className="text-blue-600 font-semibold underline underline-offset-2"
                >
                  {browseText}
                </span>
              </p>

              <p className="text-xs text-slate-400">
                {accept === "image/*"
                  ? "Supported: JPG, PNG, WEBP, GIF…"
                  : `Accepted: ${accept}`}
              </p>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center gap-3 py-4">
              <img
                src={previewUrl}
                alt="Uploaded preview"
                className="max-h-44 w-auto rounded-md border border-slate-200 object-cover"
              />

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openFileDialog();
                  }}
                  disabled={disabled}
                  className="h-9 px-4 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:cursor-not-allowed"
                >
                  Replace
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile();
                  }}
                  disabled={disabled}
                  className="h-9 px-4 rounded-lg bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 disabled:cursor-not-allowed"
                >
                  Remove
                </button>
              </div>

              {file ? (
                <p className="text-xs text-slate-500 truncate max-w-full">
                  {file.name}
                </p>
              ) : null}
            </div>
          )}
        </div>

        {/* Hidden input */}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          disabled={disabled}
          onChange={onInputChange}
          className="hidden"
        />

        {/* Error */}
        {error ? (
          <p className={`mt-3 text-sm text-red-600 ${errorClassName}`}>
            {error}
          </p>
        ) : null}
      </div>
    </div>
  );
}
