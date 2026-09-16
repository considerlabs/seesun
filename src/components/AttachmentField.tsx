"use client";

import { Paperclip, X } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import {
  formatFileSize,
  MAX_ATTACHMENT_COUNT,
  MAX_ATTACHMENT_SIZE,
  validateAttachments,
} from "@/lib/attachments";

export function AttachmentField() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState("");

  function syncFiles(next: File[]) {
    const data = new DataTransfer();
    next.forEach((file) => data.items.add(file));
    if (inputRef.current) inputRef.current.files = data.files;
    setFiles(next);
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []);
    const message = validateAttachments(selected);
    if (message) {
      setError(message);
      syncFiles(files);
      return;
    }
    setError("");
    syncFiles(selected);
  }

  function removeFile(index: number) {
    const next = files.filter((_, i) => i !== index);
    setError("");
    syncFiles(next);
  }

  return (
    <div>
      <span className="block text-sm text-muted">첨부파일</span>
      <p className="mt-1 text-xs text-muted">
        파일당 최대 {formatFileSize(MAX_ATTACHMENT_SIZE)}, {MAX_ATTACHMENT_COUNT}개까지
      </p>
      <input
        ref={inputRef}
        id="attachments"
        name="attachments"
        type="file"
        multiple
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
        onChange={onChange}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="mt-2 inline-flex items-center gap-2 rounded border border-line px-3 py-2 text-sm font-medium hover:bg-accent-soft"
      >
        <Paperclip size={16} weight="bold" />
        파일 선택
      </button>
      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
      {files.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${file.size}-${index}`}
              className="flex items-center gap-2 rounded border border-line px-3 py-2 text-sm"
            >
              <Paperclip size={16} className="shrink-0 text-muted" />
              <span className="min-w-0 flex-1 truncate">{file.name}</span>
              <span className="shrink-0 text-muted">{formatFileSize(file.size)}</span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="shrink-0 rounded p-1 text-muted hover:bg-accent-soft hover:text-foreground"
                aria-label={`${file.name} 제거`}
              >
                <X size={14} weight="bold" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
