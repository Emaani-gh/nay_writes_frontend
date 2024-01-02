import DOMPurify from "dompurify";
// My helper function

export const sanitizeAndValidateHTML = (htmlContent) => {
  const sanitizedHTML = DOMPurify.sanitize(htmlContent);
  return sanitizedHTML;
};
