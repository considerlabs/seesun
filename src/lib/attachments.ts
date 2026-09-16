export const MAX_ATTACHMENT_SIZE = 10 * 1024 * 1024;
export const MAX_ATTACHMENT_COUNT = 5;

export function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

export function validateAttachments(files: File[]) {
  if (files.length > MAX_ATTACHMENT_COUNT) {
    return `첨부파일은 최대 ${MAX_ATTACHMENT_COUNT}개까지 올릴 수 있습니다.`;
  }
  const tooBig = files.find((file) => file.size > MAX_ATTACHMENT_SIZE);
  if (tooBig) {
    return `${tooBig.name} 파일이 ${formatFileSize(MAX_ATTACHMENT_SIZE)}를 초과합니다.`;
  }
  return null;
}
