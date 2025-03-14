export const addUniqueIdsToHeadings = (htmlContent: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4'));

  headings.forEach((heading, index) => {
    const textId = heading.textContent
      ?.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

    heading.id = textId ? `${textId}-${index}` : `heading-${index}`;
  });

  return doc.body.innerHTML; // Return updated HTML
};

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
